# 部署
> 我这里提供一个最简单的案例,你也可以做的很复杂
应该有两个东西，一个是平台中得到的`json`,另一个是`vite`打包得到的`js/css`
## 初始化
在渲染之前，先初始化，再设置[注册器](./register.md)
```ts
// in main.ts

import { createApp } from 'vue'
import { init, setRegister } from 'alioth-lib'
import App from './App.vue'
import { Register } from './engine/register'

init()
setRegister(Register)

createApp(App).mount('#app')
```

## 组件
具体的组件中，加载上述的两部分

<script setup lang="ts">
import { VirtualDocument, createRenderComponent, getWidget, interval, loadDoc, loadPreset } from 'alioth-lib'
import { onMounted, ref } from 'vue'
const RenderBlock = createRenderComponent()

const presetUrls: string[] = [/**物料的url */]
const docUrl = 'http://127.0.0.1:8080/test.json'/**json的url */
const isLoading = ref(true)
const doc = new VirtualDocument()
onMounted(async () => {
  await loadPreset(presetUrls)
  await loadDoc(docUrl)
  doc.load(interval.docData[1].data)//加载对应的doc
  isLoading.value = false
})
</script>

<template>
  <div v-if="!isLoading">
  <!-- 容器 -->
    <div
      :style="{
        position: 'relative',
        backgroundColor: doc.root.attrs.backgroundColor,
        width: `${doc.root.attrs.width}px`,
        height: `${doc.root.attrs.height}px`,
      }"
    >
    <!-- 渲染内容 -->
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
