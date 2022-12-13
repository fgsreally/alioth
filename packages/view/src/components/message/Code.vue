<script setup lang="ts">
import { ref } from 'vue'
import CodeEditor from '../CodeEditor.vue'
import { usePageState } from '../../store/page'
import { getCode } from '@/engine/code'
import type { Container } from '@/engine/init'
import { BlockType } from '@/engine/init'
const pageState = usePageState()
const code = ref('')
const dialogVisible = ref(false)

function dialog(content: string) {
  dialogVisible.value = true
  code.value = content
}

function getInstanceCode(
  instance: Container,
  state: any,
  services: { [key: string]: string },
) {
  return getCode(instance, state, services)
}

defineExpose({ dialog })
</script>

<template>
  <el-dialog v-model="dialogVisible" title="导出代码" width="700px">
    <el-tabs type="border-card">
      <el-tab-pane label="正在编辑">
        <CodeEditor
          :width="600"
          :height="600"
          language="html"
          :value="code"
        />
      </el-tab-pane>
      <el-tab-pane
        v-for="item in pageState.pages"
        :key="item.name"
        :label="item.name"
      >
        <CodeEditor
          :width="600"
          :height="600"
          language="html"
          :value="getInstanceCode(item.instance, item.state, item.services)"
        />
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
