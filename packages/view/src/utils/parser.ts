// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import traverse from '@babel/traverse'
import { COMPUTE_RE } from '@alioth/engine'
import * as parser from '@babel/parser'
import MagicString from 'magic-string'
import { walkAST } from 'ast-walker-scope'
export function parseComputed(obj: any, exclude: string[] = []) {
  for (const i in obj) {
    if (Array.isArray(obj[i]) || exclude.includes(i))
      continue
    if (typeof obj[i] === 'object' && obj[i])
      parseComputed(obj[i])

    if (typeof obj[i] === 'string' && COMPUTE_RE.test(obj[i])) {
      const body = obj[i].match(COMPUTE_RE)[1]
      const source = new MagicString(body)
      const ast = parser.parse(body, {
        // parse in strict mode and allow module declarations
        sourceType: 'module',
      })
      walkAST(ast, {
        enter(node) {
          if (node.type === 'Identifier')
            source.appendLeft(node.start as number, 'state.')
        },
      })

      // const ast = parser.parse(body, {
      //   // parse in strict mode and allow module declarations
      //   sourceType: "module",
      // });
      // traverse(ast, {
      //   Identifier(path: any) {
      //     const { node } = path

      //     if (node.type === "Identifier") {
      //       source.appendLeft(node.start as number, "state.");
      //     }
      //   }
      // })
      obj[i] = `{{${source.toString()}}}`
    }
  }
}

// export function isContainState(str: string) {
//   let ret = false;
//   const ast = parser.parse(str, {
//     // parse in strict mode and allow module declarations
//     sourceType: "module",
//   });
//   walkAST(ast, {
//     enter(node) {
//       if (node.type === "Identifier" && node.name === "state") {
//         {
//           ret = true;
//           this.skip();
//         }
//       }
//     },
//   });
//   return ret;
// }

export function analyseService(str: string) {
  const dep: Set<string> = new Set()
  const ast = parser.parse(str, {
    // parse in strict mode and allow module declarations
    sourceType: 'module',
  })
  traverse(ast, {
    Identifier(path: any) {
      const { node, scope } = path
      if (/[\s|;|\(|\[|\{|,]/.test(str[node.start as number - 1]) && !(node.name in scope.bindings))
        dep.add(node.name)
    },
  })

  return [...dep]
}
