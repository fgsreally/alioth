<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue'
import * as monaco from 'monaco-editor'
import { debounce } from 'lodash-es'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import onedark from '../assets/atomDark.json'
// import darktheme from "theme-vitesse/themes/vitesse-dark.json";
// import lightTheme from "theme-vitesse/themes/vitesse-light.json";
// @ts-expect-error
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
