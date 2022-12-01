<script setup lang="ts">
import { SizeType } from '@alioth/engine'
import { instance } from '@/engine/init'
import { emitEvent } from '@/utils/emitter'
import { changeBlockSize } from '@/utils/style'

const propertyOptions = ['left', 'top', 'w', 'h']
const sizeOptions = ['px', 'rem', 'vw', 'vh', '%']
function changeSize(key: string, to: SizeType) {
  emitEvent('property-change', [key])
  changeBlockSize(instance.clickBlock, key, to)
}
</script>

<template>
  <div v-for="(property, i) in propertyOptions" :key="i">
    <p style="width: 20px">
      {{ property }}
    </p>
    <el-button
      v-for="(item, i) in sizeOptions"
      :key="i"
      :disabled="(instance.clickBlock as any)?.[property]?.size === item"
      @click="changeSize(property, item as SizeType)"
    >
      {{ item }}
    </el-button>
  </div>
</template>

<style lang="scss">

</style>
