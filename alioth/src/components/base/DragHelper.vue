<script lang="ts" setup>
import { useDrag } from 'alioth-lib'
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
const { x, y, isActive, fix } = defineProps<{ x: number; y: number; isActive: boolean; fix: boolean; label: string }>()
const style = reactive({ x, y })

const arrowIcon = {
  left: ArrowRightBold,
  right: ArrowLeftBold,

}

const transition = computed(() => {
  let transition = ''
  const w = window.innerWidth
  const h = window.innerHeight
  transition += style.x <= (w / 2) ? 'left' : 'right'
  // transition += style.y <= (h / 2) ? 'up' : 'down'

  return transition
})

const arrowPosition = computed(() => {
  if (transition.value === 'left')
    return { top: `${style.y}px`, left: '100px' }

  else
    return { top: `${style.y}px`, right: '100px' }
})

function startMove(e: MouseEvent) {
  if (fix)
    return
  const initOffsetX = e.clientX
  const initOffsetY = e.clientY
  const { x: initX, y: initY } = style
  useDrag({
    move(e) {
      const x = e.clientX
      const y = e.clientY
      style.x = initX + x - initOffsetX
      style.y = initY + y - initOffsetY
    },
  })
}
</script>

<template>
  <Transition :name="transition" mode="out-in">
    <div
      v-if="isActive" :style="{
        top: `${style.y}px`, left: `${style.x}px`,
      }" style="position: fixed;z-index: 10;user-select: none;will-change:auto" @mousedown="startMove"
    >
      <el-card shadow="always" class="l-card">
        <p class="drag-wrapper__label">
          {{ label }}
        </p>
        <slot />
      </el-card>
    </div>
    <el-button
      v-else :disabled="false" :style="arrowPosition"
      style="position: absolute;z-index: 10;user-select: none;will-change:auto;border-radius: 50%;width:50px;height: 50px;"
    >
      <el-icon>
        <component :is="arrowIcon[transition]" />
      </el-icon>
    </el-button>
  </Transition>
</template>
