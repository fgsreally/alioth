/* eslint-disable no-new-func */
import { cloneDeep } from 'lodash-es'
import { nanoid } from 'nanoid'
import { createDeepProxy } from '../utils'
import { STATE_REGEX } from '../common'
import { VirtualDocument } from './document'
import { Scope } from './scope'

export class VirtualNode<A extends Record<string, any> = any> {
  parent: string
  index: number
  scope = new Scope()

  doc: VirtualDocument<A>
  readonly oldAttrs: A

  constructor(public attrs: A = {} as any, public id = nanoid(),
  ) {
    this.oldAttrs = cloneDeep(attrs)
  }

  proxy() {
    return createDeepProxy(this.attrs, {

      get: (target, prop, receiver) => {
        if (typeof target[prop] === 'string' && STATE_REGEX.test(target[prop])) {
          const [match] = target[prop].match(STATE_REGEX)!
          if (match === target[prop]) {
            return new Function(...this.scope.keys, `return ${match.slice(2, -2)}`)(
              ...this.scope.values,
            )
          }
          else {
            return target[prop].replace(STATE_REGEX, (_: string, s: string) => {
              return new Function(...this.scope.keys, `return ${s}`)(
                ...this.scope.values,
              )
            })
          }
        }

        return Reflect.get(target, prop, receiver)
      },
    })
  }

  toJSON() {
    return {
      id: this.id,
      attrs: this.attrs,
      index: this.index,
      parent: this.parent,
    }
  }
}
