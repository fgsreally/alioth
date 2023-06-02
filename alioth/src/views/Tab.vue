<script lang="ts" setup>
import { ref } from 'vue'
import { useV } from 'phecda-vue'
import { DocState } from '@/models/doc'

const { remove, docs, add, active, activeId} = useV(DocState)


</script>

<template>
  <div style="position: relative;top:10px">
    <!-- <el-button size="small" style="position: absolute;right: 0;top:15px;z-index: 30;" @click="addTab">
      add tab
    </el-button> -->
    <el-tabs
      v-model="activeId"
      type="card"
      class="demo-tabs"
      editable
      @tab-add="active(add())"
      @tab-remove="remove"
    >
      <el-tab-pane
        v-for="item in docs"
        :key="item.id"
        :label="item.title"
        :name="item.id"
      >
      
    
    </el-tab-pane>
    </el-tabs>
  </div>
</template>
