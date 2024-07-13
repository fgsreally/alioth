/* eslint-disable no-new-func */
import { STATE_REGEX } from '../common'
import { createDeepProxy } from '../utils'

export class Scope {
  constructor(public data: Record<string, any> = {}) {

  }

  parse(attrs: any) {
    return createDeepProxy(attrs, {

      get: (target, prop, receiver) => {
        if (typeof target[prop] === 'string' && STATE_REGEX.test(target[prop])) {
          const [match] = target[prop].match(STATE_REGEX)!
          if (match === target[prop]) {
            return new Function(...this.keys, `return ${match.slice(2, -2)}`)(
              ...this.values,
            )
          }
          else {
            return target[prop].replace(STATE_REGEX, (_: string, s: string) => {
              return new Function(...this.keys, `return ${s}`)(
                ...this.values,
              )
            })
          }
        }

        return Reflect.get(target, prop, receiver)
      },
    })
  }

  add(key: string, value: any) {
    this.data[key] = value
  }

  get keys() {
    return Object.keys(this.data)
  }

  get values() {
    return Object.values(this.data)
  }

  extend(data: Record<string, any> = {}) {
    return new Scope({ ...this.data, ...data })
  }
}
