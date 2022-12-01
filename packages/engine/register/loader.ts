import type { Component } from 'vue'

export const allLoadPkgs: { [key in string]: any } = {}
export const allLoadRecord: { [key in string]: LoadPkg | any } = {}
export async function load(pkg: LoadPkg) {
  if (pkg.key in allLoadPkgs) {
    console.warn(`it has loaded ${pkg.key}`)
    return
  }
  if ((pkg as LocalPkg).data) {
    const { data, key, label, type } = pkg as any
    allLoadPkgs[pkg.key] = data
    allLoadRecord[pkg.key] = { key, label, type }
  }
  else {
    const ret: any = await import((pkg as RemotePkg).url)
    if ((pkg as RemotePkg).cssUrl) {
      const css = document.createElement('link')
      css.href = (pkg as RemotePkg).cssUrl as string
      css.rel = 'stylesheet'
      css.type = 'text/css'
      document.head.appendChild(css)
    }
    allLoadPkgs[pkg.key]
      = ret[(pkg as RemotePkg).isDefault ? 'default' : (pkg as RemotePkg).import]
    allLoadRecord[pkg.key] = pkg
  }
}

export function getAllUsedPkgs(includes: Set<string>) {
  const ret: LoadPkg[] = []
  for (const i of includes)
    ret.push(allLoadRecord[i])

  return ret
}

interface RemotePkg {
  url: string
  isDefault: boolean
  import: string
  cssUrl?: string
}
interface LocalPkg {
  data: Component
}

type LoadPkg = (RemotePkg | LocalPkg) & {
  type: 'module' | 'component'
  key: string
  label: string
}
