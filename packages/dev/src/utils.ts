import fs from 'fs'
import { resolve } from 'path'
import { parse } from 'es-module-lexer'
import fse from 'fs-extra'
export function resolveQuery(queryUrl: string) {
  const query = new URLSearchParams(queryUrl)
  return query
}

export async function resolveAutoFile(
  filePath: string,
  newDependences: string[],
) {
  const source = await fs.promises.readFile(filePath, { encoding: 'utf-8' })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, exports] = parse(source)
  const dependences = exports.map(item => item.n)
  for (const i of newDependences) {
    if (!dependences.includes(i))
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
