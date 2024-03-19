import { debounce } from 'lodash'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { onMounted, ref } from 'vue'
import { COLOR_MODE, Pages } from '@/constants'

import './userWorker'

import { AutoImportTypings } from './typesResolve'

import useHotKey, { DEFAULT_SHORTCUTS } from '@/hooks/useHotKey'

const autoImportTypings = new AutoImportTypings()
const parseImports = debounce(autoImportTypings.parse, 1500).bind(autoImportTypings)

monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
  target: monaco.languages.typescript.ScriptTarget.ESNext,
  allowNonTsExtensions: true,
  moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
  module: monaco.languages.typescript.ModuleKind.CommonJS,
  /**
   * This option is required to enable the synthetic default imports.
   * Support for `import dayjs from 'dayjs'` instead of `import * as dayjs from 'dayjs'`.
   * This only affects the editor, not the actual compilation.
   */
  allowSyntheticDefaultImports: true,
  noEmit: true,
  allowJs: false,
  sourceMap: true,
  noImplicitAny: false,
})

const updateModel = (path: string, value: string, editorRef: any) => {
  const newModel
    = monaco.editor.getModel(monaco.Uri.parse(path))
    || monaco.editor.createModel(value, 'typescript', monaco.Uri.parse(path))

  if (editorRef.current?.getModel() !== newModel) {
    editorRef.current?.setModel(newModel)
    autoImportTypings.parse(editorRef.current?.getValue() || '')
  }
}

const updateFetchModel = (path: string, value: string, editorRef: any) => {
  const newModel
    = monaco.editor.getModel(monaco.Uri.parse(path))
    || monaco.editor.createModel(value, 'typescript', monaco.Uri.parse(path))

  newModel.setValue(value)

  if (editorRef.current?.getModel() !== newModel) {
    editorRef.current?.setModel(newModel)
    autoImportTypings.parse(editorRef.current?.getValue() || '')
  }
}

function useMonacoEditor(props: {
  value: string
  className?: string
  style?: CSSProperties
  onChange?: (value: string | undefined) => void
  path: string
  height?: string
  colorMode?: string
  readOnly?: boolean
  fontSize?: number
}) {
  const {
    value,
    onChange,
    path,
    height = '100%',
    className,
    style = {},
    colorMode = COLOR_MODE.light,
    readOnly = false,
    fontSize = 14,
  } = props

  let editor: monaco.editor.IStandaloneCodeEditor
  let subscription: monaco.IDisposable
  const monacoEl = ref<HTMLElement>()

  function initEditor() {
    editor = monaco.editor.create(monacoEl.value!, {
      minimap: {
        enabled: false,
      },
      readOnly,
      language: 'typescript',
      automaticLayout: true,
      scrollbar: {
        verticalScrollbarSize: 4,
        horizontalScrollbarSize: 8,
      },
      formatOnPaste: true,
      overviewRulerLanes: 0,
      lineNumbersMinChars: 4,
      fontSize,
      theme: colorMode === COLOR_MODE.dark ? 'AliothThemeDark' : 'AliothEditorTheme',
      scrollBeyondLastLine: false,
    })

    updateModel(path, value, editor)

    setTimeout(() => {
      autoImportTypings.loadDefaults()
    }, 10)
  }
  onMounted(initEditor)
  watchEffect(() => {
    if (monacoEl.value && !editorRef.current) {

    }
  }, [colorMode, path, readOnly, value, fontSize])

  watchEffect(() => {
    if (monacoEl.value && editorRef.value) {
      if (isFetchButtonClicked) {
        updateFetchModel(path, value, editorRef)
        setIsFetchButtonClicked()
      }
      else {
        updateModel(path, value, editorRef)
      }
    }
  }, [path, value, isFetchButtonClicked, setIsFetchButtonClicked])

  // useEffect(() => {
  //   if (monacoEl && editorRef.current) {
  //     editorRef.current.updateOptions({
  //       fontSize: fontSize,
  //       theme: colorMode === COLOR_MODE.dark ? "lafEditorThemeDark" : "lafEditorTheme",
  //     });
  //   }
  // }, [colorMode, fontSize]);

  // onChange
  useEffect(() => {
    subscription?.dispose()
    if (onChange) {
      subscription = editor.onDidChangeModelContent((event) => {
        const code = editor.getValue() || ''
        onChange(code)
        parseImports(code)
      })
    }
  }, [onChange])

  return {
    monaco,
  }
}
