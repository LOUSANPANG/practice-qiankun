import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
    https: false,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        name: 'qiankunvue',
        format: 'umd'
      }
    }
  }
})
