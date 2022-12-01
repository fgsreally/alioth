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
  <!--
  <div ref="el" :style="style" style="position: fixed" class="dragbox">
    <p class="dragbox-title">页面管理</p>
    <el-scrollbar style="height: 100%">
      <div
        v-show="$route.path !== '/'"
        class="dragbox-item"
        @click="router.push('/')"
      >
        editor
      </div>
      <div
        v-for="(item, i) in pageState.pages"
        :key="i"
        class="dragbox-item"
        @click="toPureRender(item.name)"
      >
        {{ item.name }}
      </div>
    </el-scrollbar>
  </div> -->
</template>

<style lang="scss" scoped>
.page-control {
  padding-bottom: 10px;
}
</style>
