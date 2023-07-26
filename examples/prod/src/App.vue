<script setup lang="ts">
import { DocumentModel, createRenderComponent, getWidget, loadDoc, loadPreset } from 'alioth-lib'
import { onMounted, reactive, ref } from 'vue'
const RenderBlock = createRenderComponent<any, any>()

const presetUrls: string[] = ['http://127.0.0.1:8080/b.js', 'http://127.0.0.1:8080/style.css']
const docUrl = 'http://127.0.0.1:8080/test.json'
const isLoading = ref(true)
const instance = reactive(new DocumentModel())
onMounted(async () => {
  await loadPreset(presetUrls)
  instance.load(await loadDoc(docUrl))
  isLoading.value = false
})
</script>

<template>
  <div v-if="instance.isActive">
    <div
      :style="{
        position: 'relative',
        backgroundColor: instance.container.attrs.backgroundColor,
        width: `${instance.container.attrs.width}px`,
        height: `${instance.container.attrs.height}px`,
      }"
    >
      <RenderBlock
        v-for="(item) in instance.container.children" :key="item.id" :node="item" type="render"
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
