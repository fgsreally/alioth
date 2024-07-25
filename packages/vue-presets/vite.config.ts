import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import pkg from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: {
        'gridstack': './src/gridstack/index.ts',

        'grid-layout-plus': './src/grid-layout-plus/index.ts',
      },
      formats: ['es'],
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: Object.keys(pkg.dependencies),
    },
  },

  plugins: [Vue()],
})
