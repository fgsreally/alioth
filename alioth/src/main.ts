import { createApp } from 'vue'
import { createPhecda } from 'phecda-vue'
import App from './App.vue'
import router from './router'
import '@/style/common.scss'
import { addWiget } from './views/widgets'
import { initState } from './models'
import 'uno.css'
const app = createApp(App).use(createPhecda('alioth') ).use(router)
initState()
if(import.meta.env.DEV)
addWiget()

app.mount('#al-root')
