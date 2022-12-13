<script setup lang="ts">
import { BlockType, instance } from '@/engine/init'
import { ctx } from '@/engine/filter'

const { type, label } = defineProps<{
  type: string
  label: string
}>()
</script>

<template>
  <section class="vstate__box">
    <el-select
      v-model="instance.clickBlock[type as keyof BlockType]"
      :placeholder="`${label}绑定变量`"
    >
      <el-option
        v-for="(item, i) in ctx.state"
        :key="i"
        :label="i"
        :value="i"
      />
      <el-option label="无" :value="undefined" />
    </el-select>
  </section>
</template>

<style scoped>
.vstate__box {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
