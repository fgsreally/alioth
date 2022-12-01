export function getMulBlockSize(el: Element) {
  let minX = 0
  let minY = 0
  let maxX = 0
  let maxY = 0
  el.normalize()
  el.childNodes.forEach((element) => {
    if (!(element as Element).getBoundingClientRect)
      return
    const { top, left, width, height } = (
      element as Element
    ).getBoundingClientRect()
    if (width === 0 || height === 0)
      return

    minX = updateMinMax(minX, left, 'min')
    maxX = updateMinMax(maxX, left + width, 'max')
    minY = updateMinMax(minY, top, 'min')
    maxY = updateMinMax(maxY, top + height, 'max')
  })
  return {
    width: maxX - minX,
    height: maxY - minY,
  }
}

function updateMinMax(o: number, n: number, type = 'min') {
  if (!o)
    return n
  if (type === 'min') {
    if (n < o)
      return n
    return o
  }
  else {
    if (n > o)
      return n
    return o
  }
}
