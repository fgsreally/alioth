<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import { getComponent } from '@alioth/engine'
import { YUHENG_CONFIG } from '../config'
import Vslot from './right-side/VSlot.vue'
import Api from './right-side/Api.vue'
import Header from './header/Header.vue'
import PreviewPart from './left-side/PreviewPart.vue'
import State from './right-side/State.vue'
import Props from './right-side/Props.vue'
import Property from './right-side/Property.vue'
import Tree from './left-side/EditorTree.vue'
import VState from './right-side/VState.vue'
import { changeStyleValue, changeStyleVar } from '@/utils/style'
import { responseScreen } from '@/utils/size'
import StyleController from '@/components/helper/StyleControl.vue'
import { instance } from '@/engine/init'
import { initEvent } from '@/utils/emitter'
import { getEditorStore } from '@/engine/register'
import { PreviewBlock } from '@/components/Render'
import { usePageState } from '@/store/page'
import { updatePageCode } from '@/utils/request'
import { getCode } from '@/engine/code'
const drawer = ref(false)
const isShowTree = ref(false)
const activeTab = ref('LocalComponent')
const pageState = usePageState()
responseScreen()
initEvent()

function clickTab(n: any) {
  if (n.props.label === '数据树')
    isShowTree.value = true
  else
    isShowTree.value = false
}

document.addEventListener('keydown', (e) => {
  if (e.altKey)
    drawer.value = true
})

watch(
  instance.container,
  (n) => {
    changeStyleValue('fontSize', `${n.fontSize}px`)
    changeStyleVar('gridGap', n.gridGap / 2)
    changeStyleVar('radius', n.radius / 2)
    changeStyleVar('gridLen', (n.width - n.margin * 2) / n.gridNum)
    changeStyleVar('bkColor', n.backgroundColor)
    changeStyleVar('width', n.width)
    changeStyleVar('height', n.height)
    changeStyleVar('margin', n.margin)
    changeStyleVar('gridColor', n.gridColor)
  },
  {
    immediate: true,
  },
)

watch(
  () => instance.data,
  () => {
    pageState.curPage && updatePageCode(pageState.curPage, getCode())
  },
)
const container = ref<HTMLElement | null>(null)
provide('container', container)
</script>

<template>
  <Header />
  <el-row class="editor__box">
    <Transition appear>
      <div v-show="!instance.container.isFull" class="editor__aside left">
        <el-tabs v-model="activeTab" @tabClick="clickTab">
          <!-- <el-tab-pane label="组件" name="LocalComponent">
            <PreviewPart
              :comp-list="
                Array.from(serviceStore.componentList).map((item:any) => item[1])
              "
              type="preview"
              container-width="210px"
              container-height="310px"
              :width="180"
              :height="280"
            />
          </el-tab-pane>
          <el-tab-pane label="附加组件" name="addonComponent">
            <PreviewPart
              :comp-list="Array.from(libStore.componentList).map((item:any) => item[1])"
              type="text"
            />
          </el-tab-pane> -->

          <el-tab-pane v-for="(item, i) in YUHENG_CONFIG.previewConfig" :key="i" :label="item.label" :name="item.key">
            <PreviewPart
              :comp-list="Array.from(getEditorStore(item.key).componentList).map((item:any) => item[1])"
              :type="item.type"
            />
          </el-tab-pane>
          <el-tab-pane label="数据树" name="NodeTree">
            <Tree v-if="isShowTree" :data="instance.data.blocks" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </Transition>
    <el-main>
      <el-scrollbar style="height: 95vh; width: 100%">
        <div class="editor-container">
          <StyleController />
          <div
            ref="container"
            class="editor-container-canvas-content"
            :class="instance.container.isGrid ? 'grid' : ''"
            @mousedown.self.left="instance.$cancel()"
          >
            <PreviewBlock
              v-for="(item) in instance.data.blocks"
              :key="item.uuid"
              :value="getComponent(item.key) as any"
              :block="item"
              type="edit"
            />
            <!-- <RenderBlock :data="instance.data.blocks" type="edit"></RenderBlock> -->
          </div>
        </div>
      </el-scrollbar>
    </el-main>
    <Transition appear>
      <div v-show="!instance.container.isFull" class="editor__aside right">
        <State />
        <Props v-if="instance.clickBlock" />
        <VState v-if="instance.clickBlock" type="vModel" label="model" />
        <VState v-if="instance.clickBlock" type="vIf" label="if" />
        <Vslot v-if="instance.clickBlock" />
        <Property v-if="instance.clickBlock" />
      </div>
    </Transition>

    <el-drawer v-model="drawer" title="右侧Service">
      <Api />
    </el-drawer>
  </el-row>
</template>

<style lang="scss">
@import "@/style/editor.scss";

.editor__box {
  background-color: #e0c3fc;
}
.el-main {
  --el-main-padding: 0;
}

.editor__aside {
  background-color: #d4a4fb;
  &.right {
    overflow-x: hidden;
    width: 350px;
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
  }
}
</style>
