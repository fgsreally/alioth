import { createApp } from 'vue'
import { init, interval, setRegister } from 'alioth-lib'
import App from './App.vue'
import { Register } from './engine/register'

init()

setRegister(Register)
window.$alioth_register = interval.setState.bind(interval)

createApp(App).mount('#app')
