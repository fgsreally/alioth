<template>
  <el-dialog v-model="dialogVisible" title="配置容器" width="700px">
    <el-form label-width="300px">
      <el-form-item label="页面宽度">
        <el-input-number
          v-model="instance.container.width"
          :min="instance.container.wLimit[0]"
          :max="instance.container.wLimit[1]"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="页面高度">
        <el-input-number
          v-model="instance.container.height"
          :min="instance.container.hLimit[0]"
          :max="instance.container.hLimit[1]"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="圆角">
        <el-input-number v-model="instance.container.radius" :min="1"></el-input-number>
      </el-form-item>
      <el-form-item label="基础尺寸(font-size)">
        <el-input-number
          v-model="instance.container.fontSize"
          :min="1"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="外侧边距">
        <el-input-number v-model="instance.container.margin" :min="1"></el-input-number>
      </el-form-item>
      <el-form-item label="栅格数目">
        <el-input-number v-model="instance.container.gridNum" :min="1"></el-input-number>
      </el-form-item>
      <el-form-item label="栅格间距">
        <el-input-number v-model="instance.container.gridGap" :min="1"></el-input-number>
      </el-form-item>
      <el-form-item label="背景颜色">
        <el-color-picker v-model="instance.container.backgroundColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="栅格颜色">
        <el-color-picker v-model="instance.container.gridColor"></el-color-picker>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { instance } from "@/engine/init";
let dialogVisible = ref(false);

function dialog() {
  dialogVisible.value = true;
}
defineExpose({ dialog });
</script>
