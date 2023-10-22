import { useR } from 'phecda-vue'
import type { AliothEventStack } from 'alioth-vue'

// import 'alioth-preset-elementplus/dist/style.css'

// engine should be exported before all widgets,so it starts with '_'
export { engine as _engine, container } from 'alioth-preset-layout/draggable/editor/index.ts'

export const event_test: AliothEventStack = {
  alioth: 'eventStack',
  data: {
    keyboard: 'ctrl+a',
    name: 'show-material',
    execute() {
      const { zones } = useR(__PHECDA__.view)
      const zone = zones.find(item => item.name === 'Material')
      zone.hidden = !zone.hidden
    },
    pushQueue: false,
  },
}
// export * from 'alioth-preset-elementplus'
