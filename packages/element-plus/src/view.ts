import { $H, $R, $V, $Z } from 'alioth-dev/helper'
import Property from './zones/Property.vue'
import Tree from './zones/Tree.vue'
import Container from './modals/Container.vue'
$V('Input', ElInput)
$V('Property', Property)
$V('Tree', Tree)
$H({
  class: 'i-lucide:eye',
  label: '容器配置',
  handler({ useLayer }) {
    useLayer(Container, {}, { title: '容器配置' })
  },
})
$Z({
  component: 'Tree',
  label: 'model tree',
  name: 'tree',
  fix: true,
  isActive: () => true,
  x: 1100,
  y: 50,
  transition: 'right',
  props: {},
})

$Z({
  component: 'Property',
  label: '组件property',
  name: 'Property',
  isActive: ({ instance }) => {
    return !!instance?.activeNode
  },
  x: 600,
  y: 600,
  transition: 'left',
  props: {},
})
