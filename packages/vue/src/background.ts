import { defineComponent, h, onBeforeMount, onMounted, reactive, ref } from 'vue'

export const Background = defineComponent({
//   props: {
//     speed: {
//       type: Number,
//       default: 1,
//     },
//   },
  setup(props, { attrs, slots }) {
    const status = reactive({
      scale: 1,
      x: 0,
      y: 0,
    })
    let isDragging = false
    let previousX: number, previousY: number
    const el = ref<HTMLElement>(null as any)

    function mouseDown(event: MouseEvent) {
      if (event.button === 2) {
        isDragging = true
        previousX = event.clientX
        previousY = event.clientY
      }
    }
    function mouseMove(event: MouseEvent) {
      if (isDragging) {
        event.preventDefault()
        const deltaX = event.clientX - previousX
        const deltaY = event.clientY - previousY
        status.y += deltaY

        status.x += deltaX
        previousX = event.clientX
      }
    }
    function mouseUp(event: MouseEvent) {
      if (event.button === 2)
        isDragging = false
    }

    function wheel(event: WheelEvent) {
      event.preventDefault()

      const delta = event.deltaY || event.detail
      status.scale += delta
    }
    onMounted(() => {
      el.value.addEventListener('mousedown', mouseDown)
      el.value.addEventListener('wheel', wheel)
      document.addEventListener('mouseup', mouseUp)
      document.addEventListener('mousemove', mouseMove)
    })
    onBeforeMount(() => {
      el.value.removeEventListener('mousedown', mouseDown)
      el.value.removeEventListener('wheel', wheel)
      document.removeEventListener('mouseup', mouseUp)
      document.removeEventListener('mousemove', mouseMove)
    })

    return () => h('div', { ...attrs, ref: el }, slots.default!(status))
  },
})
