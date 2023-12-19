<script setup lang="ts">
import { useV } from 'phecda-vue'
const { selectNode } = useV(__PHECDA__.selection)
if (!selectNode.value!.attrs.text)
  selectNode.value!.attrs.text = ''

function change(v) {
  selectNode.value!.set('text', v.target.value)
}

function keydown(e: KeyboardEvent) {
  console.log('keydown')
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
