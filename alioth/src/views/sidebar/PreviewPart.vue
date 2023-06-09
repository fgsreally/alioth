<script setup lang="ts">
import type { defaultRegisterComponent } from 'alioth-lib'
import { emitter, useV } from 'phecda-vue'
import { RenderBlock } from '@/components/renderBlock'
// import CompMetaTable from '@/components/wrappers/CompMetaTable.vue'
const { compList, type } = defineProps<{
  compList: Array<defaultRegisterComponent>
  type: string
}>()

function dragstart(module: any) {
  emitter.emit('dragstart', module)
}

function dragend() {
  emitter.emit('dragend', null)
}
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
              dragstart(module);
            }
          "
        >
          <RenderBlock
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
  /* overflow: hidden; */
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
