export function createDeepProxy(target: any, handler: {
  get?: (target: any, prop: string, receiver: any, fullPath: string) => any
  set?: (target: any, prop: string, value: any, receiver: any, fullPath: string) => any
}, path = '') {
  const recursiveHandler: ProxyHandler<any> = {
    get(target, prop: string, receiver) {
      const fullPath = path ? `${path}.${prop}` : prop
      const value = Reflect.get(target, prop, receiver)

      if (typeof value === 'object' && value !== null)
        return createDeepProxy(value, handler, fullPath)

      if (handler.get)
        return handler.get(target, prop, receiver, fullPath)

      return value
    },
    set(target, prop: string, value, receiver) {
      const fullPath = path ? `${path}.${prop}` : prop

      if (handler.set)
        return handler.set(target, prop, value, receiver, fullPath)

      return Reflect.set(target, prop, value, receiver)
    },
  }

  return new Proxy(target, recursiveHandler)
}
export const STATE_REGEX = /{{(.*)}}/
// array won't be filtered

// export function reflectData(
//   raw: any,
//   data: any,
//   { exclude = [], errorHandler = console.error }: { exclude?: string[]; errorHandler?: (error: Error, fullPath?: string) => any } = {},
// ) {
//   function defineProperty(obj: any, i: string, fullPath: string) {
//     const body = obj[i].replace(STATE_REGEX, (_, s) => {
//       return s
//     })

//     Object.defineProperty(obj, i, {
//       get() {
//         return new Function(...Object.keys(data.value), '_eh', `try{return ${body}}catch(e){return _eh(e,"${fullPath}")}`)(
//           ...Object.values(data.value), errorHandler,
//         )
//       },
//       // only work when using variable(not expression)
//       set(value) {
//         try {
//           new Function('_data', '_v', `_data.${body}=_v`)(
//             data.value, value,
//           )
//           return true
//         }
//         catch (e) {
//           errorHandler?.(e as Error)
//           return false
//         }
//       },
//     })
//   }

//   function traverse(obj: any, path?: string) {
//     for (const i in obj) {
//       if (exclude.includes(i))
//         continue

//       const fullPath = path ? `${path}.${i}` : i
//       if (typeof obj[i] === 'object' && obj[i])
//         traverse(obj[i], fullPath)

//       if (typeof obj[i] === 'string') {
//         if (STATE_REGEX.test(obj[i])) {

//         }
//       }
//     }

//     return obj
//   }

//   return traverse(cloneDeep(raw))
// }
