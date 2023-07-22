import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { External } from 'alioth-dev'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), External()],
})
