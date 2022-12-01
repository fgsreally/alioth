<script lang="ts" setup>
import { computed, isRef } from 'vue'
// import { useMethodStore, useServiceStore } from "@/store/index";
import { $Service } from '@/components/message/index'
import { ctx, delService } from '@/engine/service'
function changeService(s: string) {
  $Service(s)
}

const allService = computed(() => {
  return Object.keys(ctx.services).map((serviceName) => {
    return {
      name: serviceName,
      type: '局部',
    }
  })
})
</script>

<template>
  <el-button @click="changeService('default')">
    增加service
  </el-button>

  <el-table
    :data="allService"
    style="width: 100%"
    @row-click="({ name }:any) => changeService(name)"
  >
    <el-table-column prop="name" label="服务名" width="160" />
    <el-table-column prop="type" label="分类" width="160" />
    <el-table-column width="80" label="操作">
      <template #default="scope">
        <el-button
          size="small"
          type="danger"
          @click.stop="delService(scope.row.name)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
