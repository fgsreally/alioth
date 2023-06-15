<script lang="ts" setup>
import { emitter, useV } from 'phecda-vue'
import { ImportState } from 'alioth-lib/model'
defineProps<{ project: string }>()

const { records } = useV(ImportState)

const tableData = computed(() => {
  return Object.entries(records.value).map(([k, v]: any) => ({ key: k, ...v }))
})
function dragstart(i: number) {
  const { key } = tableData.value[i]
  emitter.emit('dragstart', key)
}

function dragend() {
  emitter.emit('dragend', null)
}
function openEditor(url: string) {
  fetch(url)
}
</script>

<template>
  <section>
    <div v-for="(item, i) in tableData" :key="i" w="160px">
      <div
        w="1/2" h-8 draggable="true"
        @dragstart.stop="(e) => {
          dragstart(i)
        }"
        @dragend="dragend"
      >
        {{ item.key }}
      </div>
      <div w="1/2" h-8>
        {{ item.description }}
      </div>
    </div>
  </section>
</template>
