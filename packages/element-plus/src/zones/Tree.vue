<script lang="ts" setup>
import { useV } from 'phecda-vue'

const { container, activeDoc } = $(useV(window.__PHECDA__.doc))
function nodeClick(node: any) {
  activeDoc.select(node)
}
</script>

<template>
  <el-scrollbar>
    <el-tree
      class="tree" :data="container.children" draggable default-expand-all node-key="id"
      :props="{ children: 'children', label: 'key' }"
      @node-click="nodeClick"
    />
  </el-scrollbar>
</template>

<style scoped>
.tree {
  width: 300px;
  height: 150px;
  background-color: transparent !important;
}
</style>
