<script setup lang="ts">
import { useV } from 'phecda-vue'
import { pageState } from '@/store/page'
const pageName = ref('')

const { pages, del, load, storePage, curPage } = useV(pageState)
</script>

<template>
  <div class="page-admin__header">
    <el-input v-model="pageName" placeholder="页面名" /><el-button size="small" type="primary" @click="storePage(pageName)">
      创建
    </el-button>
    <!-- <el-button v-else size="small" type="primary" @click="$router.push('/')">
          返回
        </el-button> -->
  </div>

  <el-table :data="pages" style="width: 100%">
    <el-table-column prop="name" label="名称" width="120" />
    <el-table-column label="操作" width="180">
      <template #default="scope">
        <el-button type="primary" size="small" @click="load(scope.row.name)">
          加载
        </el-button>
        <!-- <el-button type="primary" size="small" @click="redirct(scope.row.name)">
              跳转
            </el-button> -->
        <el-button type="primary" size="small" @click="del(scope.$index)">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <p class="page-admin__message">
    当前页面为{{ curPage || "未定义" }}
  </p>
</template>

<style lang="scss" scoped>
.page-admin {
  &__message {
    color: grey;
    font-size: 10px;
    text-align: end;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 5px;
  }

}
</style>
