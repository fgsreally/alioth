<script setup lang="ts">
const { list } = defineModels<{
  list: { label: string;value: any }[]
}>()

const value = ref('')
const label = ref('')
</script>

<template>
  <div>
    <div v-for="(item, i) in list" :key="i">
      标签 <p>{{ item.label }}</p>
      值 <p>{{ item.value }}</p>
    </div>
    <el-input v-model="label" />
    <el-input v-model="value" />
    <el-button @click="list.push({ label, value })">
      添加
    </el-button>
  </div>
</template>

<style scoped>

</style>
