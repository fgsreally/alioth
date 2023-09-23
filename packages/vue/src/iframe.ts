import type { SetupContext } from 'vue'
import { defineComponent, h, render, watch } from 'vue'

function cloneStyleNode(): Node[] {
  const arr = []

  const styles = document.getElementsByTagName('style')
  for (let i = 0; i < styles.length; i++) {
    const newStyleNode = styles[i].cloneNode()
    // @ts-expect-error clone style tag
    newStyleNode.innerHTML = styles[i].innerHTML
    arr.push(newStyleNode)
  }

  const links = document.getElementsByTagName('link')
  for (let i = 0; i < links.length; i++) {
    if (links[i].rel === 'stylesheet')
      arr.push(links[i].cloneNode())
  }
  return arr
}

function setCanvasTag(iframe: HTMLIFrameElement) {
  const iframeHTML = (iframe.contentWindow as Window).document.documentElement
  iframeHTML.classList.add('al-canvas')
}

function injectStyle(iframe: HTMLIFrameElement, styleSheet?: string) {
  const iframeDocument = (iframe.contentWindow as Window).document

  if (styleSheet) {
    const injectStyle = document.createElement('style')
    injectStyle.innerHTML = styleSheet
    iframeDocument.head.append(injectStyle)
  }

  iframeDocument.head.append(...cloneStyleNode())
}

function injectScript(iframe: HTMLIFrameElement) {
  const iframeDocument = (iframe.contentWindow as Window).document

  const scriptTags = document.querySelectorAll('script[data-alioth]')

  for (let i = 0; i < scriptTags.length; i++) {
    const script = document.createElement('script')
    script.src = (scriptTags[i] as HTMLScriptElement).src
    iframeDocument.head.append(script)
  }
}

function proxyEvents(iframe: HTMLIFrameElement) {
  const iframeWindow = (iframe.contentWindow as Window)

  const { x, y } = iframe.getBoundingClientRect();
  ['click', 'mousedown', 'mousemove', 'mouseup'].forEach((ev) => {
    iframeWindow.addEventListener(ev, (e) => {
      const proxyEvent = mouseProxy(e as MouseEvent);

      (proxyEvent.clientX as number) += x;
      (proxyEvent.clientY as number) += y
      const event = new MouseEvent(ev, proxyEvent)
      window.dispatchEvent(event)
    })
  });

  ['keydown', 'keyup'].forEach((ev) => {
    iframeWindow.addEventListener(ev, (e) => {
      const proxyEvent = keyBoardProxy(e as KeyboardEvent)

      const event = new KeyboardEvent(ev, proxyEvent)
      window.dispatchEvent(event)
    })
  })
}

const iframeLib: Record<string, HTMLIFrameElement> = {}

let isLoad = false
/**
 * @description 通过iframe实现样式隔离
 */
export const iframeBox = defineComponent({
  props: {
    uuid: String,
    styleSheet: String,
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
  setup(props, { slots }: SetupContext) {
    return () => {
      if (!slots.default)
        return null

      const childrenId = slots.default()

      async function onload() {
        // @ts-expect-error get iframe instance
        const iframe = this as HTMLIFrameElement
        injectScript(iframe)
        injectStyle(iframe)
        setCanvasTag(iframe)
        proxyEvents(iframe)
        if (!isLoad) {
          const originAppend = document.head.appendChild.bind(document.head)
          const originRemove = document.head.removeChild.bind(document.head)
          Object.defineProperty(document.head, 'appendChild', {
            configurable: true,
            get() {
              return (el: any) => {
                if (el instanceof HTMLStyleElement && el.getAttribute('data-vite-dev-id'))
                  iframe.contentWindow?.document.head.appendChild(el)

                else
                  originAppend(el)
              }
            },
          })
          Object.defineProperty(document.head, 'removeChild', {
            configurable: true,
            get() {
              return (el: any) => {
                if (el instanceof HTMLStyleElement && el.getAttribute('data-vite-dev-id'))
                  iframe.contentWindow?.document.head.removeChild(el)

                else
                  originRemove(el)
              }
            },
          })
          isLoad = true
        }
        render(childrenId[0] as any, iframe.contentWindow?.document.body as HTMLElement)
      }
      if (!iframeLib[props.uuid as string]) {
        iframeLib[props.uuid as string] = document.createElement('iframe')
        iframeLib[props.uuid as string].onload = onload
        iframeLib[props.uuid as string].classList.add('iframebox')// al-editor__iframe
      }

      watch(() => [props.width, props.height], (n) => {
        iframeLib[props.uuid as string].width = `${n[0]}`
        iframeLib[props.uuid as string].height = `${n[1]}`
      }, {
        immediate: true,
      })

      return h('div', {
        class: 'al-window',
        onVnodeMounted(vnode) {
          (vnode.el as HTMLElement).appendChild(iframeLib[props.uuid as string])
        },
      })
    }
  },
})

type CanWrite<T> = {
  -readonly [K in keyof T]: T[K]
}
export function mouseProxy(e: MouseEvent) {
  const newEvent: Partial<CanWrite<MouseEvent>> = {}

  const allProperties = ['clientY', 'clientX', 'screenX', 'screenY', 'ctrlKey', 'shiftKey', 'altKey', 'metaKey', 'button'] as (keyof MouseEvent)[]
  allProperties.forEach((i) => {
    (newEvent[i] as any) = e[i]
  })

  return newEvent
}

export function keyBoardProxy(e: KeyboardEvent) {
  const newEvent: Partial<CanWrite<KeyboardEvent>> = {}
  const allProperties = ['key', 'code', 'location', 'ctrlKey', 'shiftKey', 'altKey', 'metaKey', 'repeat', 'isComposing', 'charCode', 'keyCode', 'which'] as (keyof KeyboardEvent)[]
  allProperties.forEach((i) => {
    (newEvent[i] as any) = e[i]
  })

  return newEvent
}
