import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { dependencies } from './package.json'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  server: { port: 4000 },
  define: {
    'process.env': process.env,
    'Buffer': ['buffer', 'Buffer'],
  },
  build: {
    rollupOptions: {
      external: Object.keys(dependencies).concat(['monaco-editor/esm/vs/language/typescript/ts.worker?worker', 'monaco-editor/esm/vs/language/html/html.worker?worker']),
    },
    lib: {
      entry: 'src/entry.ts',
      formats: ['es'],
      name: 'yuheng',
      fileName: format => `yuheng.${format}.js`,
    },
  },
  plugins: [
    vue(),

    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['./src/engine'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['./src/components', './src/views'],
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
