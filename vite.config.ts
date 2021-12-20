import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
      comps: resolve(__dirname, 'src/components'),
      api: resolve(__dirname, 'src/api'),
      hooks: resolve(__dirname, 'src/hooks'),
      types: resolve(__dirname, 'types')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/var/_var.scss";'
      }
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          axios: ['axios'],
          vue: ['vue']
        }
      }
    }
  }
})
