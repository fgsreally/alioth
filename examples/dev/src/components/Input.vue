<script setup lang="ts">
import { useV } from 'phecda-vue'
const { activePage } = useV(__PHECDA__.selection)
</script>

<template>
  {{ activePage && activePage.attrs.text }}
  <input v-if="activePage" v-model="activePage.attrs.text">
</template>

<style scoped></style>
