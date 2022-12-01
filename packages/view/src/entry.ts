import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style/common.scss'
import { router } from './router'
import { YUHENG_CONFIG } from './config'
const store = createPinia()

export default function yuheng() {
  // init && init({ registerComponent, registerModule });
  createApp(App).use(store).use(router).mount('#app')
}

export {
  registerModule,
  registerComponent,
  delComponent,
  delModule,
} from '@/engine/register'

export * from '@/engine'
export { addContext } from '@/engine/service'

type AliothConfig = typeof YUHENG_CONFIG
export function setConfig<CONFIG_KEY extends keyof AliothConfig>(key: CONFIG_KEY, value: AliothConfig[CONFIG_KEY]) {
  YUHENG_CONFIG[key] = value
}
