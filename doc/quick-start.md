# 快快快快开始

1. 创建项目
   随意，只要是个`vite+vue3`项目就行

2. 安装依赖

```shell
npm i alioth-dev
```

3. 添加插件
   在`vite.config.ts/js`中，添加插件

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Alioth, ExternalMap } from 'alioth-dev'

export default defineConfig({
  plugins: [
    vue(),
    ExternalMap(),
    Alioth({
      project: 'project name',
      preset: ['element-plus'], // 也可以是你创建的preset的 url
      entry: {
        a: './src/a.ts', // 入口文件
      },
    }),
  ],
})
```

4. 启动项目

```shell
npm run dev
```

看到控制台输出的链接，点击它就好

5. 添加物料/功能
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
import { $R, $RW } from 'alioth-dev/helper'
import HelloWorld from './components/HelloWorld.vue'
import {ref} from 'vue'
export function change() {
  console.log(true)
}
// registerWidget，注册物料
$RW('lib' /** 分区 */, 'a' /** 唯一标识 */, HelloWorld, {
  props: {
    /**
     * 玉衡默认的配置器（使用了phecda-vue)，会使用Input对应的视图组件，然后对应的是物料中的msg，
     * 如果你自定义了，不使用默认的，这里按照自己的想法写就好
     */
    msg: {
      _component: 'Input',
      _formItem: { label: '文本' },
    },
  }
})

const a=ref('helloworld的数据')
// register 注册js,可以是数据，可以是函数，可以是任何东西
$R('a', a, {})
$R('change', () => {
  a.value + = '.'
  console.log('change')
}, { })
```

> `$R`,`$RW`最后一个参数都是元数据，你可以在自定义的部分中使用他们
> 请不要担心体积的问题，这些函数只是提供类型的帮助而已


6. 界面中操作
假设功能如下：点击'变化'按钮，helloworld组件中的文字添加一个句号


7. 预览
可以直接点击右上预览，也可以右上点击导出json，点开控制台第二个链接，上传这个json，查看预览效果，