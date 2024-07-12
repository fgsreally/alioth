/* eslint-disable no-new-func */
import { UnwrapNestedRefs } from 'vue'
export const STATE_REGEX = /{{(.*)}}/
// array won't be filtered

export function filter(
  raw: any,
  data: UnwrapNestedRefs<any>,
  { exclude = [], errorHandler = console.error }: { exclude?: string[]; errorHandler?: (error: Error, errorPath?: string) => any } = {},
) {
  function traverse(obj: any, path?: string) {
    for (const i in obj) {
      if (exclude.includes(i))
        continue

      const errorPath = path ? `${path}.${i}` : i
      if (typeof obj[i] === 'object' && obj[i])
        traverse(obj[i], errorPath)

      if (typeof obj[i] === 'string') {
        if (STATE_REGEX.test(obj[i])) {
          const body = obj[i].replace(STATE_REGEX, (_, s) => {
            return s
          })

          Object.defineProperty(obj, i, {
            get() {
              return new Function(...Object.keys(data.value), '_eh', `try{return ${body}}catch(e){return _eh(e,"${errorPath}")}`)(
                ...Object.values(data.value), errorHandler,
              )
            },
            // only work when using variable(not expression)
            set(value) {
              try {
                new Function('_data', '_v', `_data.${body}=_v`)(
                  data.value, value,
                )
                return true
              }
              catch (e) {
                errorHandler?.(e as Error)
                return false
              }
            },
          })
        }
      }
    }

    return obj
  }

  return traverse(raw)
}
