import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
const __dirname = fileURLToPath(new URL('./', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: '8080',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8082',
        // target: 'http://localhost:8082', //localhost가 작동안됨, 추후 확인필요
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
        rewrite: (path) => {
          console.log('proxy.log---', path);
          return path.replace('', '');
        },
        secure: false,
        // ws: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/function.scss";
          @import "@/assets/scss/mixins.scss";
        `,
      },
    },
  },
  base: '/testcontext', //context 설정, '--base=/mobapp' 동일
  build: {
    outDir: 'dist/app',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'multipage01/index.html'),
      },
    },
  },
});
