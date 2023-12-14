// import { useR } from 'phecda-vue'
// import type { AliothEvent, AliothNodeEvent } from 'alioth-vue'
import 'alioth-preset-elementplus/dist/style.css'

// import 'alioth-preset-elementplus/dist/style.css'

// engine should be exported before all widgets,so it starts with '_'
// export * from 'alioth-preset-layout/draggable/index.ts'
// export const event_test: AliothEvent = {
//   alioth: 'event',
//   data: {
//     keyboard: 'ctrl+a',
//     name: 'show-material',
//     execute() {
//       const { zones } = useR(__PHECDA__.view)
//       const zone = zones.find(item => item.name === 'Material')!;
//       (zone.props as any).hidden = !(zone.props as any).hidden
//     },
//     pushQueue: false,
//   },
// }
// export * from 'alioth-preset-elementplus'

// export const page_event: AliothNodeEvent = {
//   alioth: 'node_event',
//   data: {
//     event: 'create',
//     cb({ node }) {
//       if (node.attrs.key === 'page') {
//         node.attrs = {
//           title: '11',
//           key: 'page',
//           page: true,
//           width: 480,
//           height: 400,
//           fontSize: 16,
//           backgroundColor: 'rgb(102, 107, 226)',
//           gridColor: '#ff00006b',
//           gridNum: 10,
//           gridGap: 20,
//           margin: 0,
//           radius: 0,
//           isContainer: true,
//           isFull: false,
//           isGrid: true,
//           mode: 'normal',
//           wLimit: [375, 2000],
//           hLimit: [600, 4000],
//         }
//       }
//     },
//   },
// }

export { widget_btn, widget_input, widget_time_picker } from 'alioth-preset-elementplus'
export { container, engine } from 'alioth-preset-layout/draggable/index.ts'
