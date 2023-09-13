<script setup lang="ts">
import { BaseDocModel, allWidgetMap, createRenderComponent, getWidget, loadJSON, loadPresets } from 'alioth-lib'
import { onMounted, reactive, ref } from 'vue'
const RenderBlock = createRenderComponent<any, any>()

const docUrl = 'http://127.0.0.1:8080/test.json'
const isLoading = ref(true)
const instance = reactive(new BaseDocModel())
onMounted(async () => {
  await loadPresets(['http://127.0.0.1:8080/b.js', 'http://127.0.0.1:8080/c.js', 'http://127.0.0.1:8080/style.css'])
  const { docs } = await loadJSON('http://127.0.0.1:8080/data.json')
  instance.load(docs)
  instance.active(instance.docs[0].id)
  isLoading.value = false
})
</script>

<template>
  <div v-if="instance.isActive">
    <div
      :style="{
        position: 'relative',
        backgroundColor: instance.activeDoc.root.attrs.backgroundColor,
        width: `${instance.activeDoc.root.attrs.width}px`,
        height: `${instance.activeDoc.root.attrs.height}px`,
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
