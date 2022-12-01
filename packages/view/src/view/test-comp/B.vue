<template>
  <div class="test3" v-for="(item,i) in [0,1]" :key="i"></div>
  <div class="test2" @click="emits('a',1)">{{ props.value }}
    <slot name="home">home</slot>
  <slot /></div>
</template>

<script setup lang="ts">
const props = defineProps<{ value: string }>();
const emits = defineEmits(["a"]);
</script>
<style scoped>
.test2 {
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>
