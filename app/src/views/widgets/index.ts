import Container from './Container.vue'
import Test from './Test.vue'
export function initWidget() {
  const registerWidget = window.$alioth_widget
  // registerWidget({
  //   category: '',
  //   key: 'root',
  //   component: Container,
  // })
  registerWidget({
    category: 'test',
    key: 'test',
    component: Test,
  })
}
