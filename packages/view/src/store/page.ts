import { defineStore } from 'pinia'
import type { viewServices } from '@/types'

interface pageData {
  name: string
  instance: any
  state: any

  services: viewServices
}
export const usePageState = defineStore('config', {
  state: () => ({
    pages: [] as pageData[],
    ctx: null as any,
    curPage: '' as string,
  }),
  actions: {
    addPage(newPage: {
      name: string
      instance: any
      state: any
      services: viewServices
    }) {
      if (!newPage.name) {
        ElMessage.error('必须要有名称')
        return
      }
      if (this.pages.some(item => item.name === newPage.name)) {
        ElMessage.error('已存在同名组件')
        return
      }
      this.pages.push(newPage)
    },

    delPage(name: string) {
      this.pages = this.pages.filter(item => item.name !== name)
    },

    storage() {
      localStorage.setItem(
        'view-engine-playground:pages',
        JSON.stringify(this.pages),
      )
    },
    find(name: string) {
      return this.pages.find(page => page.name === name)
    },

  },
})
