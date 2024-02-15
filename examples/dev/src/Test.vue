<script setup lang="ts">
import { useV } from 'phecda-vue'
const { selectNode } = useV(__PHECDA__.selection)

const { set } = useV(__PHECDA__.doc)
if (!selectNode.value!.attrs.text)
  selectNode.value!.attrs.text = ''

function change(v) {
  set(selectNode.value!, 'text', v.target.value)
}

function keydown(e: KeyboardEvent) {
  e.stopPropagation()
}
</script>

<template>
  <div>
    <input v-model="selectNode!.attrs.text" @change="change" @keydown="keydown">
  </div>
</template>

<style scoped>

</style>
