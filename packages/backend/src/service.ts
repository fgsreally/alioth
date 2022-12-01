import { loadConfigFromFile, } from "vite";
import shell from "shelljs";
import { remoteBundle } from "./plugin";

export type LoadPkg = {
  type: "JS";
  category: "component" | "module",
  url: string; //for remote
  isShare?: boolean;
  key: string;
  imports: string,
  version?: string,
  label?: string;
} | {
  type: "assets",
  isShare?: boolean;
  url: string, version?: string,
  label?: string;
};

export function createChunk(pkgs: { [key in string]: LoadPkg[] }) {
  let ret: { [key in string]: string } = {}
  let moduleSet: Set<string> = new Set()
  for (let i in pkgs) {
    let code = "";

    pkgs[i].forEach((item) => {
      if (item.type === "JS") {
        code += `import {${item.imports} as ${item.key}} from "${item.isShare ? "view:" : ""}${item.url}"\n`
        if (item.category === 'component') code += `export {${item.key}}\n`;
        if (item.category === 'module') {
          let key = item.key.split('_')[0]
          if (!moduleSet.has(key)) {
            moduleSet.add(key)
            let moduleCode = pkgs[i].filter((j: any) => j.category === 'module' && j.key.split('_')[0] === key).reduce((arr, cur: any) => {
              return arr + `${cur.key.split("_")[1]}:${cur.key},`
            }, "")
            code += `export let ${key}={${moduleCode}}`

          }
        }

      };
      if (item.type === "assets") { code += `import "${item.isShare ? "view:" : ""}${item.url}"\n`; }
    });
    pkgs[i].filter((item: any) => item.category === 'component')

    ret[i] = code
  }
  return ret
}

export async function buildBundleConfig(
) {
  let { config } = (await loadConfigFromFile({
    command: "build",
    mode: "production",
  })) as any;

  if (!config.plugins) config.plugins = []
  //初始化插件
  config.plugins.push(remoteBundle())
  if (!config.build) config.build = {};


  //初始化命名
  if (!config.build.rollupOptions) {
    config.build.rollupOptions = {}
  }
  if (!config.build.rollupOptions.output) {
    config.build.rollupOptions.output = {} 
  }
  (config.build.rollupOptions.output as any).chunkFileNames = "[name].js";
  (config.build.rollupOptions.output as any).assetFileNames = "[name][extname]";

  return config
}

export function addLocalPkg(pkg: string, cmd: string = "pnpm i") {
  return shell.exec(`${cmd} ${pkg}`,)
}
