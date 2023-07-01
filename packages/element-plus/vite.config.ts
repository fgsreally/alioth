import { URL, fileURLToPath } from 'node:url'
import { External } from 'alioth-dev'
import { defineConfig } from 'vite'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'

import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import Components from 'unplugin-vue-components/vite'
import transformerDirectives from '@unocss/transformer-directives'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // define: {
  //   __DEV__: true,
  // },
  build: {
    lib: {
      entry: ['src/widget.ts', 'src/view.ts'],
      formats: ['es'],
    },
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
      imports: ['vue'],
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
  define: {
    'process.env.NODE_ENV': '\'production\'',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
