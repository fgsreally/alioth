import { createGenerator } from '@unocss/core'
import { createAutocomplete } from '@unocss/autocomplete'
import presetUno from '@unocss/preset-uno'
import { YUHENG_CONFIG } from '../config'
export function createSearch() {
  const uno = createGenerator({ presets: [presetUno(), ...YUHENG_CONFIG.Presets] })

  const ac = createAutocomplete(uno)

  return async (str: string) => await ac.suggest(str)
}
