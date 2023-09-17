<script setup lang="ts">
import { BaseDocModel, getWidget } from 'alioth-vue'
import { RenderBlock } from '@/components/base/renderBlock'
const instance: any = reactive(new BaseDocModel())

const isLoading = ref(false)
async function change(e: any) {
  const file = e.target.files[0]
  const reader = new FileReader()

  reader.onload = function (event) {
    const fileContent = event.target!.result
    const ret = JSON.parse(fileContent as string)
    instance.load(ret.docs)
    instance.active(instance.docs[0].id)
    isLoading.value = true
  }

  reader.readAsText(file)
}
</script>

<template>
  <div v-if="isLoading">
    <RenderBlock :node="instance.activeDoc.root!" type="render" :value="getWidget('root')!" />
  </div>
  <div v-else>
    <input type="file" @change="change">
  </div>
</template>
