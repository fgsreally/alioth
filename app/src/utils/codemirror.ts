import type { Ref, UnwrapNestedRefs } from 'vue'
import { watch } from 'vue'
import { Compartment } from '@codemirror/state'
import {
  Decoration,
  EditorView,
  MatchDecorator,
  ViewPlugin,
  hoverTooltip,
} from '@codemirror/view'
import { get, has } from 'lodash-es'

import IconUser from '~icons/lucide/user?raw'

export const inputTheme = EditorView.theme({
  '&': {
    fontSize: 'var(--font-size-body)',
    height: '100%',
    width: '100%',
    flex: '1',
  },
  '.cm-content': {
    caretColor: 'var(--secondary-dark-color)',
    fontFamily: 'var(--font-sans)',
    color: 'var(--secondary-dark-color)',
    backgroundColor: 'transparent',
    height: '100%',
  },
  '.cm-cursor': {
    borderColor: 'var(--secondary-color)',
  },
  '.cm-widgetBuffer': {
    position: 'absolute',
  },
  '.cm-selectionBackground': {
    backgroundColor: 'var(--accent-dark-color)',
    color: 'var(--accent-contrast-color)',
    borderRadius: '2px',
  },
  '.cm-panels': {
    backgroundColor: 'var(--primary-light-color)',
    color: 'var(--secondary-light-color)',
    zIndex: '1',
  },
  '.cm-panels.cm-panels-top': {
    borderBottom: '1px solid var(--divider-light-color)',
  },
  '.cm-panels.cm-panels-bottom': {
    borderTop: '1px solid var(--divider-light-color)',
  },
  '.cm-search': {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexShrink: '0',
    overflow: 'auto',
    padding: '0.25rem 0.5rem !important',
  },
  '.cm-search label': {
    display: 'inline-flex',
    alignItems: 'center',
  },
  '.cm-textfield': {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--secondary-dark-color)',
    borderColor: 'var(--divider-light-color)',
    borderRadius: '4px',
    fontSize: 'var(--font-size-tiny)',
    fontWeight: '600',
    flexShrink: '0',
    border: '1px solid var(--divider-color)',
  },
  '.cm-button': {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--secondary-light-color)',
    backgroundImage: 'none',
    borderRadius: '4px',
    fontSize: 'var(--font-size-tiny)',
    fontWeight: '600',
    textTransform: 'capitalize',
    flexShrink: '0',
    border: '1px solid var(--divider-color)',
  },
  '.cm-completionLabel': {
    color: 'var(--secondary-color)',
  },
  '.cm-tooltip': {
    backgroundColor: 'var(--primary-dark-color)',
    color: 'var(--secondary-light-color)',
    border: 'none',
    borderRadius: '4px',
  },
  '.cm-tooltip-arrow': {
    color: 'var(--tooltip-color)',
  },
  '.cm-tooltip-arrow:after': {
    borderTopColor: 'currentColor !important',
  },
  '.cm-tooltip-arrow:before': {
    borderTopColor: 'currentColor !important',
  },
  '.cm-tooltip.cm-tooltip-autocomplete > ul': {
    fontFamily: 'var(--font-mono)',
  },
  '.cm-tooltip-autocomplete ul li[aria-selected]': {
    backgroundColor: 'var(--accent-dark-color)',
    color: 'var(--accent-contrast-color)',
  },
  '.cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel': {
    color: 'var(--accent-contrast-color)',
  },
  '.cm-activeLine': { backgroundColor: 'transparent' },
  '.cm-searchMatch': {
    outline: '1px solid var(--accent-dark-color)',
    backgroundColor: 'var(--divider-dark-color)',
    borderRadius: '2px',
  },
  '.cm-selectionMatch': {
    outline: '1px solid var(--accent-dark-color)',
    backgroundColor: 'var(--divider-light-color)',
    borderRadius: '2px',
  },
  '.cm-matchingBracket, .cm-nonmatchingBracket': {
    backgroundColor: 'var(--divider-color)',
    outline: '1px solid var(--accent-dark-color)',
    borderRadius: '2px',
  },
  '.cm-gutters': {
    fontFamily: 'var(--font-mono)',
    backgroundColor: 'var(--primary-color)',
    borderColor: 'var(--divider-light-color)',
  },
  '.cm-lineNumbers': {
    minWidth: '3em',
    color: 'var(--secondary-light-color)',
  },
  '.cm-foldGutter': {
    minWidth: '2em',
    color: 'var(--secondary-light-color)',
  },
  '.cm-foldGutter .cm-gutterElement': {
    textAlign: 'center',
  },
  '.cm-line': {
    lineHeight: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
  },
  '.cm-activeLineGutter': {
    backgroundColor: 'transparent',
  },
  '.cm-scroller::-webkit-scrollbar': {
    display: 'none',
  },
  '.cm-foldPlaceholder': {
    backgroundColor: 'var(--divider-light-color)',
    color: 'var(--secondary-dark-color)',
    borderColor: 'var(--divider-dark-color)',
  },
})
const HOPP_ENVIRONMENT_REGEX = /\{\{(.*?)\}\}/g

const HOPP_ENV_HIGHLIGHT
  = 'cursor-help transition rounded px-1 focus:outline-none mx-0.5 env-highlight'
const HOPP_ENV_HIGHLIGHT_FOUND = 'env-found'
const HOPP_ENV_HIGHLIGHT_NOT_FOUND = 'env-not-found'

function cursorTooltipField(variables: Record<string, any>) {
  return hoverTooltip(
    (view, pos, side) => {
      const { from, to, text } = view.state.doc.lineAt(pos)

      let start = pos
      let end = pos

      while (start > from && /[a-zA-Z0-9-_]+/.test(text[start - from - 1]))
        start--
      while (end < to && /[a-zA-Z0-9-_]+/.test(text[end - from])) end++

      if (
        (start === pos && side < 0)
        || (end === pos && side > 0)
        || !HOPP_ENVIRONMENT_REGEX.test(
          text.slice(start - from - 2, end - from + 2),
        )
      )
        return null

      const varPath = text.slice(start - from, end - from)

      const variable = get(variables, varPath)

      const envTypeIcon = `<span class="inline-flex items-center justify-center my-1">${
        IconUser
      }</span>`

      // const appendEditAction = (tooltip: HTMLElement) => {
      //   const editIcon = document.createElement('button')
      //   editIcon.className
      //     = 'ml-2 cursor-pointer text-accent hover:text-accentDark'
      //   editIcon.addEventListener('click', () => {
      //     const isPersonalEnv
      //       = envName === 'Global' || selectedEnvType !== 'TEAM_ENV'
      //     const action = isPersonalEnv ? 'my' : 'team'

      //   })
      //   editIcon.innerHTML = `<span class="inline-flex items-center justify-center my-1">${IconEdit}</span>`
      //   tooltip.appendChild(editIcon)
      // }

      return {
        pos: start,
        end: to,
        above: true,
        arrow: true,
        create() {
          const dom = document.createElement('span')
          const tooltipContainer = document.createElement('span')
          const kbd = document.createElement('kbd')
          const icon = document.createElement('span')
          icon.innerHTML = envTypeIcon
          icon.className = 'mr-2'
          kbd.textContent = has(variables, varPath) ? variable : 'Not Found'
          tooltipContainer.appendChild(icon)
          tooltipContainer.appendChild(document.createTextNode(`${variable ? varPath : 'Choose an Environment'} `))
          tooltipContainer.appendChild(kbd)
          // if (tooltipEnv)
          //   appendEditAction(tooltipContainer)
          tooltipContainer.className = 'tippy-content'
          dom.className = 'tippy-box'
          dom.dataset.theme = 'tooltip'
          dom.appendChild(tooltipContainer)
          return { dom }
        },
      }
    },
    // HACK: This is a hack to fix hover tooltip not coming half of the time
    // https://github.com/codemirror/tooltip/blob/765c463fc1d5afcc3ec93cee47d72606bed27e1d/src/tooltip.ts#L622
    // Still doesn't fix the not showing up some of the time issue, but this is atleast more consistent
    { hoverTime: 1 } as any,
  )
}

function checkEnv(env: string, variables: Record<string, any>) {
  const className = has(variables, env.slice(2, -2))
    ? HOPP_ENV_HIGHLIGHT_FOUND
    : HOPP_ENV_HIGHLIGHT_NOT_FOUND

  return Decoration.mark({
    class: `${HOPP_ENV_HIGHLIGHT} ${className}`,
  })
}

export function environmentHighlightStyle(variables: Record<string, any>) {
  const decorator = new MatchDecorator({
    regexp: HOPP_ENVIRONMENT_REGEX,
    decoration: m => checkEnv(m[0], variables),
  })

  return ViewPlugin.define(
    view => ({
      decorations: decorator.createDeco(view),
      update(u) {
        this.decorations = decorator.updateDeco(u, this.decorations)
      },
    }),
    {
      decorations: v => v.decorations,
    },
  )
}

export class VariablePlugin {
  private compartment = new Compartment()

  constructor(
    private editorView: Ref<EditorView | undefined>,
    private variables: UnwrapNestedRefs< Record<string, any>>,
  ) {
    watch(() => this.variables, () => {
      this.editorView.value?.dispatch({
        effects: this.compartment.reconfigure([
          cursorTooltipField(this.variables),
          environmentHighlightStyle(this.variables),
        ]),
      })
    })
  }

  get extension() {
    return this.compartment.of([
      cursorTooltipField(this.variables),
      environmentHighlightStyle(this.variables),
    ])
  }
}
