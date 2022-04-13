import type { Plugin } from 'vite'
import viteCompression from 'vite-plugin-compression'

export function configCompressPlugin(
  compress: 'gzip' | 'brotli' | 'none',
  deleteOriginFile = false
): Plugin | Plugin[] {
  const compressList = compress.split(',')
  const plugins: Plugin[] = []

  if (compressList.includes('gzip')) {
    plugins.push(
      viteCompression({
        ext: '.gz',
        deleteOriginFile
      })
    )
  }

  if (compressList.includes('brotli')) {
    plugins.push(
      viteCompression({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile
      })
    )
  }
  return plugins
}
