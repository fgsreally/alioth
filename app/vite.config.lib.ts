import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    'process.env.NODE_ENV': '"development"',
  },
  build: {
    lib: {
      formats: ['es'],
      entry: ['src/share-deps/phecda-vue.ts', 'src/share-deps/vue.ts', 'src/share-deps/alioth-vue'],
    },
    outDir: './public',
  },
})
