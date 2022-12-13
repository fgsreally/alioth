<script setup lang="ts">
import type { BlockType } from '@/engine/init'
import { instance } from '@/engine/init'

const slots = computed(() => {
  return (
    (instance.parent(instance.clickBlock) as BlockType)?.slots || ['default']
  )
})
</script>

<template>
  <section class="vslot__box">
    <el-select v-model="instance.clickBlock.slot" placeholder="插槽名">
      <el-option
        v-for="item in slots"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
  </section>
</template>

<style scoped>
.vslot__box {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
