import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Alioth, ExternalMap, RemoteLoader } from 'alioth-dev'
process.env.ALIOTH_WEBSITE = 'http://localhost:4010'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Alioth({

      project: 'alioth',
      presets: ['http://localhost:4010/view.js', 'http://localhost:4010/widget.js', 'http://localhost:4010/style.css'],
      entry: {
      // a: './src/components/HelloWorld.vue',
        b: './src/entry.ts',
      },
    }),
    ExternalMap(),
    RemoteLoader()],
  build: {
    sourcemap: true,
    lib: {
      entry: {
        b: './src/entry.ts',
        c: './src/entry.js',
      },
      formats: ['es'],
    },
  },
})
