<script setup lang="ts">
import DragHelper from '../DragHelper.vue'
import UnoClass from './style/UnoClass.vue'
import SizeControl from './style/SizeControl.vue'
import { instance } from '@/engine/init'
</script>

<template>
  <DragHelper :x="42" :y="172">
    <Transition>
      <el-card
        v-if="instance.clickBlock && instance.container.isFull"
        class="size__control"
        shadow="always"
      >
        <template #header>
          <div class="card-header">
            断点
            {{ instance.container.mode }}
          </div>
        </template>

        <SizeControl />
      </el-card>
    </Transition>
  </DragHelper>
  <DragHelper :x="56" :y="615">
    <Transition>
      <el-card
        v-if="instance.clickBlock && instance.container.isFull"
        class="class-control"
        shadow="always"
      >
        <UnoClass />
      </el-card>
    </Transition>
  </DragHelper>
</template>

<style lang="scss" scoped>
// .el-card {
//   background-image: linear-gradient(62deg, #f7ce68 0%, #f7ce68 100%);
// }
</style>
