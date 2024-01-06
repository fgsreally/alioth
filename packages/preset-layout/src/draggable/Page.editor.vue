<script setup lang="ts">
import { useV } from 'phecda-vue'
import draggable from 'vuedraggable-es'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { VirtualNode } from 'alioth-vue'

const { activePage, insert, findChildrens } = useV(__PHECDA__.doc)
const { hoverNode, selectNode } = useV(__PHECDA__.selection)

const drag = ref(false)
function addBlock(module: any) {
  const { key, label, meta } = module
  const parent = hoverNode.value || activePage.value!
  const node = new VirtualNode(Object.assign({
    slot: 'default',
    key,
    label,

  }, meta?.init || {}))
  insert(node, parent)
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
    ref="dom" class="a-container" @click.stop.self="selectNode = undefined"
  >
    <draggable
      :model-value="findChildrens(activePage!)" item-key="id"
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

<style>
.a-container{
  min-width: 600px;
  min-height: 300px;
}
</style>
