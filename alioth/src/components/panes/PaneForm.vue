<script setup lang="ts">
import { createForm, useO } from 'phecda-vue'
import { ConfigState } from '@/models/config'

const { config, data, onUpdate } = defineProps<{
  config: object
  data: object
  onUpdate?: (key: string) => void
}>()

const { componentMap } = useO(ConfigState)

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
