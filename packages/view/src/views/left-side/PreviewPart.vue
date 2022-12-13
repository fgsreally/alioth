<script setup lang="ts">
import type { defaultRegisterComponent } from '@alioth/engine'
import { useMenuDragger } from '@alioth/engine'
import { nanoid } from 'nanoid'
import { inject } from 'vue'
import { instance } from '@/engine/init'
import { PreviewBlock } from '@/components/Render'
import { emitEvent } from '@/utils/emitter'
import { addBlock } from '@/engine/block'
import type { YuhengRegister } from '@/engine'
import { YUHENG_CONFIG } from '@/config'
const { compList, type } = defineProps<{
  compList: Array<defaultRegisterComponent>
  type: string
}>()

const container = inject('container')

const { dragstart, dragend } = useMenuDragger(container as any, {
  drop: ({ e, module }: any) => {
    (YUHENG_CONFIG.addBlock)(module, e)
    emitEvent('import-end')
  },
})
</script>

<template>
  <section class="preview-section">
    <el-scrollbar style="height: 500px">
      <el-badge
        v-for="(module, i) in compList"
        :key="i"
        :value="module.key"
        type="primary"
        class="preview-section__badge"
      >
        <div
          class="preview-section__box"
          draggable
          @dragend="dragend"
          @dragstart.stop="
            (e) => {
              dragstart(e, module as any);
              emitEvent('import-start')
            }
          "
        >
          <PreviewBlock
            :value="module"
            :type="type"
            class="preview-section__block"
          />
        </div>
      </el-badge>
    </el-scrollbar>
  </section>
</template>

<style scoped>
.preview-section {
  width: 100%;
}
.preview-section__block {
  pointer-events: none;
}

.preview-section__box {
  margin-left: 12px;
  width: 100px;
  height: 50px;
  border: 3px solid;
  border-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%) 1;
  display: flex;
  user-select: all;
  /* background-color: white; */
  justify-content: center;
  align-items: center;
}
.preview-section__badge {
  margin-top: 10px;
  user-select: none;
}
</style>
