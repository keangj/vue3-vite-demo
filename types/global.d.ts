declare interface ViteEnv {
  VITE_DROP_CONSOLE: boolean;
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
}

declare type Indexable<T = any> = {
  [key: string]: T
}

declare type Nullable<T> = T | null;
