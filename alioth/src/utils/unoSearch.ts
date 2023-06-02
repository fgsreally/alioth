import { createGenerator } from '@unocss/core'
import { createAutocomplete } from '@unocss/autocomplete'
import presetUno from '@unocss/preset-uno'
export function createSearch() {
  const uno = createGenerator({ presets: [presetUno()] })

  const ac = createAutocomplete(uno)

  return async (str: string) => await ac.suggest(str)
}

export const searcher = createSearch()
