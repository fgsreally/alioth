import { URL, fileURLToPath } from 'node:url'
import { ExternalMap } from 'alioth-dev'
import { defineConfig } from 'vite'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { sfc } from 'unplugin-vue-sfcmore/vite'
import Icons from 'unplugin-icons/vite'
import pkg from './package.json'
const dependencies = pkg.dependencies
for (const i in dependencies)dependencies[i] = i
// https://vitejs.dev/config/
export default defineConfig({

  build: {
    sourcemap: true,
    lib: {
      entry: ['./src/index.ts'],
      formats: ['es'],
      fileName: (_, entry) => {
        return `${entry}.js`
      },
    },
  },

  plugins: [
    Icons(),
    ReactivityTransform(),
    VueMacros({
      setupBlock: true,
      plugins: {
        vue: Vue({
        }),
      },
    }),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['./src/**'],
      directoryAsNamespace: false,
      resolvers: [ElementPlusResolver()],

    }),
    ExternalMap({
      externals: Object.assign({}, {
        'vue': 'http://localhost:4010/vue.mjs',
        'phecda-core': 'http://localhost:4010/phecda-vue.mjs',
        'phecda-vue': 'http://localhost:4010/phecda-vue.mjs',
      }),
    }),
    sfc({
      write: true,
      meta: false,
      async: false,
    }),
  ],
  define: {
    // 'process.env.NODE_ENV': '\'production\'',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
