<script lang="ts" setup>
import { emitter, useR } from 'phecda-vue'
import { ConnectState } from '@/models/connect'

const { info } = useR(ConnectState)
console.log(info)
function dragstart(i: number) {
  emitter.emit('dragstart', `{{${i}}}`)
}

function dragend() {
  emitter.emit('dragend', null)
}
</script>

<template>
  <section>
    <div v-for="(item, i) in info" :key="i" w="160px">
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
        {{ i }}
      </div>
      <!-- <div w="1/2" h-8>
        {{ item.description }}
      </div> -->
    </div>
  </section>
</template>
