import { $V, $Z } from 'alioth-dev/helper'
import Property from './components/Property.vue'
import Tree from './components/Tree.vue'

$V('Property', Property)
$V('Tree', Tree)

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
