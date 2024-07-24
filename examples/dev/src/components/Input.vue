<script setup lang="ts">
import { BaseSelectionModel, useSelectedNodeAttrs } from 'alioth-vue'
import { useV } from 'phecda-vue'
const { selectedNode } = useV(BaseSelectionModel)

const data = useSelectedNodeAttrs()
</script>

<template>
  <div v-if="selectedNode">
    <input v-model="data.test.a">
    <input v-model="data.test.b">
  </div>
</template>

<style scoped></style>
