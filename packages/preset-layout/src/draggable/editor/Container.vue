<script setup lang="ts">
import { emitter, useV } from 'phecda-vue'
import draggable from 'vuedraggable-es'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{ height: number; width: number; a_mode: string }>()

const { doc, activePage } = useV(__PHECDA__.doc)
const drag = ref(false)
function addBlock(module: any) {
  const { key, label, meta } = module
  const { hoverNode } = doc.value
  const parent = hoverNode || activePage.value
  const block = doc.value.createNode(Object.assign({
    slot: 'default',
    key,
    label,
    propsData: {
    },

  }, meta?.init || {}))
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
    ref="dom" class="a-container" @click.stop.self="doc.cancel()" @mouseup.stop
  >
    <draggable
      v-if="a_mode === 'edit'"
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
    <div v-else>
      <slot />
    </div>
  </section>
</template>

<style>
.a-container{
  min-width: 600px;
  min-height: 300px;
}
</style>
