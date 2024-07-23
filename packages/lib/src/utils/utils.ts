export function isEqual(value: any, other: any): boolean {
  if (value === other)
    return true

  if (value == null || other == null || typeof value !== 'object' || typeof other !== 'object')
    return false

  const valueProps = Object.keys(value)
  const otherProps = Object.keys(other)

  if (valueProps.length !== otherProps.length)
    return false

  for (const prop of valueProps) {
    if (!otherProps.includes(prop) || !isEqual(value[prop], other[prop]))
      return false
  }

  return true
}

export function cloneDeep<T>(value: T): T {
  // Handle null, undefined, and primitive types
  if (value === null || typeof value !== 'object')
    return value

  // Handle Date
  if (value instanceof Date)
    return new Date(value.getTime()) as any

  // Handle Array
  if (Array.isArray(value)) {
    const arrCopy: any[] = []
    for (const item of value)
      arrCopy.push(cloneDeep(item))

    return arrCopy as any
  }

  // Handle Object
  const objCopy: { [key: string]: any } = {}
  for (const key in value) {
    // eslint-disable-next-line no-prototype-builtins
    if (value.hasOwnProperty(key))
      objCopy[key] = cloneDeep((value as { [key: string]: any })[key])
  }
  return objCopy as T
}
