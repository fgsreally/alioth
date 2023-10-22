<script setup lang="ts">
import { emitter, useV } from 'phecda-vue'
import draggable from 'vuedraggable-es'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{ height: number; width: number; mode: string }>()

const { doc, activePage } = useV(__PHECDA__.doc)
const drag = ref(false)
function addBlock(module: any, e: MouseEvent) {
  const { key, label, meta } = module
  const { hoverNode, root } = doc.value
  // const index = createIndex(key)
  const parent = hoverNode || activePage.value

  const block = doc.value.createNode(Object.assign({
    slot: 'default',
    key,
    label,
    propsData: {
    },

  }, meta?.init || {}))
  // interval.setState(index, block.attrs.propsData)
  parent.insert(block)
  emitter.emit('alioth:node-action', null)
}
const dom = ref<HTMLElement>(null as any)

const { add, del } = useV(__PHECDA__.drag)

onMounted(() => {
  add(dom.value, addBlock)
})
onBeforeUnmount(() => {
  del(dom.value)
})
</script>

<template>
  <section
    ref="dom" class="al-window" :style="{
      width: `${props.width}px`,
      height: `${props.height}px`,
    }" @click.stop.self="doc.cancel()" @mouseup.stop
  >
    <draggable
      v-model="activePage.children" item-key="id"
      @start="drag = true"
      @end="drag = false"
    >
      <template #item="{ element }">
        <div>
          <slot :a_node="element" />
        </div>
      </template>
    </draggable>
  </section>
</template>
