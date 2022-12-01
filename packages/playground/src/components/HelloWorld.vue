<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(331);
</script>

<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
