<script setup lang="ts">
import { emitter, useV } from 'phecda-vue'
import { GridLayout } from 'grid-layout-plus'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{ mode: string }>()

let index = 0
const { doc, activePage } = useV(__PHECDA__.doc)
function update() {
  activePage.value.children.forEach((node) => {
    node.set('layout.x', node.attrs.layout.x)
    node.set('layout.y', node.attrs.layout.y)
  })
}
const layout = computed(() => {
  return activePage.value.children.map(item => item.attrs.layout)
})
const dom = ref<HTMLElement>(null as any)

function addBlock(module: any, e: MouseEvent) {
  const { clientX } = e
  const { width, left } = dom.value.getBoundingClientRect()
  const { key, label, meta } = module
  const { hoverNode, root } = doc.value
  // const index = createIndex(key)
  const parent = hoverNode || activePage.value
  const info = {
    x: Math.floor(12 * (clientX - left) / width),
    y: 0, // puts it at the bottom
    w: 2,
    h: 2,
    i: `${index++}`,
  }
  const block = doc.value.createNode(Object.assign({
    slot: 'default',
    key,
    index,
    label,
    propsData: {
    },
    layout: info,
    level: parent === root ? 1 : parent.attrs.level + 1,
    top: parent === activePage.value ? e.offsetY : 0,
    left: parent === activePage.value ? e.offsetX : 0,
  }, meta?.init || {}))
  // interval.setState(index, block.attrs.propsData)
  parent.insert(block)
  emitter.emit('alioth:node-action', null)
}

const { add, del } = useV(__PHECDA__.drag)

onMounted(() => {
  add(dom.value, addBlock)
})
onBeforeUnmount(() => {
  del(dom.value)
})
</script>

<template>
  <section ref="dom" class="a-container" @click.stop.self="doc.cancel()" @mouseup.stop>
    <GridLayout
      v-model:layout="layout" :col-num="12" :row-height="30" :is-draggable="props.mode !== 'render'"
      :is-resizable="props.mode !== 'render'" vertical-compact prevent-collision use-css-transforms
      @layout-updated="update"
    >
      <slot />
    </GridLayout>
  </section>
</template>

<style>
.a-container {
  min-width: 600px;
  min-height: 300px;
}
</style>
