import type { PluginOption } from 'vite'
export * from './plugins'
export function External(externals: Record<string, string> = {}): PluginOption {
  return {
    name: 'alioth-external',
    enforce: 'pre',
    config(_) {
      externals = Object.assign({
        'vue': 'http://localhost:4010/vue.mjs',
        'phecda-vue': 'http://localhost:4010/phecda-vue.mjs',
      }, externals)
      return {
        resolve: {
          alias: externals,
        },
      }
    },
  }
}
