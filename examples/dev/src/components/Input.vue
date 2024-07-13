<script setup lang="ts">
import { useV } from 'phecda-vue'
const { selectedNode } = useV(__PHECDA__.selection)
</script>

<template>
  <input v-if="selectedNode" v-model="selectedNode.attrs.msg">
</template>

<style scoped></style>
