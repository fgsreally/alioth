import { createApp } from 'vue'
import { createPhecda, useO } from 'phecda-vue'
import App from './App.vue'
import router from './router'
import '@/style/common.scss'
import { ConfigState } from './models/config'
import { init } from './views/widgets'
import 'uno.css'
useO(ConfigState)
init()
const app = createApp(App).use(createPhecda('test') as any)
app.use(router)

app.mount('#al-root')
