<script setup lang="ts">
import { createForm, useO } from 'phecda-vue'
import FormItem from './FormItem.vue'
import Form from './Form.vue'
import { ViewModel } from '@/models/view'

const { config, data, onUpdate } = defineProps<{
  config: object
  data: object
  onUpdate?: (key: string) => void
}>()

const { componentMap } = useO(ViewModel)

const CustomForm = createForm(componentMap, Form, FormItem, {
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
@/models/view
