<script setup lang="ts">
import { VirtualDocument, createRenderComponent, getWidget, interval, loadDoc, loadPreset } from 'alioth-lib'
import { onMounted, ref } from 'vue'
const RenderBlock = createRenderComponent()

const presetUrls: string[] = ['http://127.0.0.1:8080/b.js', 'http://127.0.0.1:8080/style.css']
const docUrl = 'http://127.0.0.1:8080/test.json'
const isLoading = ref(true)
const doc = new VirtualDocument()
onMounted(async () => {
  await loadPreset(presetUrls)
  await loadDoc(docUrl)
  doc.load(interval.docData[1].data)
  isLoading.value = false
})
</script>

<template>
  <div v-if="!isLoading">
    <div
      :style="{
        position: 'relative',
        backgroundColor: doc.root.attrs.backgroundColor,
        width: `${doc.root.attrs.width}px`,
        height: `${doc.root.attrs.height}px`,
      }"
    >
      <RenderBlock
        v-for="(item) in doc.root.children" :key="item.id" :node="item" type="render"
        :value="getWidget(item.attrs.key)"
      />
    </div>
  </div>
  <div v-else>
    loading...
  </div>
</template>

<style scoped>

</style>
