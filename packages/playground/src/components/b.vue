<script setup lang="ts">
const props = defineProps<{ value: string }>()
const emits = defineEmits(['a'])
</script>

<template>
  <button class="btn btn-primary">
    Button
  </button>

  <div class="w-10 bg-blue-300 h-10" @click="emits('a', 1)">
    {{ props.value }}
    <slot name="home">
      home
    </slot>
    <slot />
  </div>
</template>
