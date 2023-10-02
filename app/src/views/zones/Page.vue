<script setup lang="ts">
import { useV } from 'phecda-vue'
import { DocModel } from '@/models/doc'
const { remove, doc, add, active, activeId, pages } = $(useV(DocModel))
</script>

<template>
  <section m-4 w-50 h-100 />
</template>
