<script setup lang="ts">
import { useV } from 'phecda-vue'
import { ConfigState } from '@/models/config'

const { headers } = useV(ConfigState)
</script>

<template>
  <section w-full h-12 border-b-solid border-font-t flex flex-items-center justify-between p-x-8>
    <div>
      <h2 color-p>
        Alioth
      </h2>
    </div>
    <div flex flex-items-center justify-center m-r-10>
      <div class=" color-font-n cursor-pointer m-x-1 hover:color-blue i-lucide:eye bg-red" />

      <div v-for="(item, i) in headers" :key="i" class=" color-font-n cursor-pointer m-x-1 hover:color-blue " :class="item.class" @click="item.handler" />
    </div>
  </section>
</template>

<style scoped>

</style>
