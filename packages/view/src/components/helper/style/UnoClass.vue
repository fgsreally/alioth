<script lang="ts" setup>
import { ref, watch } from 'vue'
import { instance } from '@/engine/init'
import { emitEvent } from '@/utils/emitter'
import { createSearch } from '@/utils/unoSearch'
const searcher = createSearch()

const curValue = ref<string>('')
// const unoOptions = ref<string[]>([]);

// watch(curValue, async (n) => {
//   unoOptions.value = await searcher(n);
// });

const querySearchAsync = async (
  queryString: string,
  cb: (arg: any) => void,
) => {
  const ret = await searcher(queryString)
  cb(ret.map(item => ({ value: item })))
}

function pushClass() {
  emitEvent('property-change', ['class'])
  instance.clickBlock.class.push(getBreakPointClass(curValue.value))
  curValue.value = ''
}

function getBreakPointClass(value: string) {
  return instance.container.mode !== 'normal'
    ? `${instance.container.mode}:${value}`
    : value
}

function filter(index: number) {
  instance.clickBlock.class = instance.clickBlock.class.filter(
    (_: any, i: number) => index !== i,
  )
}
</script>

<template>
  <section>
    <div
      v-for="(item, i) in instance.clickBlock.class"
      :key="i"
      @click="filter(i)"
    >
      {{ item }}
    </div>
  </section>
  <el-autocomplete
    v-model="curValue"
    :fetch-suggestions="querySearchAsync"
    placeholder="Please input"
    @select="pushClass"
  />
  <el-button color="#f7ce68" @click="pushClass">
    增加
  </el-button>
</template>
