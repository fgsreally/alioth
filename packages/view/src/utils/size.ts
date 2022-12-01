import { getBreakpoint } from './style'
import { instance } from '@/engine/init'

export function responseScreen() {
  document.addEventListener('mousedown', (e) => {
    if (e.button === 1) {
      e.preventDefault()

      const initX = e.clientX
      const { width } = instance.container
      function move(e: MouseEvent) {
        const offsetX = e.clientX - initX
        if (
          width + offsetX > instance.container.wLimit[0]
          && width + offsetX < instance.container.wLimit[1]
        )
          instance.container.width = width + offsetX

        const mode = getBreakpoint(instance.container.width)
        instance.container.mode = mode
      }

      function up() {
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    }
  })
}
