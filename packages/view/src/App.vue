<script setup lang="ts">
import PageAdmin from '@/components/helper/PageAdmin.vue'
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <DragHelper :x="100" :y="505">
    <Transition>
      <el-card class="page-control" shadow="always">
        <PageAdmin />
      </el-card>
    </Transition>
  </DragHelper>
</template>

<style lang="scss" scoped>
.page-control {
  padding-bottom: 10px;
}
</style>
