import fs from 'fs'
import { relative } from 'path'
import type { FilterPattern, PluginOption } from 'vite'
import { createFilter, normalizePath } from 'vite'
import type { ProjectReflection } from 'typedoc'
import { Application, TSConfigReader } from 'typedoc'

function generateJson(this: any, project: ProjectReflection,
) {
  return this.serializer.projectToObject(project, {
    begin: {},
    end: {},
  })
}

type Parser = Record<string, Function>

const c = {
  text(str: string) {
    return `${str}\n`
  },
}

const tag = {
  '@return': function () {
    return 'return'
  },
}

const type = {
  number() {
    return 'number\n'
  },
}

export function typedocMD(options: { includes?: FilterPattern; excludes?: FilterPattern } = {}): PluginOption {
  const filter = createFilter(options?.includes || /\.ts/, options?.excludes)

  return {
    name: 'typedoc2md',
    enforce: 'pre',
    apply: 'serve',
    async transform(code, id) {
      if (!id.includes('node_modules') && id.endsWith('.ts') && fs.existsSync(id)) {
        const app = new Application()

        app.options.addReader(new TSConfigReader())

        app.bootstrap({ entryPoints: [id] })
        const project = app.convert()

        if (project) {
          // app.validate(project)
          const docObject = generateJson.call(app, project)
          return `${code}\n export const _md=${JSON.stringify(docObject)}`
        }
      }
    },
  }
}
