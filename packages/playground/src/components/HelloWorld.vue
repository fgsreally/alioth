<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(330)
</script>

<script setup test>
return { msg: 'test info' }
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <button type="button" @click="count++">
      count is {{ count }}
    </button>
    <p>
      Edit1
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
