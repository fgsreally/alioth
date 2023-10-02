<script setup lang="ts">
const { modelValue } = $defineModels<{ modelValue: { label: string;value: any }[] }>()
const add = () => modelValue.push({ label: '', value: '' })
</script>

<template>
  <section>
    <div v-for="(item, i) in modelValue" :key="i" style="display:flex">
      <el-input v-model="item.label" placeholder="label" size="small" style="margin:2px" />
      <el-input v-model="item.value" placeholder="value" size="small" style="margin:2px" />
    </div>
    <el-button @click="add">
      +
    </el-button>
  </section>
</template>

<style scoped>

</style>
