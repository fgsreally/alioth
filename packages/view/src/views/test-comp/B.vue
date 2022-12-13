<script setup lang="ts">
const props = defineProps<{ value: string }>()
const emits = defineEmits(['a'])
</script>

<template>
  <div v-for="(item, i) in [0, 1]" :key="i" class="test3" />
  <div class="test2" @click="emits('a', 1)">
    {{ props.value }}
    <slot name="home">
      home
    </slot>
    <slot />
  </div>
</template>

<style scoped>
.test2 {
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>
