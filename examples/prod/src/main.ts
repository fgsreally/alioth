import { createApp } from 'vue'
import { init, setEngine } from 'alioth-lib'
import App from './App.vue'
import { Register } from './engine/register'

init()

setEngine(Register)

createApp(App).mount('#app')
