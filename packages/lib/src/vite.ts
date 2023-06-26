import type { PluginOption } from 'vite'
export function External(): PluginOption {
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
