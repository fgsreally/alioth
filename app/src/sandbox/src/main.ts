import { createApp } from 'vue'
import { createPhecda } from 'phecda-vue'
import { init, setRegister } from 'alioth-vue'
import { initWidget } from '../../views/widgets'
import App from './App.vue'
import { initModel } from './models'
import { Register } from '@/engine/register'
import 'uno.css'
const app = createApp(App).use(createPhecda('alioth'))

init()
setRegister(Register)
initModel()
initWidget()

app.mount('#app')
