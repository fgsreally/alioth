import { createApp } from 'vue'
import { init, setEngine } from 'alioth-vue'
import App from './App.vue'

init()

createApp(App).mount('#app')
