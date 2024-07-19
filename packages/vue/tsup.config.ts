import type { Options } from 'tsup'

export const tsup: Options = {
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  splitting: true,
  shims: false,
  clean: true,
  sourcemap: !process.env.CI,
}
