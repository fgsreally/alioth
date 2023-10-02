<script setup lang="ts">
import { useV } from 'phecda-vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  width: number
  height: number
  fontSize: number
  backgroundColor: string
  gridColor: string
  gridNum: number
  gridGap: number
  margin: number
  radius: number
  isContainer: boolean
  isFull: boolean
  isGrid: boolean
  wLimit: [number, number]
  hLimit: [number, number]
}>()
const { doc, activePage } = useV(__PHECDA__.doc)
function addBlock(module: any, e: MouseEvent) {
  const { key, label, meta } = module
  const { hoverNode, root } = doc.value
  const parent = hoverNode || activePage.value
  const block = doc.value.createNode(Object.assign({
    slot: 'default',
    key,
    label,
    propsData: {
    },
    level: parent === activePage.value ? 1 : parent.attrs.level + 1,
    top: parent === activePage.value ? e.offsetY : 0,
    left: parent === activePage.value ? e.offsetX : 0,
  }, meta?.init || {}))
  parent.insert(block)
}

const dom = ref<HTMLElement>(null as any)

const { add, del } = useV(__PHECDA__.drag)

onMounted(() => {
  add(dom.value, addBlock)
})
onBeforeUnmount(() => {
  del(dom.value)
})
</script>

<template>
  <section class="al-window">
    <div
      ref="dom" class="editor__canvas " :class="props.isGrid ? 'gridHelper' : ''" :style="`--radius:${props.radius / 2};--fontSize:${props.fontSize};
            --gridGap:${props.gridGap / 2};
            --gridLen:${(props.width - props.margin * 2) / props.gridNum};
            --bkColor:${props.backgroundColor};
            --width:${props.width};
            --height:${props.height};
            --margin:${props.margin};
            --gridColor:${props.gridColor};
      `

      "
      @click.self.stop="doc.cancel()"
    >
      <slot />
    </div>
  </section>
</template>

<style scoped>
.editor__canvas {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  position: relative;

  width: calc(var(--width) * 1px);
  height: calc(var(--height) * 1px);
  position: relative;
  z-index: 0;
  background-color: var(--bkColor);
}

.editor__canvas.gridHelper {
  background-image: -webkit-linear-gradient(
      top,
      transparent 9px,
      rgb(0, 0, 5, 0.153) 10px
    ),
    -webkit-linear-gradient(left, transparent 9px, rgba(0, 0, 5, 0.153) 10px);
  background-size: 10px 10px;
}
.editor__canvas.gridHelper::before {
  content: "";
  border-radius: calc(var(--radius) * 1px);
  overflow: hidden;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 calc(var(--margin) * 1px);
  position: absolute;
  z-index: 1;
  opacity: 0.5;
  pointer-events: none;
  background: -webkit-linear-gradient(
    left,
    transparent calc(var(--gridGap) * 1px - 1px),
    var(--gridColor) calc(var(--gridGap) * 1px),
    var(--gridColor) calc((var(--gridLen) - var(--gridGap)) * 1px),
    transparent calc((var(--gridLen) - var(--gridGap)) * 1px + 1px)
  );
  background-size: calc(var(--gridLen) * 1px);
}
</style>
