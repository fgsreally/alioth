import { useR } from 'phecda-vue'
import type { AliothEvent } from 'alioth-vue'
import 'alioth-preset-elementplus/dist/style.css'

// import 'alioth-preset-elementplus/dist/style.css'

// engine should be exported before all widgets,so it starts with '_'
export { engine as _engine, container } from 'alioth-preset-layout/grid/editor/index.ts'
export const event_test: AliothEvent = {
  alioth: 'event',
  data: {
    keyboard: 'ctrl+a',
    name: 'show-material',
    execute() {
      const { zones } = useR(__PHECDA__.view)
      const zone = zones.find(item => item.name === 'Material')!;
      (zone.props as any).hidden = !(zone.props as any).hidden
    },
    pushQueue: false,
  },
}
export * from 'alioth-preset-elementplus'
