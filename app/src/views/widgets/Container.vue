<script setup lang="ts">
import { emitter, useV } from 'phecda-vue'
import { GridLayout } from 'grid-layout-plus'
import { layout } from '../test'
import { useDragSingle } from '@/composables/drag'
import type { AliothAttrs, RootAttrs } from '@/engine/types'
import { DocModel } from '@/models/doc'
import { createIndex } from '@/utils/handleIndex'
const props = defineProps<RootAttrs>()
let index = 0
const colNum = ref(12)
const { doc, activePage } = $(useV<typeof DocModel<AliothAttrs>>(DocModel))
function addBlock(module: any, e: MouseEvent) {
  const { key, label, meta } = module
  const { hoverNode, root } = doc
  // const index = createIndex(key)
  const parent = hoverNode || activePage
  const block = doc.createNode(Object.assign({
    slot: 'default',
    key,
    index,
    label,
    propsData: {
    },
    level: parent === root ? 1 : parent.attrs.level + 1,
    top: parent === activePage ? e.offsetY : 0,
    left: parent === activePage ? e.offsetX : 0,
  }, meta?.init || {}))
  // interval.setState(index, block.attrs.propsData)
  parent.insert(block)
  emitter.emit('alioth:node-action', null)
  layout.push({
    x: (layout.length * 2) % (colNum.value || 12),
    y: layout.length + (colNum.value || 12), // puts it at the bottom
    w: 2,
    h: 2,
    i: `${index++}`,
  })
}
const containerCanvas = useDragSingle(addBlock)
</script>

<template>
  <section
    ref="containerCanvas"
    class="al-window"
    :style="{
      width: `${props.width}px`,
      height: `${props.height}px`,

    }"
    @click.stop.self="doc.cancel()"

    @mouseup.stop
  >
    <!-- <div
      ref="containerCanvas" class="editor__canvas " :class="props.isGrid ? 'gridHelper' : ''" :style="`--radius:${props.radius / 2};--fontSize:${props.fontSize};
            --gridGap:${props.gridGap / 2};
            --gridLen:${(props.width - props.margin * 2) / props.gridNum};
            --bkColor:${props.backgroundColor};
            --width:${props.width};
            --height:${props.height};
            --margin:${props.margin};
            --gridColor:${props.gridColor};

      `
      "
      @click.stop.self="doc.cancel()"
    >
      <slot />
    </div> -->
    <GridLayout
      v-model:layout="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="props.mode !== 'render'"
      :is-resizable="props.mode !== 'render'"
      vertical-compact
      use-css-transforms
    >
      <slot />
    </GridLayout>
  </section>
</template>
