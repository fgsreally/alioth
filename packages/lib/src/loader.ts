import { setState } from './interval'

export function createLoader() {
  const set = new Set<string>()
  const docs = new Map<string, any>()
  async function loadMod(url: string) {
    if (set.has(url))
      return
    set.add(url)
    const module = await import(url)
    for (const i in module)
      setState(i, module[i])
  }

  async function loadDoc(key: string, url: string) {
    if (set.has(url))
      return
    set.add(url)
    docs.set(key, await (await fetch(url)).json())
  }
  return { loadMod, loadDoc }
}
