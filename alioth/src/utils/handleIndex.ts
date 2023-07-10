const indexMap = {} as Record<string, number>

export function createIndex(key: string) {
  if (!indexMap[key])
    indexMap[key] = 0
  return `${key}${++indexMap[key]}`
}

export function parseNodeIndex(node: any) {
  node.index = createIndex(node.key)
  for (const child of node.children)
    parseNodeIndex(child)

  return node
}
