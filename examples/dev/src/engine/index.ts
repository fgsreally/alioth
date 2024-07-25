import { ComponentRenderer } from 'alioth-vue'
import { Mixin } from 'phecda-vue'
import { Container, Item } from 'alioth-vue-presets/gridstack'
import { Renderer } from './renderer'
export const container = {
  alioth: 'widget',
  key: 'page',
  data: Container,
}

class R extends Mixin(Renderer, ComponentRenderer) {
  exec() {
    this.slot(['default']).main().wrap(Item, {}).editAction().gridstack()
  }
}

export const engine = {
  alioth: 'renderer',
  key: 'development',
  data: R,
  meta: {
    environment: 'editor',
  },
}
