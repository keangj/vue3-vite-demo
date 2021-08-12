import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "src": resolve(__dirname, "src"),	// 配置根目录别名
      "comps": resolve(__dirname, "src/components"),	// 配置组件目录别名
    }
  },
})
