import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Alioth, ExternalMap, RemoteLoader } from 'alioth-dev'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Alioth({
      website: 'http://localhost:4010/',
      project: 'alioth',
      presets: [],
      entry: {
        b: './src/entry.ts',
        a: './src/main.ts',

      },
    }),
    ExternalMap({
      externals: {
        'vue': 'http://localhost:4010/vue.mjs',
        'phecda-core': 'http://localhost:4010/phecda-vue.mjs',
        'phecda-vue': 'http://localhost:4010/phecda-vue.mjs',
      },
    }),
    RemoteLoader()],
  build: {
    sourcemap: true,
    lib: {
      entry: {
        b: './entry.js',
      },
      formats: ['es'],
    },
  },
})
