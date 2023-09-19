import { createApp } from 'vue'
import { createPhecda } from 'phecda-vue'
import { init, setRegister } from 'alioth-vue'
import App from './App.vue'
import { initModel } from './models'
import { initWidget } from './widgets'
import { Register } from '@/engine/register'
import 'uno.css'
const app = createApp(App).use(createPhecda('alioth'))

init()
setRegister(Register)
initModel()
initWidget()

app.mount('#app')
