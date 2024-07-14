import { createApp } from 'vue'
import { createPhecda } from 'phecda-vue'
import Terminal from '@fgsreally/vue-web-terminal'
import '@fgsreally/vue-web-terminal/style.css'
// import VueTippy, { roundArrow, setDefaultProps } from 'vue-tippy'
import { routes } from 'vue-router/auto-routes'
import { createRouter, createWebHistory } from 'vue-router'

import Vue3Toasity from 'vue3-toastify'
import { AliothRenderer } from 'alioth-vue'
import App from './App.vue'
import '@/style/common.scss'
import 'vue3-toastify/dist/index.css'
import 'uno.css'

async function start() {
  const app = createApp(App).use(Vue3Toasity, {
    autoClose: 3000,
  }).use(Terminal as any).use(createRouter({
    history: createWebHistory(),
    routes,
  }))

  // getR(internal.registerImporter('plugin', ({ data, meta }) => {
  //   app.use(data, meta)
  // })
  app.component('AliothRenderer', AliothRenderer)
  app.use(await createPhecda([EventModel, ImportModel, ZoneModel, DragModel, DocModel, FeedbackModel, SelectionModel, CmdModel]))
  app.config.warnHandler = () => null

  app.mount('#al-root')
}

start()
