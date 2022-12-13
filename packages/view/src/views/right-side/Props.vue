<script setup lang="ts">
import { computed, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { instance } from '@/engine/init'
import { emitEvent } from '@/utils/emitter'

const editor = ref()

const codeStr = computed(() => {
  return JSON.stringify(instance.clickBlock.propsData)
})

function update(ret: any) {
  emitEvent('property-change', ['propsData'])
  instance.clickBlock.propsData = ret
}
</script>

<template>
  <section class="props__box">
    <div>
      <CodeEditor
        ref="editor"
        is-func
        prefix="return "
        :value="codeStr"
        :width="500"
        :height="100"
        @update="update"
      />
    </div>
  </section>
</template>

<style scoped>
.props__box > div {
  border: 3px solid blue;
  margin-bottom: 30px;
}
.el-button {
  position: relative;
}
</style>
