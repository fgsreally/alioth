import { $H, $V, $Z } from 'alioth-dev/helper'
import { createLayer } from 'phecda-vue'
import Tree from './zones/Tree.vue'
import Container from './modals/Container.vue'
import Select from './widgets/Select.vue'
import List from './components/List.vue'
import Checkbox from './widgets/Checkbox.vue'
import IconContainer from '~icons/lucide/box'
import './style.scss'

$V('Checkbox', Checkbox)

const useLayer = createLayer(ElDialog, {})
$V('Input', ElInput)
$V('Select', Select)
$V('Tree', Tree)
$V('List', List)
$H({
  component: IconContainer,
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
