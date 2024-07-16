import { createApp } from 'vue'

import { createPhecda } from 'phecda-vue'
import App from './App.vue'

createApp(App).use(createPhecda()).mount('#app')
