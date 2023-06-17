<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLayer } from '@/composables/layer'
import Container from '@/components/modals/Container.vue'
import Tooltip from '@/components/base/Tooltip.vue'
const router = useRouter()
const headerConfig = [{
  label: '实时预览',
  class: 'i-lucide:eye',
  handler() {
    router.push('/preview')
  },
},

{
  class: 'i-lucide:eye',

  label: '容器配置',
  handler() {
    useLayer(Container, {}, { title: '容器配置' })
  },
},
// {
//   label: '可用功能',
//   handler() {
//     $Dragger()
//   },
// }
]
</script>

<template>
  <section w-full h-12 border-b-solid border-font-t flex flex-items-center justify-between p-x-8>
    <div>
      <h2 color-p>
        Alioth
      </h2>
    </div>
    <div flex flex-items-center justify-center m-r-10>
      <div v-for="(item, i) in headerConfig" :key="i" class=" color-font-n cursor-pointer m-x-1 hover:color-blue " :class="item.class" @click="item.handler" />
    </div>
  </section>
</template>

<style scoped>

</style>
