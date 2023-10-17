import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ExternalMap } from 'alioth-dev'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ExternalMap({
    externals: {
      'vue': 'http://localhost:4010/vue.mjs',
      'phecda-core': 'http://localhost:4010/phecda-vue.mjs',
      'phecda-vue': 'http://localhost:4010/phecda-vue.mjs',
    },
  })],
})
