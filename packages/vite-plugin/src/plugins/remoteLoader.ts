import fetch from 'node-fetch'
import { FilterPattern, PluginOption, createFilter } from 'vite'

const urlReg = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
const pathReg = /^(\/|\.{1,2}\/).+$/

// resolve remote file using http(like http://localhost:3000/index.js)
export function RemoteLoader({ include, exclude }: { include?: FilterPattern; exclude?: FilterPattern }): PluginOption {
  const filter = createFilter(include, exclude)
  return {
    name: 'alioth-remote-loader',
    enforce: 'pre',
    resolveId(source, importer) {
      if (urlReg.test(source)) {
        if (filter(source))
          return source

        else
          return { id: source, external: true }
      }

      if (importer && urlReg.test(importer) && pathReg.test(source))
        return new URL(source, importer).href
    },
    async load(id) {
      if (urlReg.test(id)) {
        const ret = await fetch(id)
        return { code: await ret.text() }
      }
    },
  }
}
