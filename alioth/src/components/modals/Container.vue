<script setup lang="ts">
import { useV } from 'phecda-vue'
import { DocModel } from '@/models/doc'

const { container } = useV(DocModel)
</script>

<template>
  <div />
<!-- <el-form min-w-100 l-flex>
    <el-form-item label="页面宽度" justify-end>
      <el-input-number
        v-model="container.attrs.width"
        :min="container.attrs.wLimit[0]"
        :max="container.attrs.wLimit[1]"
      />
    </el-form-item>
    <el-form-item label="页面高度">
      <el-input-number
        v-model="container.attrs.height"
        :min="container.attrs.hLimit[0]"
        :max="container.attrs.hLimit[1]"
      />
    </el-form-item>
    <el-form-item label="圆角">
      <el-input-number v-model="container.attrs.radius" :min="1" />
    </el-form-item>
    <el-form-item label="基础尺寸(font-size)">
      <el-input-number
        v-model="container.attrs.fontSize"
        :min="1"
      />
    </el-form-item>
    <el-form-item label="外侧边距">
      <el-input-number v-model="container.attrs.margin" :min="1" />
    </el-form-item>
    <el-form-item label="栅格数目">
      <el-input-number v-model="container.attrs.gridNum" :min="1" />
    </el-form-item>
    <el-form-item label="栅格间距">
      <el-input-number v-model="container.attrs.gridGap" :min="1" />
    </el-form-item>
    <el-form-item label="背景颜色">
      <el-color-picker v-model="container.attrs.backgroundColor" />
    </el-form-item>
    <el-form-item label="栅格颜色">
      <el-color-picker v-model="container.attrs.gridColor" />
    </el-form-item>
  </el-form> -->
</template>
