import { PluginOption } from 'vite'

/**
 * create importmap from hash
 */
export function Importmap(opts: {
  imports?: Record<string, string>
  scopes?: Record<string, Record<string, string>>
} = {}): PluginOption {
  return {
    name: 'alioth-dynamic-importmap',
    enforce: 'post',
    // apply: 'build',
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: 'script',
            attrs: {
              type: 'importmap',
            },
            injectTo: 'head-prepend',
            children: JSON.stringify(opts),
          },
        ],
      }
    },
  }
}
