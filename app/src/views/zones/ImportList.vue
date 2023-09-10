<script lang="ts" setup>
import { emitter, useV } from 'phecda-vue'
import { ImportModel } from '@/models/import'

const { info } = useV(ImportModel)
function dragstart(i: number) {
  emitter.emit('dragstart', `{{${i}}}`)
}

function dragend() {
  emitter.emit('dragend', null)
}
</script>

<template>
  <section m-y-2>
    <div v-for="(item, i) in info" :key="i" w="160px">
      <div
        cursor-grab
        h-8 w-full draggable="true" l-flex border-1 border-solid border-font-t @mousedown.stop="" @dragstart.stop="(e) => {
          dragstart(i)
        }" @dragend="dragend"
      >
        {{ i }}
      </div>
      <!-- <div w="1/2" h-8>
        {{ item.description }}
      </div> -->
    </div>
  </section>
</template>
@/models/import
