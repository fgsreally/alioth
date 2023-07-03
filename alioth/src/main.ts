import { createApp } from 'vue'
import { createPhecda } from 'phecda-vue'
import App from './App.vue'
import router from './router'
import '@/style/common.scss'
import { init } from './views/widgets'
import { initState } from './models'
import 'uno.css'
initState()

init()
const app = createApp(App).use(createPhecda('alioth') as any)
app.use(router)

app.mount('#al-root')
