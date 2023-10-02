<script lang="ts" setup>
import { emitter, useO, useV } from 'phecda-vue'
import { ImportModel } from '@/models/import'
import { DragModel } from '@/models/drag'
const { info } = useV(ImportModel)
const { dragStart, dragEnd } = useV(DragModel)

function dragstart(key: any) {
  dragStart(`{{${key}}}`)
}

function dragend() {
  dragEnd()
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
