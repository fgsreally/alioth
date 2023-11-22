<script setup lang="ts">

</script>

<template>
  <section
    ref="dom" class="a-container"
  >
    <div>
      <slot />
    </div>
  </section>
</template>

<style>
.a-container{
  min-width: 600px;
  min-height: 300px;
}
</style>
