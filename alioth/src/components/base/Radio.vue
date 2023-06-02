<script setup lang="ts">
const props = defineProps<{
  modelValue: Object
  options: { value: any; label: string }[]
}>()

const value = toRef(props, 'modelValue')
</script>

<template>
  <el-radio-group v-model="value" class="ml-4" $attrs>
    <el-radio v-for="(item, i) in props.options" :key="i" :label="item.label">
      {{ item.value }}
    </el-radio>
  </el-radio-group>
</template>

<style scoped>

</style>
