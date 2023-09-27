import component, { addon } from './DatePicker.vue'
export const widget_time_picker = {
  alioth: 'widget',
  data: {
    key: 'el_time_picker',
    category: 'element-plus',
    component,
    meta: addon().info,
  },
}
