import { createApp } from 'vue'
import { createPhecda } from 'phecda-vue'
import Terminal from '@fgsreally/vue-web-terminal'
import '@fgsreally/vue-web-terminal/style.css'
import { basicSetup } from 'codemirror'
import { javascript } from '@codemirror/lang-javascript'
import VueCodemirror from 'vue-codemirror'
import { init } from 'alioth-vue'
import VueTippy, { roundArrow, setDefaultProps } from 'vue-tippy'
import App from './App.vue'
import router from './router'
import '@/style/common.scss'
import { initModel } from './models'
import { initWidget } from '@/views/widgets'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale-subtle.css'
import 'tippy.js/dist/border.css'
import 'tippy.js/dist/svg-arrow.css'

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
app.config.warnHandler = () => null
app.use(VueTippy)

setDefaultProps({
  animation: 'scale-subtle',
  appendTo: document.body,
  allowHTML: false,
  animateFill: false,
  arrow: roundArrow + roundArrow,
  popperOptions: {
    // https://popper.js.org/docs/v2/utils/detect-overflow/
    modifiers: [
      {
        name: 'preventOverflow',
        options: {
          rootBoundary: 'document',
        },
      },
    ],
  },
})
init()
initModel()
initWidget()
app.mount('#al-root')
