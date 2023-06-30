<script setup lang="ts">
import { createForm, useO } from 'phecda-vue'

const { config, data, onUpdate } = defineProps<{
  config: object
  data: object
  onUpdate?: (key: string) => void
}>()

const { componentMap } = useO(window.__PHECDA__.config)

const CustomForm = createForm(componentMap, ElForm, ElFormItem, {
  onUpdate,
})
</script>

<template>
  <CustomForm
    :config="config || {}"
    :data="data"
    :model="data"
    label-width="120px"
  />
</template>
