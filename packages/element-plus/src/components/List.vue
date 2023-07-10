<script setup lang="ts">
const { modelValue: list } = defineModels<{
  modelValue: string[]
}>()

const value = ref('')
</script>

<template>
  <div>
    <div v-for="(item, i) in list" :key="i">
      {{ item }}
    </div>
    <el-input v-model="value" />
    <el-button @click="list.push(value)">
      添加
    </el-button>
  </div>
</template>

<style scoped>

</style>
