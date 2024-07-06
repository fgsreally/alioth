import type { Options } from 'tsup'

export const tsup: Options = {
  entry: ['src/index.ts', 'src/worker.ts', 'src/client/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  shims: false,
  sourcemap: !process.env.CI,
}
