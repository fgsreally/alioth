import { createApp } from 'vue'
import { init, setRegister } from 'alioth-lib'
import App from './App.vue'
import { Register } from './engine/register'

init()

setRegister(Register)

createApp(App).mount('#app')
