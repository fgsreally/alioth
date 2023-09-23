import Tree from './Tree.vue'
export const view_tree = {
  alioth: 'view',
  data: {
    component: Tree,
    key: 'Tree',

  },
}
export const zone_tree = {
  alioth: 'zone',
  data: {
    component: 'Tree',
    label: '树图',
    name: 'tree',
    isActive: ({ activePage }) => !!activePage,
    props: {
    },
    x: 400,
    y: 300,
    transition: 'right',
    hidden: false,
  },
}
