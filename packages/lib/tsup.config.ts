import type { Options } from 'tsup'

export const tsup: Options = {

  entry: ['src/index.ts', 'src/server.ts'],
  format: ['esm'],
  dts: true,
  splitting: false,
  shims: false,
  sourcemap: !process.env.CI,
  esbuildOptions: (opts) => {
    if (!opts.alias)
      opts.alias = {}

    opts.alias.path = 'path-browserify'
  },
}
