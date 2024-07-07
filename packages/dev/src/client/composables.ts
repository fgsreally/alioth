import { inject, provide } from 'vue'

const aliothSymbol = Symbol('alioth')

export interface AliothInject {
  [key: string]: any
}

export function useProvide<Key extends keyof AliothInject>(key: Key, value: AliothInject[Key]) {
  let state = inject(aliothSymbol) as any
  if (!state) {
    state = {}
    provide(aliothSymbol, state)
  }
  state[key] = value
}

export function useInject(): Partial<AliothInject> {
  return inject(aliothSymbol) as any
}
