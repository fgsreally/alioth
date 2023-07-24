<script setup lang="ts">
import type { defaultRegisterComponent } from 'alioth-lib'
import { emitter, useV } from 'phecda-vue'
import { RenderBlock } from '@/components/base/renderBlock'
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
  <section class="w-full overflow-y-scroll m-4 max-h-[85vh] preview-section__box" :class="type">
    <div
      v-for="(module, i) in compList"
      :key="i"

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
  </section>
</template>

<style lang="scss" scoped>
.preview-section {
  width: 100%;
}
.preview-section__block {
  pointer-events: none;
}
.preview-section__box{
  &.text{
    display: grid;
  grid-template-columns: 1fr 1fr; /* 两列等宽 */
  grid-gap: 10px; /* 列间距 */
  }

}
.preview-section__badge {
  margin-top: 10px;
  user-select: none;
}
</style>
@/components/base/renderBlock
