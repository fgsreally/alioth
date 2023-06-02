import { join } from 'path'
import fs from 'fs'
import type { PluginOption } from 'vite'
import type { MetaCheckerOptions } from 'vue-component-meta'
import { createComponentMetaChecker } from 'vue-component-meta'
export default function (): PluginOption {
  const checkerOptions: MetaCheckerOptions = {
    forceUseTs: true,
    schema: { ignore: ['MyIgnoredNestedProps'] },
    printer: { newLine: 1 },
  }

  const tsconfigChecker = createComponentMetaChecker(
    // Write your tsconfig path
    join(process.cwd(), 'tsconfig.json'),
    checkerOptions,
  )

  return {
    name: 'vue-meta',
    transform(code, id) {
      if (id.endsWith('.vue') && fs.existsSync(id)) {
        const meta = tsconfigChecker.getComponentMeta(id)

        return `${code}\nexport const _meta=${JSON.stringify(meta)}`
      }
    },
  }
}
