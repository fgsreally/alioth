<!-- eslint-disable vue/no-extra-parens -->
<script setup lang="ts">
import EditRender from './preview/EditRender.vue'
import Header from './Header.vue'
import Page from './page/index.vue'
import Zones from '@/views/zones/index.vue'
</script>

<template>
  <Zones />
  <Header />
  <EditRender />

  <Page />
</template>
