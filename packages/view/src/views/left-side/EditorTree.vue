<script setup lang="ts">
import { instance } from '@/engine/init'
const props = defineProps({
  data: Array,
})

const handleNodeClick = (data: any) => {
  instance.$select(data)
}
</script>

<template>
  <div>
    <el-tree
      class="preview-tree__tree"
      :data="props.data"
      :props="{ children: 'blocks', label: 'key' }"
      default-expand-all
      empty-text="空"
      node-key="uuid"
      :highlight-current="true"
      @node-click="handleNodeClick"
    />
  </div>
</template>

<style scoped>
.preview-tree__tree {
  margin-top: 50px;
}
</style>
