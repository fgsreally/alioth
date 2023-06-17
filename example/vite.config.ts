import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Alioth } from 'alioth-dev'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Alioth({
    project: 'alioth',
    entry: {
      // a: './src/components/HelloWorld.vue',
      b: './src/entry.ts',
    },
  })],
})
