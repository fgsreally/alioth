/**
 *  fork from https://github.com/MilanKovacic/vite-plugin-externalize-dependencies
 */
import { PluginOption, UserConfig } from 'vite'
import type { Plugin } from 'esbuild'

type ExternalCriteria = string | RegExp | ((id: string) => boolean)

const isExternal = (id: string, externals: ExternalCriteria[]): boolean =>
  externals.some((external) => {
    if (typeof external === 'string')
      return id === external || id.startsWith(`${external}/`)

    if (external instanceof RegExp)
      return external.test(id)

    if (typeof external === 'function')
      return external(id)

    return false
  })

export interface ExternalOpts {
  externals?: Record<string, string | null>
  optimize?: boolean
}

export function External(options: ExternalOpts = {}) {
  const resolvedExternals = new Set<string>()

  const {
    externals = {},
    optimize = true,
  } = options

  const importmapSet = new Set<string>()
  const cdnMap: Record<string, string> = {}
  for (const key in externals) {
    if (externals[key] === null) {
      importmapSet.add(key)
    }

    else {
      const url = new URL(externals[key])
      cdnMap[key] = url.href
    }
  }
  const importmap = [...importmapSet]

  const esbuildPlugin: Plugin = {
    name: 'External',
    setup(build) {
      build.onResolve({ filter: /.*/ }, (args) => {
        if (args.importer && isExternal(args.path, importmap)) {
          resolvedExternals.add(args.path)

          return { path: args.path, external: true }
        }
        if (args.importer && (args.path in cdnMap))

          return { path: cdnMap[args.path], external: true }

        return null
      })
      build.onLoad({ filter: /.*/ }, (args) => {
        if (isExternal(args.path, importmap) || (args.path in cdnMap))
          return { contents: '' }

        return null
      })
    },
  }

  return <PluginOption>{
    name: 'vite-plugin-externalize',
    enforce: 'pre',
    config: (): UserConfig | undefined => {
      return {
        optimizeDeps: {
          include: optimize ? importmap : undefined,
          esbuildOptions: {
            // @ts-expect-error esbuild version
            plugins: [esbuildPlugin],
          },
        },
      }
    },

    resolveId: (id) => {
      if (resolvedExternals.has(id))
        return { id, external: true }

      if (isExternal(id, importmap)) {
        resolvedExternals.add(id)
        return { id, external: true }
      }

      if (id in cdnMap)
        return { id: cdnMap[id]!, external: true }

      return null
    },

    load: (id) => {
      if (resolvedExternals.has(id))
        return { code: 'export default {};' }

      return null
    },
    transform: {
      order: 'post',
      handler: (code: string) => {
        if (resolvedExternals.size === 0)
          return code

        const viteImportAnalysisModulePrefix = '/@id/'
        const prefixedImportRegex = new RegExp(
          `${viteImportAnalysisModulePrefix}(${[...resolvedExternals].join('|')})`,
          'g',
        )

        if (prefixedImportRegex.test(code)) {
          return code.replace(
            prefixedImportRegex,
            (_: string, externalName: string) => externalName,
          )
        }
        return code
      },
    },
  }
}
