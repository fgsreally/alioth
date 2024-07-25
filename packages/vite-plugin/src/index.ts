import { PluginOption } from 'vite'
import { External, type ExternalOpts } from './plugins/external'
import { Connector, type ConnectorOpts } from './plugins/connector'
import { log } from './utils'
import { Importmap, ImportmapOpts } from './plugins/importmap'
export * from './plugins/connector'
export * from './plugins/importmap'
export * from './plugins/remoteLoader'
export * from './plugins/external'

export default function Alioth(options: ConnectorOpts & ExternalOpts & ImportmapOpts): PluginOption {
  options.externals = Object.assign({
    'phecda-vue': null,
    'vue': null,
    'alioth-vue': null,
  }, options.externals || {})

  options.imports = Object.assign({
    'vue': '/node_modules/.vite/deps/vue.js',
    'phecda-vue': '/node_modules/.vite/deps/phecda-vue.js',
    'alioth-vue': '/node_modules/.vite/deps/alioth-vue.js',
  }, options.imports || {})

  for (const key in options.imports) {
    if (!options.imports[key])
      delete options.imports[key]
  }

  for (const key in options.externals) {
    if (!options.externals[key])
      continue
    try {
      options.externals[key] = new URL(options.externals[key]).href
    }
    catch (e) {
      delete options.externals[key]
      log(`"${options.externals[key]}" for "${key}" is not a valid url`, 'red')
    }
  }
  options.optimize = true
  return [
    Connector(options),
    External(options),
    Importmap(options),
  ]
}
