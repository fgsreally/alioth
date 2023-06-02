<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLayer } from '@/composables/layer'
import Container from '@/components/modals/Container.vue'
import Dialog from '@/components/base/Dialog.vue'
const router = useRouter()
const btn = [{
  label: '实时预览',
  handler() {
    router.push('/preview')
  },
},

{
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
  <ElHeader class="l-flex">
    <div>
      <button v-for="(item, i) in btn" :key="i" class="l-btn-s mx-2" @click="item.handler">
        {{
          item.label
        }}
      </button>
      <!-- <input type="text" placeholder="input"> -->
    </div>
  </ElHeader>
</template>

<style scoped>

</style>
