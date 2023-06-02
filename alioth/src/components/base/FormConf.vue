<script setup lang="ts">
const { modelValue } = defineProps<{
  modelValue: Record<string, any>

}>()
const defaultConf = {
  _component: 'Input',
  _formItem: { label: '对应组件' },

}
const cur = reactive({ name: '', config: defaultConf })
const options = [{
  value: defaultConf,
  label: 'Input',
},
]

function addForm() {
  modelValue[cur.name] = defaultConf
}
</script>

<template>
  <pane-form v-for="(item, i) in modelValue" :key="i" :data="i" :config="item" />
  {{ modelValue }}
  <el-input v-model="cur.name" />
  <el-select v-model="cur.config">
    <el-option
      v-for="(item, i) in options"
      :key="i"
      :label="item.label"
      :value="item.value"
    />
  </el-select>  <el-button @click="addForm">
    添加
  </el-button>
</template>

<style scoped>

</style>
