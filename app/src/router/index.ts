import { createRouter, createWebHistory } from 'vue-router'
import Editor from '../views/Editor.vue'
import Preview from '@/views/Preview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/editor',
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor,
    }, {
      path: '/preview',
      name: 'preview',
      component: Preview,
    },
  ],
})

export default router
