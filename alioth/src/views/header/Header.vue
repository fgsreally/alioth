<script setup lang="ts">
import { useV } from 'phecda-vue'
import { useLayer } from '../../composables/layer'
import { ConfigModel } from '@/models/config'

const { headers } = useV(ConfigModel)
</script>

<template>
  <section w-full h-12 border-b-solid border-font-t flex flex-items-center justify-between p-x-8>
    <div>
      <h2 color-p>
        Alioth
      </h2>
    </div>
    <div flex flex-items-center justify-center m-r-10>
      <div
        v-for="(item, i) in headers" :key="i" color-font-n
        cursor-pointer m-x-1 hover:color-blue @click="item.handler({ useLayer })"
      >
        <Component :is="item.component" />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
