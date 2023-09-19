import { createApp } from 'vue'
import { createPhecda } from 'phecda-vue'
import Terminal from '@fgsreally/vue-web-terminal'
import '@fgsreally/vue-web-terminal/style.css'
import { basicSetup } from 'codemirror'
import { javascript } from '@codemirror/lang-javascript'
import VueCodemirror from 'vue-codemirror'
import { init, setRegister } from 'alioth-vue'
import App from './App.vue'
import router from './router'
import '@/style/common.scss'
import { initModel } from './models'
import { Register } from '@/engine/register'
import { initWidget } from '@/sandbox/src/widgets'
import 'uno.css'
const app = createApp(App).use(createPhecda('alioth')).use(router).use(VueCodemirror, {
  // optional default global options
  autofocus: true,
  disabled: false,
  indentWithTab: true,
  tabSize: 2,
  placeholder: 'Code goes here...',
  extensions: [basicSetup, javascript()],
  // ...
}).use(Terminal)
// {
//   codemirror: {
//     tabSize: 4,
//     mode: 'javascript',
//     theme: 'darcula',
//     lineNumbers: true,
//     line: true,
//     smartIndent: true,
//   },
// }
init()
setRegister(Register)
initModel()
initWidget()

app.mount('#al-root')
