import type { Options } from "tsup";

export const tsup: Options = {
  entry: ["src/plugin.ts"],
  outDir: "dist/node",
  format: ["cjs", "esm"],
  dts: true,
  splitting: true,
  clean: true,
  shims: false,
};
