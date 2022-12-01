<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { ctx, setState } from '@/engine/filter'
const editor = ref()

const codeStr = computed(() => {
  return JSON.stringify(ctx.state)
})

function update(ret: any) {
  try {
    for (const i in ret)
      setState(i, ret[i])
  }
  catch (e) {
    ElMessage.warning('格式不对')
  }
}
</script>

<template>
  <section class="state__box">
    <div>
      <CodeEditor
        ref="editor"
        is-func
        :value="codeStr"
        :width="350"
        prefix="return "
        :height="100"
        @update="update"
      />
    </div>
  </section>
</template>

<style scoped>
.state__box > div {
  margin-bottom: 30px;
  border: 3px solid blue;
}
.el-button {
  position: relative;
  left: 200px;
}
</style>
