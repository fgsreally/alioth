<script setup lang="ts">
withDefaults(defineProps<{
  isButton: boolean
  options: string[]
}>(), {
  isButton: true,
})

// const { modelValue } = defineModels<{
//   modelValue: string
// }>()
</script>

<template>
  <el-checkbox v-if="!isButton" v-bind="$attrs" />
  <el-checkbox-group v-else v-bind="$attrs">
    <el-checkbox-button v-for="(item, i) in options" :key="i" :label="item">
      {{ item }}
    </el-checkbox-button>
  </el-checkbox-group>
</template>
