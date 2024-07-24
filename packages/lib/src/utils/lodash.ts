// replace lodash for size
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

export function get(object: any, path: string | string[], defaultValue?: any) {
  // 如果路径是字符串，则用点分隔符拆分成数组
  if (typeof path === 'string')
    path = path.split('.')

  // 遍历路径数组
  for (let i = 0; i < path.length; i++) {
    if (object == null)
      return defaultValue

    object = object[path[i]]
  }

  // 如果最终的值是 undefined，则返回默认值
  return object === undefined ? defaultValue : object
}

/**
 * 在对象中设置嵌套属性值
 *
 * @param {Object} object - 要修改的对象
 * @param {Array|string} path - 属性路径，可以是数组或用点分隔的字符串
 * @param {*} value - 要设置的值
 * @returns {Object} - 返回修改后的对象
 */
export function set(object: any, path: string | string[], value: any) {
  // 如果路径是字符串，则用点分隔符拆分成数组
  if (typeof path === 'string')
    path = path.split('.')

  // 保存对原始对象的引用
  let current = object

  // 遍历路径数组
  for (let i = 0; i < path.length; i++) {
    const key = path[i]

    // 如果是最后一个路径部分，设置值
    if (i === path.length - 1) {
      current[key] = value
    }
    else {
      // 如果路径不存在，创建一个新的对象
      if (current[key] == null)
        current[key] = {}

      // 移动到下一个嵌套对象
      current = current[key]
    }
  }

  return object
}
