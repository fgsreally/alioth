// import { $RH, $V, $Z } from 'alioth-dev/helper'

import './style.scss'

export const view_input = {
  alioth: 'view',
  data: {
    key: 'Input',
    component: ElInput,
  },
}
// $V('Checkbox', Checkbox)

// const useLayer = createLayer(ElDialog, {})
// $V('Input', ElInput)
// $V('Select', Select)
// $V('Tree', Tree)
// $V('List', List)
// $RH({
//   component: IconContainer,
//   label: '容器配置',
//   handler() {
//     useLayer(Container, {}, { title: '容器配置' })
//   },
// })
// $Z({
//   component: 'Tree',
//   label: 'model tree',
//   name: 'tree',
//   fix: true,
//   isActive: ({ instance }) => !!instance,
//   x: 1100,
//   y: 50,
//   transition: 'right',
//   props: {},
// })
