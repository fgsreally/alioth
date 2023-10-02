import component, { addon } from './Select.vue'
export const widget_select = {
  alioth: 'widget',
  data: {
    key: 'el_select',
    category: 'element-plus',
    component,
    meta: addon().info,
  },
}
