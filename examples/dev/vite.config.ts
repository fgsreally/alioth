import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Alioth } from 'alioth-dev'
import { visualizer } from 'rollup-plugin-visualizer'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  define: {

  },
  plugins: [vue(),
    Inspect({
      build: true,
    }),
    visualizer(),
    Alioth({
      website: 'http://localhost:4010/',
      project: 'alioth',
      entry: {
        editor: './src/entry.editor.ts',
        runtime: './src/entry.runtime.ts',

      },
      externals: {
        'vue': 'http://localhost:4010/vue.mjs',
        'phecda-core': 'http://localhost:4010/phecda-vue.mjs',
        'phecda-vue': 'http://localhost:4010/phecda-vue.mjs',
      },
    }),

    // RemoteLoader(/http:\/\/localhost:4010\/(.*)/),
  ],
  build: {
    sourcemap: true,

  },
})
