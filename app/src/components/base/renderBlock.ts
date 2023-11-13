// export const DocRenderBlock = defineComponent({
//   name: 'AliothDocRender',
//   inheritAttrs: true,
//   props: {
//     doc: {
//       required: true,
//       type: Object as PropType<VirtualDocument<NodeAttrs>>,
//     },
//     type: {
//       default: 'edit',
//       type: String,
//     },

//   },
//   setup(props) {
//     return () => {
//       return h('div', {
//         style: 'width:fit-content;height:fit-content;background-color:yellow;position:relative',
//       }, {
//         default: () => props.doc.root.children.map((node, i) => h(RenderBlock, {
//           node,
//           key: i,
//           type: props.type as any,
//           value: getWidget(node.attrs.key),
//         })),
//       })
//     }
//   },
// })
