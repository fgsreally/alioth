import { PluginOption } from 'vite'

/**
 * create importmap from hash
 */

export interface ImportmapOpts {
  imports?: Record<string, string>
  scopes?: Record<string, Record<string, string>>
}
export function Importmap(opts: ImportmapOpts = {}): PluginOption {
  const { imports, scopes } = opts
  return {
    name: 'alioth-importmap',
    enforce: 'post',
    // apply: 'build',
    transformIndexHtml(html) {
      if (imports || scopes) {
        return {
          html,
          tags: [
            {
              tag: 'script',
              attrs: {
                type: 'importmap',
              },
              injectTo: 'head-prepend',
              children: JSON.stringify({
                imports, scopes,
              }),
            },
          ],
        }
      }
    },
  }
}
