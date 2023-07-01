<script setup lang="ts">
defineProps<{
  options: { label: string;value: string }[]
}>()

const { modelValue } = defineModels<{
  modelValue: string
}>()
</script>

<template>
  <el-select v-model="modelValue">
    <el-option v-for="(item, i) in options" :key="i" :label="item.label" :value="item.value" />
  </el-select>
</template>

<style scoped>

</style>
