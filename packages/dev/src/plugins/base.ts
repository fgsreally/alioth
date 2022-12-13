/* eslint-disable no-console */
import { relative, resolve } from 'path'
import sirv from 'sirv'
import type { FilterPattern, PluginOption, ViteDevServer } from 'vite'
import { createFilter, normalizePath } from 'vite'
import colors from 'colors'
import { colorUrl, sideEffectImport } from '../utils'
export function Base(sideEffects: string[] = [], fileExp: FilterPattern = /\.vue$/): PluginOption {
  const filter = createFilter(fileExp)

  let host: string
  return {
    name: 'vite-plugin-alioth:base',
    apply: 'serve',
    configureServer(server: ViteDevServer) {
      const {
        config: {
          server: { https, port },
        },
      } = server
      host = server.resolvedUrls?.local[0].replace(/\/$/, '')
        || `${https ? 'https' : 'http'}://localhost:${port || '5173'}`

      server.middlewares.use(
        '/__alioth_base',
        sirv(resolve(__dirname, '../assets/base'), {
          single: true,
          dev: true,
        }),
      )
    },
    resolveId(id: string) {
      if (id === '/virtual:alioth-base')
        return '\0' + 'virtual:alioth-base'
    },
    load(id) {
      if (id === '\0' + 'virtual:alioth-base') {
        return `
      import {baseRenderer} from '@alioth/renderer'
      ${sideEffectImport(sideEffects)}
      baseRenderer()
       `
      }
    },
    handleHotUpdate(ctx) {
      if (filter(ctx.file)) {
        console.log(
          `  ${colors.green('➜')}  ${colors.bold('Alioth-Base')}: ${colorUrl(
            `${host}/__alioth_base/#/${normalizePath(relative(process.cwd(), ctx.file))}`,
          )}`,
        )
      }
    },
  }
}

