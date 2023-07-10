<script setup lang="ts">
import { ElCheckbox, ElCheckboxButton } from 'element-plus'

withDefaults(defineProps<{
  isButton: boolean
  options: string[]
}>(), {
  isButton: false,
})

const { modelValue } = defineModels<{
  modelValue: string
}>()
</script>

<template>
  <el-checkbox-group v-bind="$attrs" v-model="modelValue">
    <Component :is="isButton ? ElCheckboxButton : ElCheckbox" v-for="(item, i) in options" :key="i" :label="item">
      {{ item }}
    </Component>
  </el-checkbox-group>
</template>
