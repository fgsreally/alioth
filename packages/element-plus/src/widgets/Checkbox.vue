<script setup lang="ts">
defineProps<{ label: string }>()
// const { modelValue } = defineModels<{
//   modelValue: string
// }>()
</script>

<template>
  <el-checkbox v-bind="$attrs" :label="label" />
</template>

<info lang='json'>
   {
  "init": {
    "propsData": {
      "modelValue": false
    }
  },
  "props": {

  }
}
</info>
