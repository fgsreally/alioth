<script lang="ts" setup>
import { emitter, useV } from 'phecda-vue'
import { ImportState } from 'alioth-lib/model'
const props = defineProps<{ project: string }>()
// const { getProjectList, getTsComment } = useV(ConnectState)

// const tableData = computed(() => {
//   return getProjectList(project)
// })
// function getComment(i: number) {
//   const { entry, name } = tableData.value[i]
//   return getTsComment(project, entry, name)
// }

const { records } = useV(ImportState)

const tableData = computed(() => {
  return Object.entries(records.value).map(([k,v]:any)=>({key:k,...v}))
})
function dragstart(i: number) {
  const { key } = tableData.value[i]
  emitter.emit('dragstart', key)
}

function dragend() {
  emitter.emit('dragend')
}
function openEditor(url: string) {
  fetch(url)
}
</script>

<template>
  <el-table :data="tableData" style="width: 100%" @mousedown.stop>
    <el-table-column prop="key" label="函数名" width="180">
      <template #default="scope">
        <div
              draggable="true"
              @dragstart.stop="(e) => {
                dragstart(scope.$index)
              }"
              @dragend="dragend"
            >
              {{ scope.row.key }}
            </div>
      </template>
    </el-table-column>
    <el-table-column prop="description" label="描述" width="180">
      <!-- <template #default="scope">
        <p @click="openEditor(scope.row.url)">
          {{ scope.row.entry }}
        </p>
        <a :href="scope.row.url"> {{ scope.row.entry }}</a>
      </template> -->
    </el-table-column>
  </el-table>
</template>
