<script lang="ts" setup>
import { emitter, useR } from 'phecda-vue'
import { ConnectState } from '@/models/connect'
const { project = 'alioth' } = defineProps<{ project: string }>()

const { allExposed } = useR(ConnectState)

const tableData = $computed(() => {
  if (!allExposed[project])
    return []
  return allExposed[project].exposed
})
function dragstart(i: number) {
  emitter.emit('dragstart', `{{${tableData[i]}}}`)
}

function dragend() {
  emitter.emit('dragend', null)
}
</script>

<template>
  <section>
    <div v-for="(item, i) in tableData" :key="i" w="160px">
      <div
        h-8 w-full draggable="true"
        l-flex
        border-1
        border-solid
        border-font-t
        @mousedown.stop=""
        @dragstart.stop="(e) => {
          dragstart(i)
        }"
        @dragend="dragend"
      >
        {{ item }}
      </div>
      <!-- <div w="1/2" h-8>
        {{ item.description }}
      </div> -->
    </div>
  </section>
</template>
