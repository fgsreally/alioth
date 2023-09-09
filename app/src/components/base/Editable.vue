<!-- eslint-disable vue/valid-attribute-name -->
<script setup lang="ts">
const { modelValue } = defineModels<{
  modelValue: string
}>()
const isEditable = ref(false)
</script>

<template>
  <input v-if="isEditable" v-model="modelValue" type="text" relative z-20 @change="isEditable = false" @blur="isEditable = false">
  <p v-else @dblclick="isEditable = true">
    {{ modelValue }}
  </p>
</template>

<style scoped>

</style>
