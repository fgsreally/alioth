import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'

import { DynamicImportmap, External } from 'alioth-dev'
import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    External({
      externals: {
        'vue': 'http://localhost:4010/vue.js',
        'phecda-core': 'http://localhost:4010/phecda-vue.js',
        'phecda-vue': 'http://localhost:4010/phecda-vue.js',
      },
    }),
    DynamicImportmap({
      'vue': 'http://localhost:4010/vue.js',
      'phecda-core': 'http://localhost:4010/phecda-vue.js',
      'phecda-vue': 'http://localhost:4010/phecda-vue.js',
    }),
    VueMacros({
      setupBlock: true,
      plugins: {
        vue: Vue({
        }),
      },
    }),
    Icons(),
    VueRouter(),

    AutoImport({
      imports: ['vue', 'vue-router', {
        'phecda-vue': ['useR', 'useV', 'getR', 'getV'],
      }],
      dirs: ['./src/composables', './src/models'],
    }),
    Components({
      dirs: ['./src/components', './src/views'],
      directoryAsNamespace: false,
    }),

    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
