/* eslint-disable no-async-promise-executor */

export async function loadJSON(url: string) {
  const ret = await fetch(url)
  return ret.json()
}

export function loadPresets(presets: string[]) {
  return Promise.all(presets.map((url) => {
    if (url.endsWith('.css')) {
      const css = document.createElement('link')
      css.href = url
      css.rel = 'stylesheet'
      css.type = 'text/css'
      document.head.appendChild(css)
      return new Promise((resolve, reject) => {
        css.onload = resolve
        css.onerror = reject
      })
    }
    else {
      return new Promise(async (resolve, reject) => {
        try {
          const module = await import(/** @vite-ignore */url)
          for (const key in module) {
            const exports = module[key]
            if (typeof exports === 'object' && exports.alioth)
            // @ts-expect-error trigger window property/event
              window[`$alioth_${exports.alioth}`]?.(exports.data)
          }
          resolve(module)
        }
        catch (e) {
          reject(e)
        }
      })
    }
  }))
}
export function loadStyleOrScript(url: string) {
  if (url.endsWith('.css')) {
    const css = document.createElement('link')
    css.href = url
    css.rel = 'stylesheet'
    css.type = 'text/css'
    document.head.appendChild(css)
    return new Promise((resolve, reject) => {
      css.onload = resolve
      css.onerror = reject
    })
  }
  else {
    return import(/** @vite-ignore */url)
  }
}
