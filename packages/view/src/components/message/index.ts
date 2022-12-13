import type { Component, VNode } from 'vue'
import { createVNode, render } from 'vue'
import Code from './Code.vue'
import Container from './Container.vue'
import Service from './Service.vue'
const vm: { [key: string]: VNode } = {}

function createModelVnode(key: string, comp: Component) {
  if (!vm[key]) {
    const el = document.createElement('div')
    vm[key] = createVNode(comp) // 将组件渲染成虚拟节点
    // 这里需要将el 渲染到我们的页面中
    document.body.appendChild((render(vm[key], el), el)) // 渲染成真实节点扔到页面中
  }
  return vm[key]
}

export function $Code(content: string) {
  // 手动挂载组件   new SubComponent.$mount()
  const vm = createModelVnode('code', Code)
  const { dialog } = (vm as any).component.exposed
  dialog(content)
}

export function $Container() {
  const vm = createModelVnode('container', Container)
  const { dialog } = (vm as any).component.exposed
  dialog()
}

export function $Service(serviceName: string) {
  const vm = createModelVnode('service', Service)
  const { dialog } = (vm as any).component.exposed
  dialog(serviceName)
}
