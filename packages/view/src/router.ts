import { createRouter, createWebHashHistory } from 'vue-router'
import Editor from './views/Editor.vue'

const routes = [
  { path: '/', component: Editor },
  {
    path: '/pure',
    component: () => import('./views/preview/ActiveRender.vue'),
  },
  {
    path: '/pure/:pageRoute',
    component: () => import('./views/preview/pureRender.vue'),
  },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
