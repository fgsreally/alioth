<script lang="ts" setup>
import type { VirtualNode } from 'alioth-vue'
import { emitter, useV } from 'phecda-vue'
const { activePage, doc } = $(useV(__PHECDA__.doc))
function nodeClick(node: any) {
  doc.select(node)
}

function drop(draggingNode: any,
  dropNode: any,
  dropType: string) {
  const node1 = draggingNode.data as VirtualNode<any>
  const node2 = dropNode.data as VirtualNode<any>
  doc.transact(() => {
    doc.removeNode(node1)
    const newNode = doc.createNode(node1.attrs, node1.id)
    const index = node2.index!
    if (dropType === 'inner') {
      node2.insert(newNode, 0)
    }

    else {
      if (dropType === 'before')
        node2.parent!.insert(newNode, index)

      if (dropType === 'after')
        node2.parent!.insert(newNode, index + 1)
    }
  })

  emitter.emit('alioth:node-action', null)
}
</script>

<template>
  <el-scrollbar>
    <el-tree
      class="tree" :data="activePage.cloneChilds" default-expand-all node-key="id"
      :props="{ children: 'cloneChilds', label: (data:any) => data.id }"
      draggable
      @node-click="nodeClick"
      @node-drop="drop"
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
