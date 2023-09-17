export function getQuery(key: string) {
  return new URLSearchParams(location.search).get(key)
}
export interface MouseOptions {
  move?: (e: MouseEvent) => void
  up?: (e: MouseEvent) => void
}
// 拖拽
export function draggable(
  opts: MouseOptions,
  dom: Node | string | Window = window,
) {
  let element: any

  const moveEvent = (e: MouseEvent) => {
    opts.move?.(e)
  }
  const upEvent = (e: MouseEvent) => {
    opts.up?.(e)
    element.removeEventListener('mousemove', moveEvent)
    element.removeEventListener('mouseup', upEvent)
  }
  if (typeof dom === 'string')
    element = document.querySelector(dom)

  else
    element = dom

  element.addEventListener('mousemove', moveEvent as EventListener)
  element.addEventListener('mouseup', upEvent as EventListener)
}
