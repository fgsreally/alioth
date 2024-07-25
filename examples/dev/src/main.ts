import { createApp } from 'vue'

import { createPhecda } from 'phecda-vue'
import App from './App.vue'
import 'alioth-vue'
createApp(App).use(createPhecda()).mount('#app')
