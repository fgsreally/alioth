import { useR } from 'phecda-vue'
import { getBreakpoint } from './style'
import { ContainerState } from '@/store/container'

export function responseScreen() {
  function down(e: MouseEvent) {
    if (e.button === 1) {
      e.preventDefault()

      const state = useR(ContainerState)
      const initX = e.clientX
      const { width } = state
      function move(e: MouseEvent) {
        const offsetX = e.clientX - initX
        if (
          width + offsetX > state.wLimit[0]
          && width + offsetX < state.wLimit[1]
        )
          state.width = width + offsetX

        const mode = getBreakpoint(state.width)

        if (state.mode !== mode)
          state.mode = mode
      }

      function up() {
        window.removeEventListener('mousemove', move)
        window.removeEventListener('mouseup', up)
      }
      window.addEventListener('mousemove', move)
      window.addEventListener('mouseup', up)
    }
  }
  window.addEventListener('mousedown', down)

  onUnmounted(() => {
    window.removeEventListener('mousedown', down)
  })
}
