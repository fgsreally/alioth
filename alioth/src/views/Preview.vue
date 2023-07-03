<script setup lang="ts">
import { VirtualDocument, getWidget, loadJS, loadJSON } from 'alioth-lib'
import { useV } from 'phecda-vue'
import { RenderBlock } from '@/components/renderBlock'
const state = reactive({
  preset: '',
  data: '',
})
const isLoading = ref(false)
const doc = new VirtualDocument()
async function add() {
  const data = await loadJSON(state.data)
  console.log(data)
  doc.load(data[0].data)
  isLoading.value = true
}
</script>

<template>
  <div v-if="isLoading">
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
    预设<input v-model="state.preset">
    数据<input v-model="state.data">

    <button @click="add">
      添加
    </button>
  </div>
</template>

<style scoped>

</style>
