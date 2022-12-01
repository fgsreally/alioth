<script setup lang="ts">
import { getComponent } from '@alioth/engine '
import { instance } from '@/engine/init'
import { ctx } from '@/engine/service'
const comp = (getComponent(instance.clickBlock.key) as any).comp
const events = [{ label: '点击', value: 'click' }]

function eventCase(str: string) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

if (comp.emits) {
  events.push(
    ...comp.emits?.map((item: string) => {
      return { label: eventCase(item), value: eventCase(item) }
    }),
  )
}

function isDisabed(key: string) {
  if (instance.clickBlock.mutations.some(item => item.key === key))
    return true
  return false
}
function addEvent() {
  instance.clickBlock.mutations.push({ key: undefined, handler: undefined })
}
</script>

<template>
  <section
    v-for="(item, i) in instance.clickBlock.mutations"
    :key="i"
    class="mutation__select"
  >
    <el-select v-model="item.key" placeholder="事件名" size="small">
      <el-option
        v-for="(item, i) in events"
        :key="i"
        :label="item.label"
        :value="item.value"
        :disabled="isDisabed(item.value)"
      />
      <el-option label="无" :value="undefined" />
    </el-select>

    <el-select
      v-model="item.handler"
      placeholder="事件函数"
      size="small"
      style="width: 100%"
    >
      <el-option
        v-for="(_, j) in ctx.services"
        :key="j"
        :label="j"
        :value="j"
      />
      <el-option label="无" :value="undefined" />
    </el-select>
  </section>
  <el-button @click="addEvent">
    添加事件
  </el-button>
</template>

<style lang="scss">
.mutation__select {
  display: flex;
  & .el-input {
    width: 150px;
  }
}
</style>
