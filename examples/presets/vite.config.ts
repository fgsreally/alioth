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
import { visualizer } from 'rollup-plugin-visualizer'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({

  build: {
    outDir: '../../app/public',
    emptyOutDir: false,
    sourcemap: false,
    lib: {
      entry: ['./src/element-plus/view.ts', './src/element-plus/widget.ts'],
      formats: ['es'],
      fileName: (_, entry) => {
        return `${entry}.js`
      },
    },
  },

  plugins: [
    Icons(),
    ReactivityTransform(),
    visualizer(),
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
    ExternalMap({ }),
    sfc({
      write: true,
      meta: false,
      async: false,
    }),
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
