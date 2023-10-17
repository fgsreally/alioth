import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Alioth, ExternalMap } from 'alioth-dev'
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.NODE_ENV': '"production"',

  },
  plugins: [vue(),
    Alioth({
      website: 'http://localhost:4010/',
      project: 'alioth',
      entry: {
        editor: './src/entry.editor.ts',
        runtime: './src/entry.runtime.ts',

      },
    }),
    ExternalMap({
      externals: {
        'vue': 'http://localhost:4010/vue.mjs',
        'phecda-core': 'http://localhost:4010/phecda-vue.mjs',
        'phecda-vue': 'http://localhost:4010/phecda-vue.mjs',
      },
      importmap: false,
    }),
    // RemoteLoader(/http:\/\/localhost:4010\/(.*)/),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: './entry.js',
      formats: ['es'],
    },
  },
})
