import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    lib: {
      formats: ['es'],
      entry: ['src/libs/phecda-vue.ts', 'src/libs/vue.ts'],
    },
    outDir: './public',
  },
})
