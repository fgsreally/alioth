<script setup lang="ts">
import { getEditorStore, iframeBox } from 'alioth-lib'
import { useV } from 'phecda-vue'
import {
  TabContent,
  TabIndicator,
  TabList,
  TabTrigger,
  Tabs,
} from '@ark-ui/vue'
import PreviewPart from './sidebar/PreviewPart.vue'
import EditRender from './preview/EditRender.vue'
import Tab from './Tab.vue'
import { initialize } from '@/engine/init'
// import { responseScreen } from '@/utils/response'
import { DocState } from '@/models/doc'
import { ConfigState } from '@/models/config'
import type { RootSchema } from '@/engine/schema'
const { container } = $(useV<typeof DocState<RootSchema>>(DocState))
const { remove, docs, add, active, activeId } = $(useV(DocState))
// responseScreen()

const { previewConfig } = useV(ConfigState)
initialize()
</script>

<template>
  <section class="editor__box ">
    <Transition appear name="left">
      <div v-show="!container.attrs.isFull" class="editor__aside left  border-ol b-r-2 b-r-solid">
        <Tabs :default-value="previewConfig[0].key">
          <TabList>
            <TabTrigger v-for="(item, i) in previewConfig" :key="i" :value="item.key">
              <button l-btn-n>
                {{ item.key }}
              </button>
            </TabTrigger>
            <TabIndicator class="bg-p h-1" />
          </TabList>
          <TabContent v-for="(item, i) in previewConfig" :key="i" :value="item.key">
            <PreviewPart
              :comp-list="Array.from(getEditorStore(item.key).widgetMap).map((item:any) => item[1])"
              :type="item.type"
            />
          </TabContent>
        </Tabs>
        <!-- <el-tabs v-model="activeTab" @tab-click="clickTab">
          <el-tab-pane v-for="(item, i) in previewConfig" :key="i" :label="item!.label" :name="item.key">
            <PreviewPart
              :comp-list="Array.from(getEditorStore(item.key).widgetMap).map((item:any) => item[1])"
              :type="item.type"
            />
          </el-tab-pane>
        </el-tabs> -->
      </div>
    </Transition>
    <section class="editor_box">
      <div m-t-10>
        <iframeBox :width="container.attrs.width" :height="container.attrs.height">
          <EditRender />
        </iframeBox>
      </div>
    </section>
  </section>
</template>

<style lang="scss">
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
