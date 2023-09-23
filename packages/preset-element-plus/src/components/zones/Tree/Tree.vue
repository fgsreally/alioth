<script lang="ts" setup>
import { useV } from 'phecda-vue'
// @ts-expect-error miss type
const { activePage, doc } = $(useV(window.__PHECDA__.doc))
function nodeClick(node: any) {
  doc.select(node)
}
</script>

<template>
  <el-scrollbar>
    <el-tree
      class="tree" :data="activePage.children" default-expand-all node-key="id"
      :props="{ children: 'children', label: (data:any) => data.attrs.key }"
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
