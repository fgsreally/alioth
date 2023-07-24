<script setup lang="ts">
import { VirtualDocument, getWidget, interval, loadDoc } from 'alioth-lib'
import { RenderBlock } from '@/components/base/renderBlock'
const state = reactive({
  preset: '',
  data: '',
})
const isLoading = ref(false)
const doc = new VirtualDocument()
async function add() {
  await loadDoc(state.data)
  doc.load(interval.docData[0].data)
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
    数据<input v-model="state.data">

    <button @click="add">
      添加
    </button>
  </div>
</template>

<style scoped>

</style>
@/components/base/renderBlock
