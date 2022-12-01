import fs from "fs";
import { parse } from "es-module-lexer";
import fse from "fs-extra";
import { resolve } from "path";
export function resolveQuery(queryUrl: string) {
  let query = new URLSearchParams(queryUrl);
  return query;
}

export async function resolveAutoFile(
  filePath: string,
  newDependences: string[]
) {
  const source = await fs.promises.readFile(filePath, { encoding: "utf-8" });
  const [_, exports] = parse(source);
  let dependences = exports.map((item) => item.n);
  for (let i of newDependences) {
    if (!dependences.includes(i)) {
      dependences.push(i);
    }
  }
  let ret = dependences.reduce((arr, cur) => arr + cur + ",", "");

  fse.writeFileSync(filePath, `export {${ret}}`);
}

export async function updatePageCode(
  filePath: string,
  sourcePage: {
    pageName: string;
    code: string;
  }
) {
  fse.writeFileSync(resolve(filePath, sourcePage.pageName), sourcePage.code);
}

export function getPath(p: string) {
  return resolve(process.cwd(), p);
}
