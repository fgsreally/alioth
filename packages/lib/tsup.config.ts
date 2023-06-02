import type { Options } from 'tsup'

export const tsup: Options = {
  entry: ['src/index.ts', 'src/model/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  shims: false,
  sourcemap: !process.env.CI,
}
