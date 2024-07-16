// import { describe, expect, it, vi } from 'vitest'
// import { pushGraphNodesInOrder } from '../src'

// describe('graph', () => {
//   it('exec serial', async () => {
//     const fn = vi.fn()
//     const nodes = [
//       { id: '1' },
//       { id: '2' },
//       { id: '3' },
//     ]
//     const edges = [
//       { from: '1', to: '2' },
//       { from: '2', to: '3' },
//       { from: '1', to: '3' },
//     ]

//     const tasks = {
//       1: fn,
//       2: async () => {
//         return fn()
//       },
//       3: fn,
//     }

//     const cache = {} as Record<string, any>

//     const { result, dependencies } = pushGraphNodesInOrder(nodes, edges, '1')

//     async function execTask(index: string) {
//       const args = []

//       if (cache[index])
//         return
//       for (const i in dependencies[index]) {
//         const dep = dependencies[index][i]

//         if (cache[dep] instanceof Promise)
//           args[i] = await cache[dep]

//         else
//           args[i] = cache[dep]
//       }

//       cache[index] = tasks[index](...args)
//     }

//     execTask('1')
//     execTask('2')
//     execTask('3')
//     expect(fn).toBeCalledTimes(2)
//     await Promise.resolve()
//     expect(fn).toBeCalledTimes(3)
//   })
// })
