import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { configCompressPlugin } from './build/plugin/compress'
import { configImageminPlugin } from './build/plugin/imagemin'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const {
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
    VITE_DROP_CONSOLE,
    VITE_USE_IMAGEMIN
  } = env
  return {
    plugins: [
      vue(),
      vueJsx(),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      configCompressPlugin(
        VITE_BUILD_COMPRESS as 'gzip' | 'brotli' | 'none',
        VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE === 'true'
      ),
      VITE_USE_IMAGEMIN === 'true' && configImageminPlugin()
    ],
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
          drop_console: VITE_DROP_CONSOLE === 'true',
          drop_debugger: VITE_DROP_CONSOLE === 'true'
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            axios: ['axios'],
            vue: ['vue'],
            pinia: ['pinia'],
            'vue-router': ['vue-router']
          }
        }
      }
    }
  }
}
