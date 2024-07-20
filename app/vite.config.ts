import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'

import { External, Importmap } from 'vite-plugin-alioth'
import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import swc from 'unplugin-swc'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    swc.vite({
      jsc: {
        parser: {
          syntax: 'typescript',
          decorators: true,
        },
        transform: {
          decoratorMetadata: true,
        },
      },
    }),
    External(),
    Importmap({
      imports: {
        'phecda-vue': '/phecda-vue.js',
        'phecda-core': '/phecda-vue.js',

        'alioth-vue': '/alioth-vue.js',
        'vue': '/vue.js',

      },
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
    UnoCSS(),
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

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
