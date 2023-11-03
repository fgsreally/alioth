# 快快快快开始

## 1. 创建项目
   随意，只要是个`vite+vue3`项目就行

## 2. 安装依赖

```shell
npm i alioth-dev
```

## 3. 添加插件
   在`vite.config.ts/js`中，添加插件

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Alioth, ExternalMap } from 'alioth-dev'

export default defineConfig({
  plugins: [
    vue(),
    Alioth({
      project: 'project name',
      entry: {
        a: './src/a.ts', // 入口文件
      },
    }),
  ],
})
```

## 4. 启动项目

```shell
npm run dev
```

看到控制台输出的链接，点击它就好

## 5. 添加物料/功能
先随便写个组件

```vue
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
</script>

<template>
  <div class="test">
    {{ msg }}
  </div>
</template>

<style scoped>
.test {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
```

在入口文件中
```ts
// in entry.ts

import HelloWorld from './components/HelloWorld.vue'
export const widget_a = {
  alioth: 'widget', // 注册一个物料
  data: {
    category: 'lib',
    key: 'a',
    component: HW,
    meta: {
      props: {
        msg: {
          _component: 'Input',
          _formItem: { label: '绑定数据' },
        },
      },
      events: {
        onClick: {
          _component: 'Input',
          _formItem: { label: '绑定事件' },
        },
      },
    },
  },
}
const c = ref(1)
export const state_c = {
  alioth: 'state', // 注册一个变量
  data: {
    key: 'c',
    value: c,
  },
}

export const state_changeC = {
  alioth: 'state', // 注册一个变量
  data: {
    key: 'changeC',
    value: function changeC() {
      c.value++
    },
  },
}
```




## 6. 界面中操作
假设功能如下：点击'变化'按钮，helloworld组件中的文字添加一个句号


## 7. 预览
可以直接点击右上预览，也可以右上点击导出json，点开控制台第二个链接，上传这个json，查看预览效果，


> 生产环境部署[详见](../core/deploy.md)