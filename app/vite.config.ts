import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'

import { DynamicImportmap, External } from 'alioth-dev'
import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import Swc from 'unplugin-swc'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    External({
      externals: {
        'vue': 'http://localhost:4010/vue.js',
        'phecda-core': 'http://localhost:4010/alioth-vue.js',
        'phecda-vue': 'http://localhost:4010/alioth-vue.js',
      },
    }),
    DynamicImportmap({
      'vue': 'http://localhost:4010/vue.js',
      'phecda-core': 'http://localhost:4010/alioth-vue.js',
      'phecda-vue': 'http://localhost:4010/alioth-vue.js',
    }),
    VueMacros({
      setupBlock: true,
      plugins: {
        vue: Vue({
        }),
      },
    }),
    Icons(),

    AutoImport({
      imports: ['vue', 'vue-router', {
        'phecda-vue': ['useR', 'useV', 'getR', 'getV']
      }],
      dirs: ['./src/composables'],
    }),
    Components({
      dirs: ['./src/components'],
      directoryAsNamespace: false,
    }),

    Swc.vite(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // 'vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.esm-browser.min.js',
    },
  },
})
