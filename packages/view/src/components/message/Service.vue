<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="70%">
    <section class="code-editor__box">
      <div>
        <CodeEditor
          isWatch
          ref="editor"
          :value="serviceContent"
          :width="600"
          :height="400"
        ></CodeEditor>
      </div>
      <div class="code-editor__rightSide">
        <el-select
          v-model="serviceName"
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
          placeholder="服务名"
          @change="changeService"
        >
          <el-option
            v-for="(item, i) in ctx.services"
            :key="i"
            :label="i"
            :value="i"
          />
        </el-select>
        <!-- <div>服务名： <el-input v-model="name"> </el-input></div> -->
        <el-button @click="updateService">确认更改</el-button>
      </div>
    </section>
  </el-dialog>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { ElMessage } from "element-plus";
import { ctx, addService } from "@/engine/service";
import { analyseService } from "@/utils/parser";
import { updateDependence } from "@/utils/request";
// import { useServiceState } from "@/store/service";
let serviceName = ref("setup");
const editor = ref();
const dialogVisible = ref(false);
// const serviceState = useServiceState();

const serviceContent = computed(() => {
  return ctx.services[serviceName.value] || "()=>{}";
});
function dialog(name: string) {
  dialogVisible.value = true;
  serviceName.value = name;
}
defineExpose({ dialog });

function changeService() {
  editor.value.update(ctx.services[serviceName.value] || "()=>{}");
}

function updateService() {
  try {
    let content = editor.value.content;
    if (typeof new Function(content)() === "function")
      throw new Error("should return a ArrayFunction");
    let deps = analyseService(content);
    updateDependence(deps);
    addService(serviceName.value, content || "()=>{}");
    ElMessage.success("更改成功");
  } catch (e) {
    console.error(e);
    ElMessage.error("更改失败");
  }
}
</script>

<style scoped>
.code-editor__box {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
}
.code-editor__rightSide {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
