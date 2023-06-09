import { $V, $Z } from 'alioth-dev/helper'
import ImportList from './components/ImportList.vue'
import Property from './components/Property.vue'
import Page from './components/Page.vue'
import Route from './components/Route.vue'
import Tree from './components/Tree.vue'

$V('ImportList', ImportList)
$V('Property', Property)
$V('Page', Page)
$V('Route', Route)
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
