<script setup lang="ts">
import { useV } from 'phecda-vue'
import { useLayer } from '../../composables/layer'
import { ViewModel } from '@/models/view'

const { headers } = useV(ViewModel)
</script>

<template>
  <div fixed right="0" top="0" flex flex-items-center justify-center bg-on-b p-4 rd-2 m-4>
    <div
      v-for="(item, i) in headers" :key="i" color-font-n
      cursor-pointer m-x-1 hover:color-blue @click="item.handler({ useLayer })"
    >
      <Component :is="item.component" />
    </div>
  </div>
</template>

<style scoped>

</style>
