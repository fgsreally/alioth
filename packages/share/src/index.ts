import type { Plugin } from 'vite'
export default function (): Plugin {
  return {
    name: 'alioth-external',
    enforce: 'pre',
    config() {
      return {
        resolve: {
          alias: {
            'vue': '',
            'phecda-vue': '',
          },
        },
      }
    },
  }
}
