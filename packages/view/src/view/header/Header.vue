<script setup lang="ts">
import { useRouter } from 'vue-router'
import { instance } from '@/engine/init'
import { $Code, $Container } from '@/components/message/index'

import { getCode } from '@/engine/code'

const router = useRouter()
const btn = [
  {
    label: '导出代码',
    handler() {
      $Code(getCode())
    },
  },
  {
    label: '容器配置',
    handler() {
      $Container()
    },
  },
  {
    label: '实时预览',
    handler() {
      router.push('/pure')
    },
  },
  {
    label: '全屏',
    handler() {
      instance.container.isFull = !instance.container.isFull
    },
  },
]
</script>

<template>
  <el-header class="header">
    <div>
      <el-button v-for="(item, i) in btn" :key="i" @click="item.handler">
        {{
          item.label
        }}
      </el-button>
    </div>
  </el-header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 5vh;
  align-items: center;
  background-color: #e0c3fc84;
}
</style>
