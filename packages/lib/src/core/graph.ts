interface Node {
  id: string
}

interface Edge {
  from: string
  to: string
}

export function hasCycleInGraph(nodes: Node[], edges: Edge[]) {
  const graph = {} as Record<string, string[]>
  nodes.forEach(node => graph[node.id] = [])

  edges.forEach((edge) => {
    graph[edge.from].push(edge.to)
  })

  const visited = {} as Record<string, boolean>
  const isInStack = {} as Record<string, boolean>

  function isCyclic(nodeId: string) {
    if (!visited[nodeId]) {
      visited[nodeId] = true
      isInStack[nodeId] = true

      for (const neighbor of graph[nodeId]) {
        if (!visited[neighbor] && isCyclic(neighbor))
          return true
        else if (isInStack[neighbor])
          return true
      }
    }

    isInStack[nodeId] = false
    return false
  }

  for (const nodeId in graph) {
    if (isCyclic(nodeId))
      return true
  }

  return false
}

export function findGraphPaths(nodes: Node[], edges: Edge[], startNodeId: string) {
  const graph = {} as Record<string, string[]>
  nodes.forEach(node => graph[node.id] = [])

  edges.forEach((edge) => {
    graph[edge.from].push(edge.to)
  })

  const paths = [] as (string[])[]

  function dfs(nodeId: string, path: string[]) {
    path.push(nodeId)

    if (graph[nodeId].length === 0) {
      paths.push([...path])
    }
    else {
      for (const neighbor of graph[nodeId])
        dfs(neighbor, path)
    }

    path.pop()
  }

  dfs(startNodeId, [])

  return paths
}

// const nodes = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 },

// ]

// const edges = [
//   { from: 1, to: 2 },
//   { from: 2, to: 3 },
//   // { from: 1, to: 3 },
//   { from: 3, to: 1 },

// ]

// console.log(findPaths(nodes, edges, 1),
// )

// console.log(hasCycle(nodes, edges))

export function pushGraphNodesInOrder(nodes: Node[], edges: Edge[], startId: string) {
  const dependencies = {} as Record<string, string[]>
  const visited = {} as Record<string, boolean>
  const result = [] as string[]

  nodes.forEach((node) => {
    const nodeDependencies = edges
      .filter(edge => edge.to === node.id)
      .map(edge => edge.from)
    dependencies[node.id] = nodeDependencies
    visited[node.id] = false
  })

  function dfs(nodeId: string) {
    visited[nodeId] = true

    for (const i in dependencies) {
      if (!visited[i] && dependencies[i].every(item => visited[item] === true))
        dfs(i)
    }

    result.unshift(nodeId)
  }

  dfs(startId) // Assume the first node is the start node

  return { result, dependencies }
}
