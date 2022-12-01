<template>
  <div class="page-admin__header">
    <el-input v-model="pageName" placeholder="页面名"></el-input
    ><el-button
      v-if="$route.fullPath == '/'"
      size="small"
      type="primary"
      @click="storePage"
      >创建</el-button
    >
    <el-button v-else size="small" type="primary" @click="$router.push('/')"
      >返回</el-button
    >
  </div>

  <el-table :data="pageState.pages" style="width: 100%">
    <el-table-column prop="name" label="名称" width="120" />
    <el-table-column label="操作" width="180">
      <template #default="scope">
        <el-button type="primary" size="small" @click="load(scope.row.name)">
          加载
        </el-button>
        <el-button type="primary" size="small" @click="redirct(scope.row.name)">
          跳转
        </el-button>
        <el-button
          type="primary"
          size="small"
          @click="pageState.delPage(scope.row.name)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <p class="page-admin__message">
    当前页面为{{ pageState.curPage || "未定义" }}
  </p>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { usePageState } from "@/store/page";
import { instance } from "@/engine/init";
import { cloneDeep } from "lodash-es";
import {
  ctx as stateCtx,
  applyStore as applyStateStore,
  setStore,
} from "@/engine/filter";
import { ctx, storeService, applyStore } from "@/engine/service";

let pageName = ref("default");
let pageState = usePageState();

window.addEventListener("unload", function () {
  pageState.storage();
});

const router = useRouter();
function redirct(name: string) {
  router.push(`/pure/${name}`);
}

function storePage() {
  pageState.addPage(
    cloneDeep({
      name: pageName.value, //页面名
      instance: instance.data, //block 数据
      state: stateCtx.state, //页面状态
      services: ctx.services,
    })
    //依赖关系
  );
  storeService(pageName.value);
  // State.createState();
  setStore(pageName.value);
  instance.data.blocks = [];
  instance.$cancel();
}

function load(name: any) {
  let pageInfo = pageState.find(name);
  instance.load(pageInfo?.instance);
  applyStateStore(name);
  applyStore(name, "services");
  pageState.curPage = name;
}
</script>

<style lang="scss" scoped>
.el-input {
  width: 200px;
  margin-right: 5px;
}
.el-button {
  width: 40px;
}
.page-admin__message {
  font-size: small;
  position: absolute;
  margin-top: 5px;
  color: grey;
  font-weight: 100;
  right: 10px;
}
</style>
