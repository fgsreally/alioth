import type * as esbuild from 'esbuild-wasm'

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /^(http|https):\/\/[^\s/$.?#].[^\s]*$/ }, (args: any) => {
        return { path: args.path, namespace: 'alioth', external: true }
      })
      // handle root entry file
      build.onResolve({ filter: /(^index\.js$)/ }, () => {
        return { path: 'index.js', namespace: 'alioth' }
      })

      // handle rel paths in module :  includes ./ || ../
      build.onResolve({ filter: /^\.+\// }, (args: any) => {
        const url = new URL(args.path, `http://localhost:5173${args.resolveDir}/`)

        return {
          path: url.href,
          namespace: 'alioth',
        }
      })
      // handle main file
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        return {
          namespace: 'alioth',
          path: `http://localhost:5173${args.path}`,
        }
      })
    },
  }
}
