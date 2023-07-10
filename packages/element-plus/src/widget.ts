import { $R, $RW, $V } from 'alioth-dev/helper'

const modules = import.meta.glob('./widgets/*.vue', {
  eager: true,
})

Object.entries(modules).forEach(([key, module]) => {
  if (!(module as any).addon)
    return
  const { info, props } = (module as any).addon()
  const ret = /\/([^/]+)\.vue$/.exec(key)!
  $RW('element-plus', ret[1], (module as any).default, props || info)
})

// $RW('element-plus', 'Input', Input, {
//   init: {
//     propsData: {
//       modelValue: '',
//     },
//   },
//   props: {
//     modelValue: {
//       _component: 'Input',
//     },
//   },
// })
// $RW('element-plus', 'Checkbox', Checkbox, {
//   init: {
//     propsData: {
//       modelValue: false,
//     },
//   },
//   props: {

//   },
// })
// $RW('element-plus', 'CheckboxGroup', CheckboxGroup, {
//   init: {
//     propsData: {
//       options: [],
//       modelValue: '',
//     },
//   },
//   props: {
//     options: {
//       _component: 'List',
//     },
//     isButton: {
//       _component: 'Checkbox',
//       label: '按钮样式',
//     },
//   },
// })

// $RW('lib', 'Button', Button, addon().info)

const a = ref(0)
$R('a', a, { description: 'hahah' })
$R('change', () => {
  a.value = 10
  console.log('change')
}, { description: 'hahah' })

$R('list', reactive([]), {})
