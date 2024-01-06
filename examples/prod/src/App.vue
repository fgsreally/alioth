<script setup lang="ts">
import { AliothRender, NameSpaceStore, VirtualDocument, loadJSON, loadPresets } from 'alioth-vue'
import { onMounted, reactive, ref } from 'vue'

const isLoading = ref(true)
const instance = reactive(new VirtualDocument())
onMounted(async () => {
  await loadPresets(['http://127.0.0.1:8080/entry.js', 'http://127.0.0.1:8080/style.css'])
  const { docs } = await loadJSON('http://127.0.0.1:8080/data.json')
  instance.load(docs)
  console.log(NameSpaceStore)
  isLoading.value = false
})
</script>

<template>
  <div v-if="!isLoading">
    <AliothRender
      :doc="instance"
      :node="instance.nodes[1]"
    />
  </div>
  <div v-else>
    loading...
  </div>
</template>

<style scoped>

</style>
