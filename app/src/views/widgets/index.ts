import Container from './Container.vue'
export function initWidget() {
  const registerWidget = window.$alioth_widget
  registerWidget({
    category: '',
    key: 'root',
    component: markRaw(Container),
  })
}
