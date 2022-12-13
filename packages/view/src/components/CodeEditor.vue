<!-- eslint-disable new-cap -->
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue'
import * as monaco from 'monaco-editor'
import { debounce } from 'lodash-es'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import onedark from '../assets/atomDark.json'
// import darktheme from "theme-vitesse/themes/vitesse-dark.json";
// import lightTheme from "theme-vitesse/themes/vitesse-light.json";
self.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (label === 'html')
      return new htmlWorker()

    return new tsWorker()
  },
}

export default defineComponent({
  props: {
    value: String, // 编辑器默认内容
    width: Number,
    height: Number,
    isFunc: { type: Boolean, default: false },

    isWatch: { type: Boolean, default: false },
    prefix: { type: String, default: '' },
    language: {
      type: String,
      default: 'javascript',
    },
  },
  emits: ['update'],
  setup(props, { emit, expose }) {
    const root = ref<HTMLElement>()
    const content = ref<string>('')
    let editor: monaco.editor.IStandaloneCodeEditor
    monaco.editor.defineTheme('atom-one-dark', onedark as any)
    monaco.editor.setTheme('atom-one-dark')

    monaco.languages.registerCompletionItemProvider('javascript', {
      provideCompletionItems(model, position) {
        const word = model.getWordUntilPosition(position)
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        }
        return {
          suggestions: [
            {
              label: 'fgs_used', // 用户键入list2d_basic的任意前缀即可触发自动补全，选择该项即可触发添加代码片段
              kind: monaco.languages.CompletionItemKind.Snippet,
              documentation: '2D-list with built-in basic type elements',
              // eslint-disable-next-line no-template-curly-in-string
              insertText: '[[${1:0}]*${3:cols} for _ in range(${2:rows})]', // ${i:j}，其中i表示按tab切换的顺序编号，j表示默认串
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range,
            },
          ],
        }
      },
    })

    expose({
      content,
      update: (v: string) => {
        editor.setValue(props.prefix + v)
      },
    })
    if (props.isWatch) {
      watch(
        () => props.value,
        (n) => {
          editor.setValue(props.prefix + n)
        },
      )
    }
    onMounted(() => {
      // monaco.editor.defineTheme("vitesse-dark", darktheme);
      // // @ts-expect-error
      // monaco.editor.defineTheme("vitesse-light", lightTheme);
      editor = monaco.editor.create(root.value as HTMLElement, {
        value: props.prefix + props.value,
        language: props.language,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
      })

      const update = debounce((ret: any) => {
        emit('update', ret)
      }, 2000)

      editor.onDidChangeModelContent(() => {
        content.value = editor?.getValue() as string

        if (props.isFunc) {
          try {
            // eslint-disable-next-line no-new-func
            const ret = new Function(content.value)()
            update(ret)
          }
          catch (e) {}
        }
      })

      editor.layout({
        height: props.height as number,
        width: props.width as number,
      })
    })

    onUnmounted(() => {
      editor.dispose() // 销毁
    })

    return {
      root,
    }
  },
})
</script>

<template>
  <div ref="root" />
</template>
