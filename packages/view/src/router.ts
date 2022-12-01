import { createRouter, createWebHashHistory } from 'vue-router'
import Editor from './view/Editor.vue'

const routes = [
  { path: '/', component: Editor },
  {
    path: '/pure',
    component: () => import('./view/preview/ActiveRender.vue'),
  },
  {
    path: '/pure/:pageRoute',
    component: () => import('./view/preview/pureRender.vue'),
  },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
