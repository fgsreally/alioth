import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Alioth, ExternalMap, RemoteLoader } from 'alioth-dev'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Alioth({
      website: 'http://localhost:4010/',
      project: 'alioth',
      presets: ['http://localhost:4010/view.js', 'http://localhost:4010/widget.js', 'http://localhost:4010/style.css'],
      entry: {
      // a: './src/components/HelloWorld.vue',
        b: './src/entry.ts',
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
        b: './src/entry.ts',
      },
      formats: ['es'],
    },
  },
})
