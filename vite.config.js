import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // สำหรับต่อ Path สำหรับตัว @
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // สำหรับเปลี่ยน Port การ Run
    port: 8080,
  },
})
