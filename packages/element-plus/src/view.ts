import { $H, $R, $V, $Z } from 'alioth-dev/helper'
import { createLayer } from 'phecda-vue'
import Tree from './zones/Tree.vue'
import Container from './modals/Container.vue'
import Select from './widgets/Select.vue'
const useLayer = createLayer(ElDialog, {})
$V('Input', ElInput)
$V('Select', Select)
$V('Tree', Tree)
$H({
  class: 'i-lucide:eye',
  label: '容器配置',
  handler() {
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
