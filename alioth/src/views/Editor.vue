<!-- eslint-disable vue/no-extra-parens -->
<script setup lang="ts">
import { NameSpaceStore, iframeBox } from 'alioth-lib'
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
import Header from './header/Header.vue'
import Editable from '@/components/base/Editable.vue'
import { DocModel } from '@/models/doc'
import Zones from '@/views/zones/index.vue'
import IconClose from '~icons/gg/close'
import type { RootSchema } from '@/engine/schema'
const { container, activeDoc } = $(useV<typeof DocModel<RootSchema>>(DocModel))
const { remove, docs, add, active, activeId } = $(useV(DocModel))
</script>

<template>
  <Zones />
  <Header />
  <section class="editor__box ">
    <Transition v-if="activeDoc" appear name="left">
      <div v-show="!container.attrs.isFull" class="editor__aside left  border-ol b-r-2 b-r-solid ">
        <Tabs :default-value="Object.keys(NameSpaceStore)[0]">
          <TabList>
            <TabTrigger v-for="(_, i) in NameSpaceStore" :key="i" :value="(i as string)">
              <button l-btn-n>
                {{ i }}
              </button>
            </TabTrigger>
            <TabIndicator class="bg-p h-1" />
          </TabList>
          <TabContent v-for="(item, i) in NameSpaceStore" :key="i" :value="(i as string)">
            <PreviewPart :comp-list="Array.from(item.widgetMap).map((item: any) => item[1])" type="text" />
          </TabContent>
        </Tabs>
      </div>
    </Transition>

    <section class="editor_box">
      <div m-t-10 text="sm" font="600" relative>
        <div flex w-full h-8 color-font-t>
          <div
            v-for="(item) in docs" :key="item.id" max-w-20 font="500" l-flex cursor-pointer border-1 border-solid
            border-font-t relative :class="{
              'border-b-none border-p color-on-p': item.id === activeId,

            }" @click="active(item.id)"
          >
            <Editable v-model="item.id" class="m-x-2" />
            <IconClose
              v-if="item.id === activeId && docs.length > 1" absolute right-1 w-3 h-3 rd-2 hover:bg-on-b color-p
              @click.stop="remove(item.id)"
            />
          </div>

          <div
            i-lucide-plus-square absolute color-font-t hover:color-p cursor-pointer top="10px" left="-30px"
            @click="add('未命名')"
          />
        </div>
        <div v-if="activeDoc">
          <iframeBox :width="container.attrs.width" :height="container.attrs.height">
            <EditRender />
          </iframeBox>
        </div>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
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

.active::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 10%;
  height: 10px;
  background-color: red;
}
</style>
