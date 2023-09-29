import type { Component } from 'vue'
import { reactive } from 'vue'

import type { VirtualNode } from 'alioth-lib'
import type { BaseRenderer } from './renderer'

export type RegisterKey = string | symbol
export interface RegisterType extends BaseEngine<any> {

}

export const allWidgetMap = reactive(new Map()) as Map<RegisterKey, RegisterType>
export const NameSpaceStore = reactive<{ [key: string]: ReturnType<typeof createNameSpace> }>({})

export function getWidget<
  registerWidget extends BaseEngine<any>,
>(key?: string) {
  if (key)
    return allWidgetMap.has(key) ? (allWidgetMap as Map<string, registerWidget>).get(key) : null
}

export function createNameSpace<
  registerWidget extends BaseEngine<any>,
>() {
  // 分区注册
  const widgetMap: Map<RegisterKey, registerWidget> = reactive(new Map())
  return {
    widgetMap,
    cancel: (key: RegisterKey) => {
      const comp = allWidgetMap.get(key)
      if (comp) {
        widgetMap.delete(key)
        allWidgetMap.delete(key)
      }
    },
    getWidget(key: RegisterKey) {
      return widgetMap.get(key)
    },

    register: (module: registerWidget) => {
      widgetMap.set(module.key, module)
      allWidgetMap.set(module.key, module)
    },
  }
}

export function getNamespace<registerWidget extends BaseEngine<any>>(key: string) {
  if (!NameSpaceStore[key])
    NameSpaceStore[key] = createNameSpace()
  return NameSpaceStore[key] as unknown as ReturnType<typeof createNameSpace<registerWidget>>
}

export abstract class BaseEngine<R extends typeof BaseRenderer<VirtualNode<any>>, M = any> {
  abstract Renderer: R
  constructor(
    public category: string,
    public key: RegisterKey,
    public comp: Component,
    public meta: M = {} as any,
  ) {
  }

  createRenderer(node?: VirtualNode<any>) {
    return new this.Renderer(node!, this.comp) as InstanceType<R>
  }
}
