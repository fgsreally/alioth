import fs from 'fs'
import { resolve } from 'path'
import { parse } from 'es-module-lexer'
import fse from 'fs-extra'
import ts from 'typescript'
import gradient from 'gradient-string'

export function sideEffectImport(sideEffects?: string[]) {
  return sideEffects?.reduce((arr, cur) => {
    return `${arr}import '${cur}'\n`
  }, '')
}

export function colorUrl(url: string, colors: string[] = ['#e932f7', '#9d00ff']) {
  return gradient(colors)(url)
}

export function resolveQuery(queryUrl: string) {
  const query = new URLSearchParams(queryUrl)
  return query
}

export async function resolveAutoFile(
  filePath: string,
  newDependencies: string[],
  localDependencies: string[],
) {
  const source = await fs.promises.readFile(filePath, { encoding: 'utf-8' })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, exports] = parse(source)
  const dependences = exports.map(item => item.n)
  for (const i of newDependencies) {
    if (!dependences.includes(i) && localDependencies.includes(i))
      dependences.push(i)
  }
  const ret = dependences.reduce((arr, cur) => `${arr + cur},`, '')

  fse.writeFileSync(filePath, `export {${ret}}`)
}

export async function updatePageCode(
  filePath: string,
  sourcePage: {
    pageName: string
    code: string
  },
) {
  fse.writeFileSync(resolve(filePath, sourcePage.pageName), sourcePage.code)
}

export function getPath(p: string) {
  return resolve(process.cwd(), p)
}

export function analyseAutoDTS(filename: string) {
  const program = ts.createProgram([filename], {}) // 第二个参数是 compiler options，就是配置文件里的那些
  const ret: string[] = []
  const sourceFile = program.getSourceFile(filename) as ts.SourceFile

  ts.transform(sourceFile, [
    function (context) {
      return function (node) {
        return ts.visitNode(node, visit as ts.Visitor)
        function visit(node: any) {
          ts.isVariableDeclaration(node)
          if (ts.isVariableDeclaration(node))
            ret.push((node.name as any).escapedText)

          ts.visitEachChild(node, visit as ts.Visitor, context)
        }
      }
    },
  ])
  return ret
}
