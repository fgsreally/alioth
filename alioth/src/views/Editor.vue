<script setup lang="ts">
import { getEditorStore, iframeBox } from 'alioth-lib'
import { useV } from 'phecda-vue'
import PreviewPart from './sidebar/PreviewPart.vue'
import EditRender from './preview/EditRender.vue'
import Header from './header/Header.vue'
import Tab from './Tab.vue'
import { initialize } from '@/engine/init'
// import { responseScreen } from '@/utils/response'
import { DocState } from '@/models/doc'
import { ConfigState } from '@/models/config'
import type { RootSchema } from '@/engine/schema'
const { container } = $(useV<typeof DocState<RootSchema>>(DocState))
let activeTab = $ref('lib')
// responseScreen()
const { previewConfig } = useV(ConfigState)
initialize()
function clickTab(key: string) {
  activeTab = key
}
</script>

<template>
  <Header />
  <el-row class="editor__box ">
    <Transition appear name="left">
      <div v-show="!container.attrs.isFull" class="editor__aside left  border-ol b-r-2 b-r-solid">
        <el-tabs v-model="activeTab" @tab-click="clickTab">
          <el-tab-pane v-for="(item, i) in previewConfig" :key="i" :label="item!.label" :name="item.key">
            <PreviewPart
              :comp-list="Array.from(getEditorStore(item.key).widgetMap).map((item:any) => item[1])"
              :type="item.type"
            />
          </el-tab-pane>
        </el-tabs>
      </div>
    </Transition>
    <el-main class="editor_box">
      <div>
        <Tab class="tabs" />
        <iframeBox :width="container.attrs.width" :height="container.attrs.height">
          <EditRender />
        </iframeBox>
      </div>
    </el-main>
  </el-row>
</template>

<style lang="scss">
.editor_box {

}
.el-main {
  --el-main-padding: 0;
}

.editor__aside {
  &.right {
    overflow-x: hidden;
    width: 440px;
    position: absolute;
    right: 0;
    height: 100%;
    z-index: 2;
  }
  &.left {
    overflow-x: hidden;
    width: 300px;
    position: absolute;
    left: 0;
    height: 100%;
    z-index: 2;
    background-color: rgb(33, 35, 46);
  }
}
</style>
