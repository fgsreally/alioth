import { URL, fileURLToPath } from 'node:url'
import { External } from 'alioth-lib'
import { defineConfig } from 'vite'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import Components from 'unplugin-vue-components/vite'
import transformerDirectives from '@unocss/transformer-directives'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __DEV__: true,
  },
  plugins: [
    ReactivityTransform(),
    VueMacros({
      setupBlock: true,
      plugins: {
        vue: Vue({
        }),
      },
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: [],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['./src/components'],
      directoryAsNamespace: false,
      resolvers: [ElementPlusResolver()],

    }),
    External(),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // 'vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.esm-browser.min.js',
    },
  },
})
