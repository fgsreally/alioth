import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Alioth, Base, sfc } from '@alioth/dev'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { presetAttributify, presetUno } from 'unocss'
import inspect from 'vite-plugin-inspect'
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env, 'Buffer': ['buffer', 'Buffer'],
  },
  plugins: [
    vue(),
    sfc(),
    Alioth({
      sideEffects: ['/.alioth/config.ts'],
    }),
    Base(),
    AutoImport({
      dirs: ['src/services/*'],
      imports: ['vue'],
    }),
    Components({}),
    Unocss({
      presets: [
        presetAttributify({

        }),
        presetUno(),

      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'preview/index.html'),
      },
    },
  },
})
