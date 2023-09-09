<script setup lang="ts">
const props = defineProps<{
  modelValue: Object
  options: { value: any; label: string }[]
}>()
const value = toRef(props, 'modelValue')
</script>

<template>
  <el-select v-model="value" $attrs>
    <el-option
      v-for="(item, i) in props.options"
      :key="i"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<style scoped>

</style>
