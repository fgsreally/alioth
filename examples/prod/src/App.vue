<script setup lang="ts">
import { AliothRender, VirtualDocument, loadJSON, loadPresets } from 'alioth-vue'
import { onMounted, reactive, ref } from 'vue'

const isLoading = ref(true)
const instance = reactive(new VirtualDocument())
onMounted(async () => {
  await loadPresets(['http://127.0.0.1:8080/entry.js', 'http://127.0.0.1:8080/style.css'])
  const { docs } = await loadJSON('http://127.0.0.1:8080/test.json')
  instance.load(docs)
  isLoading.value = false
})
</script>

<template>
  <div v-if="!isLoading">
    <AliothRender
      :node="instance.root.children[0]"
    />
  </div>
  <div v-else>
    loading...
  </div>
</template>

<style scoped>

</style>
