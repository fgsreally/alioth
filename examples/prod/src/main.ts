import { createApp } from 'vue'
import { init } from 'alioth-vue'
import App from './App.vue'

init('runtime')

createApp(App).mount('#app')
