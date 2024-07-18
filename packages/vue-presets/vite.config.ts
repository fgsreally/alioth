import { defineConfig } from 'vite'
import pkg from './package.json'
export default defineConfig({
  build: {
    lib: {
      entry: ['gridstack/index.ts', 'grid-layout-plus/index.ts'],
      formats: ['es'],
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: Object.keys(pkg.dependencies),
    },
  },
})
