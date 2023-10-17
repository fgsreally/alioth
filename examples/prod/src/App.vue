<script setup lang="ts">
import { VirtualDocument, createRenderComponent, getWidget, loadJSON, loadPresets } from 'alioth-vue'
import { onMounted, reactive, ref } from 'vue'
const RenderBlock = createRenderComponent<any, any>()

const docUrl = 'http://127.0.0.1:8080/test.json'
const isLoading = ref(true)
const instance = reactive(new VirtualDocument())
onMounted(async () => {
  await loadPresets(['http://127.0.0.1:8080/b.js', 'http://127.0.0.1:8080/style.css'])
  const { docs } = await loadJSON('http://127.0.0.1:8080/data.json')
  instance.load(docs)
  isLoading.value = false
  console.log(getWidget('root'))
})
</script>

<template>
  <div v-if="!isLoading">
    <RenderBlock
      :node="instance.root.children[0]" type="render"
      :value="getWidget('root')"
    />
  </div>
  <div v-else>
    loading...
  </div>
</template>

<style scoped>

</style>
