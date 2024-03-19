// fork from https://github.com/labring/laf
import { resolve } from 'path'
import { NodePackageDeclarations, PackageDeclaration } from './declartion'

/**
 * @internal 内部使用
 */
export async function handlePackageTypings(packageName: string, nodeModulesRoot = resolve(process.cwd(), 'node_modules')) {
  if (packageName === '@types/node') {
    const pkr = new NodePackageDeclarations(nodeModulesRoot)
    const rets = []
    for (const name of NodePackageDeclarations.NODE_PACKAGES) {
      const r = await pkr.getNodeBuiltinPackage(name)
      rets.push(r)
    }

    return rets
  }

  if (NodePackageDeclarations.NODE_PACKAGES.includes(packageName)) {
    const pkr = new NodePackageDeclarations(nodeModulesRoot)
    const r = await pkr.getNodeBuiltinPackage(packageName)

    return [r]
  }

  const pkd = new PackageDeclaration(packageName, nodeModulesRoot)
  await pkd.load()
  return pkd.declarations
}
