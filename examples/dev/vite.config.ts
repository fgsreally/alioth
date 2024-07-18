import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Alioth from 'vite-plugin-alioth'
// import { visualizer } from 'rollup-plugin-visualizer'
// import Inspect from 'vite-plugin-inspect'
// import Compress from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig({
  define: {

  },
  plugins: [vue(),
  // Compress(),
  // Inspect({
  //   build: true,
  // }),
  // visualizer(),
    Alioth({
      website: 'http://localhost:4010/',
      project: 'alioth',
      entry: {
        editor: './src/entry.editor.ts',
        // runtime: './src/entry.runtime.ts',

      },
      externals: {
        'vue': 'http://localhost:4010/vue.js',
        'phecda-core': 'http://localhost:4010/phecda-vue.js',
        'phecda-vue': 'http://localhost:4010/phecda-vue.js',
        'alioth-vue': 'http://localhost:4010/alioth-vue.js',
      },
    }),

    // RemoteLoader(/http:\/\/localhost:4010\/(.*)/),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: './src/entry.editor.ts',
      formats: ['es'],
    },
  },
})
