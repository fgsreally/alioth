import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './style/common.scss'
import { router } from './router'
import { init } from '@/views/test-comp'

const store = createPinia()

createApp(App).use(store).use(router).mount('#app')
init()
