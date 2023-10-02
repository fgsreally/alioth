import component, { addon } from './Input.vue'
export const widget_input = {
  alioth: 'widget',
  data: {
    key: 'el_input',
    category: 'element-plus',
    component,
    meta: addon().info,
  },
}

export const view_input = {
  alioth: 'view',
  data: {
    key: 'Input',
    component,
  },
}
