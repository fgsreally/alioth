import type { PluginOption } from 'vite'
export default function (): PluginOption {
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
