<script setup lang="ts">
const { options } = defineProps<{ options: { label: string; value: string }[] }>()
</script>

<template>
  <el-select v-bind="$attrs" placeholder="Select" style="width:100%">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<info lang='json'>
    {
    "init": {
      "propsData": {
        "options":[]
      }
    },
    "props": {
      "options": {
        "_component": "Option",
       "_formItem":{"label":"options"}
      },
      "modelValue": {
        "_component": "Input",
        "_formItem":{"label":"modelValue"}

      }
    }
  }
  </info>
