import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style/common.scss'
import { router } from './router'
import { YUHENG_CONFIG } from './config'
import { instance } from '@/engine/init'
const store = createPinia()

export default function yuheng() {
  const app = createApp(App)
  app.config.globalProperties.$instance = instance
  app.config.globalProperties.$alioth = YUHENG_CONFIG

  app.use(store).use(router).mount('#app')
}

export {
  registerModule,
  registerComponent,
  delComponent,
  delModule,
} from '@/engine/register'

export * from '@/engine'
export { addContext } from '@/engine/service'

export * from './config'
