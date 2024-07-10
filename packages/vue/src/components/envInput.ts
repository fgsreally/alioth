/* eslint-disable @typescript-eslint/no-unused-vars */
import { Ref, computed, defineComponent, h, nextTick, onMounted, ref, watch } from 'vue'
import type { ViewUpdate } from '@codemirror/view'
import {
  Decoration,
  EditorView,
  MatchDecorator,
  ViewPlugin,
  hoverTooltip,
  keymap,
  placeholder as placeholderExt,
  tooltips,
} from '@codemirror/view'
import type { Extension } from '@codemirror/state'
import { Compartment, EditorSelection, EditorState } from '@codemirror/state'
import { clone, has } from 'lodash-es'
import { history, historyKeymap } from '@codemirror/commands'
import { onClickOutside, useDebounceFn } from '@vueuse/core'
import { get, useR } from 'phecda-vue'
import { internal } from 'alioth-vue'
export const EnvInput = defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true,
    },

    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  emits: {
    'update:modelValue': (data: string) => true,
    'change': (data: string) => true,

  },
  setup(props, { emit, attrs }) {
    const cachedValue = ref(props.modelValue)

    const view = ref<EditorView>()

    const editor = ref<HTMLDivElement>(null as any)

    const ENV_HIGHLIGHT_FOUND = 'env-found'
    const ENV_HIGHLIGHT_NOT_FOUND = 'env-not-found'
    const ENV_REGEX = /\{\{(.*?)\}\}/g

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
          || !ENV_REGEX.test(
            text.slice(start - from - 2, end - from + 2),
          )
          )
            return null

          const varPath = text.slice(start - from, end - from)

          const variable = get(variables, varPath)

          const envTypeIcon = `<span class="inline-flex items-center justify-center my-1">${
          IconUser
        }</span>`

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
        ? ENV_HIGHLIGHT_FOUND
        : ENV_HIGHLIGHT_NOT_FOUND

      return Decoration.mark({
        class: `${HOPP_ENV_HIGHLIGHT} ${className}`,
      })
    }

    function environmentHighlightStyle(variables: Record<string, any>) {
      const decorator = new MatchDecorator({
        regexp: /\{\{(.*?)\}\}/g,
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

    class VariablePlugin {
      private compartment = new Compartment()

      constructor(
        private editorView: Ref<EditorView | undefined>,
        private variables: Ref<Record<string, any>>,
      ) {
        watch(() => this.variables, () => {
          this.editorView.value?.dispatch({
            effects: this.compartment.reconfigure([
              cursorTooltipField(this.variables.value),
              environmentHighlightStyle(this.variables.value),
            ]),
          })
        })
      }

      get extension() {
        return this.compartment.of([
          cursorTooltipField(this.variables.value),
          environmentHighlightStyle(this.variables.value),
        ])
      }
    }

    watch(
      () => props.modelValue,
      (newVal) => {
        const singleLinedText = newVal.replaceAll('\n', '')

        const currDoc = view.value?.state.doc
          .toJSON()
          .join(view.value.state.lineBreak)

        if (cachedValue.value !== singleLinedText || newVal !== currDoc) {
          cachedValue.value = singleLinedText

          view.value?.dispatch({
            filter: false,
            changes: {
              from: 0,
              to: view.value.state.doc.length,
              insert: singleLinedText,
            },
          })
        }
      },
      {
        immediate: true,
        flush: 'sync',
      },
    )

    const envTooltipPlugin = new VariablePlugin(view, ref(internal.scope.data))

    function initView(el: any) {
      const extensions: Extension = [
        EditorView.contentAttributes.of({ 'aria-label': props.placeholder }),
        EditorView.contentAttributes.of({ 'data-enable-grammarly': 'false' }),
        EditorView.updateListener.of((update) => {
          if (props.readonly)
            update.view.contentDOM.inputMode = 'none'
        }),
        EditorState.changeFilter.of(() => !props.readonly),
        tooltips({
          position: 'absolute',
        }),
        envTooltipPlugin,
        placeholderExt(props.placeholder),

        ViewPlugin.fromClass(
          class {
            update(update: ViewUpdate) {
              if (props.readonly)
                return

              if (update.docChanged) {
                cachedValue.value = update.state.doc
                  .toJSON()
                  .join(update.state.lineBreak)

                const value = clone(cachedValue.value).replaceAll('\n', '')

                emit('update:modelValue', value)
                emit('change', value)
              }
            }
          },
        ),
        history(),
        keymap.of([...historyKeymap]),
      ]

      view.value = new EditorView({
        parent: el,
        state: EditorState.create({
          doc: props.modelValue,
          extensions,
        }),
      })
    }

    onMounted(() => {
      if (editor.value) {
        if (!view.value)
          initView(editor.value)
      }
    })

    watch(editor, () => {
      if (editor.value) {
        if (!view.value)
          initView(editor.value)
      }
      else {
        view.value?.destroy()
        view.value = undefined
      }
    })

    return h('div', { ref: editor, ...attrs })
  },
})
