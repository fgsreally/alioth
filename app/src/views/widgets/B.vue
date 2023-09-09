<script setup lang="ts">
const props = defineProps<{ modelValue: string }>()
const emits = defineEmits(['a'])
</script>

<template>
  <div class="al-test">
    <div @click="emits('a', 1)">
      {{ props.modelValue }}
      <slot name="header">
        header
      </slot>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.al-test {
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>
