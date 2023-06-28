import type { PluginOption } from 'vite'
export function External(externals: Record<string, string> = {}): PluginOption {
  return {
    name: 'alioth-external',
    enforce: 'pre',
    config() {
      return {
        resolve: {
          alias: Object.assign({
            vue: '',
            // 'phecda-vue': '',
          }, externals),
        },
      }
    },
  }
}
