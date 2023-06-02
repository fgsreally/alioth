<script setup lang="ts">
import Zones from '@/views/zones/index.vue'
</script>

<template>
  <router-view v-slot="{ Component }">
    <!-- <keep-alive :include="['editor']"> -->
    <component :is="Component" />
    <!-- </keep-alive> -->
  </router-view>
  <Zones />
</template>
