<script setup lang="ts">
import { useV } from 'phecda-vue'
import { RenderBlock } from '@/components/base/renderBlock'
import { DragModel } from '@/models/drag'
const { compList, type } = defineProps<{
  compList: any[]
  type: string
}>()
const { dragStart, dragEnd } = useV(DragModel)

function dragstart(module: any) {
  console.log(module)
  dragStart(module)
}

function dragend() {
  dragEnd()
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
      <p class="preview-text">
        {{ module.key }}
      </p>
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
