<script setup lang="ts">
import slider from '@/components/base/Slider.vue'
const props = defineProps<{ modelValue: string }>()
const emits = defineEmits(['a'])
</script>

<template>
  <div class="al-test" @click="emits('a', 1)">
    {{ props.modelValue }}
    <slot name="header">
      header
    </slot>
    <slider relative z-30 />
    <slot />
  </div>
</template>

<style scoped>
.al-test {
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>
