import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { YuHeng } from "@yu_heng/dev";
import { resolve } from "path";
import Unocss from "unocss/vite";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { presetAttributify, presetUno } from "unocss";
import inspect from "vite-plugin-inspect";
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [
    vue(),
    inspect(),
    YuHeng(),
    AutoImport({
      dirs: ["src/services/*"],
      imports: ["vue"],
    }),
    Components({}),
    Unocss({
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno(),
        // ...custom presets
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "preview/index.html"),
      },
    },
  },
});
