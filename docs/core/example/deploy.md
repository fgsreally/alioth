# 部署
> 我这里提供一个最简单的案例,你也可以做的很复杂

应该有两个东西，一个是平台中得到的`json`,另一个是`vite`打包得到的`js/css`
## 初始化
```ts
// in main.ts

import { createApp } from 'vue'
import { init } from 'alioth-vue'
import App from './App.vue'

init('runtime')

createApp(App).mount('#app')
```

## 组件
具体的组件中，加载上述的两部分

```vue
<script setup lang="ts">
import { AliothRender, NameSpaceStore, VirtualDocument, loadJSON, loadPresets } from 'alioth-vue'
import { onMounted, reactive, ref } from 'vue'

const isLoading = ref(true)
const instance = reactive(new VirtualDocument())
onMounted(async () => {
  await loadPresets(['http://127.0.0.1:8080/entry.js', 'http://127.0.0.1:8080/style.css'])
  const { docs } = await loadJSON('http://127.0.0.1:8080/data.json')
  instance.load(docs)
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
```