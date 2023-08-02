import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Alioth, ExternalMap } from 'alioth-dev'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Alioth({
      project: 'alioth',
      presets: ['http://localhost:4010/view.js', 'http://localhost:4010/widget.js', 'http://localhost:4010/style.css'],
      entry: {
      // a: './src/components/HelloWorld.vue',
        b: './src/entry.ts',
      },
    }), ExternalMap()],
  build: {
    sourcemap: true,
    lib: {
      entry: {
        b: './src/entry.ts',
      },
      formats: ['es'],
    },
  },
})
