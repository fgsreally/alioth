<script setup lang="ts">
import { getWidget, interval } from 'alioth-lib'
import { emitter, useR, useV } from 'phecda-vue'
// import { debounce } from 'lodash-es'
import { RenderBlock } from '@/components/base/renderBlock'

import { useDragSingle } from '@/composables/drag'
// import { createReplaceBlock } from '@/utils/replacement'
import type { NodeSchema, RootSchema } from '@/engine/schema'
import { DocModel } from '@/models/doc'
import { createIndex } from '@/utils/handleIndex'
const { activeDoc, container } = $(useV<typeof DocModel<NodeSchema | RootSchema>>(DocModel))
function addBlock(module: any, e: MouseEvent) {
  emitter.emit('block-action', null)

  const { key, label, meta } = module
  const { hover, root } = activeDoc
  const index = createIndex(key)
  const parent = hover || root
  const block = activeDoc.createNode(key, Object.assign({
    slot: 'default',
    key,
    index,
    label,
    propsData: {},
    level: parent === root ? 1 : parent.attrs.level + 1,
    top: { value: parent === root ? e.offsetY : 0, size: 'px' },
    left: { value: parent === root ? e.offsetX : 0, size: 'px' },
  }, meta?.init || {}))
  interval.setState(index, block.attrs.propsData)
  parent.insert(block)
}

const containerCanvas = useDragSingle(addBlock)
</script>

<template>
  <div class="editor__container">
    <div
      ref="containerCanvas" class="editor__canvas" :class="container.attrs.isGrid ? 'gridHelper' : ''" :style="`--radius:${container.attrs.radius / 2};--fontSize:${container.attrs.fontSize};
            --gridGap:${container.attrs.gridGap / 2};
            --gridLen:${(container.attrs.width - container.attrs.margin * 2) / container.attrs.gridNum};
            --bkColor:${container.attrs.backgroundColor};
            --width:${container.attrs.width};
            --height:${container.attrs.height};
            --margin:${container.attrs.margin};
            --gridColor:${container.attrs.gridColor};
      `

      " @mousedown.self.left="activeDoc.cancel()"
    >
      <RenderBlock
        v-for="(item) in container.children" :key="item.id" :node="item" type="edit"
        :value="getWidget(item.attrs.key)"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/style/editor.scss';
</style>
