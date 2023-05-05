import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path, { resolve } from 'path';
import { ViteRsw } from 'vite-plugin-rsw';
// import vue from '@vitejs/plugin-vue';
// import legacy from '@vitejs/plugin-legacy';
// import vueJsx from '@vitejs/plugin-vue-jsx';
// import { viteMockServe } from 'vite-plugin-mock';
// 自定义路由插件
import { routerPagesPlugin } from './src/plugins/routerPagesPlugin';

import { setting } from './src/settings';

const prodMock = setting.openProdMock;

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    base: setting.viteBasePath,
    define: {
      //fix "path" module issue
      'process.platform': undefined,
      'process.version': undefined,
      GLOBAL_STRING: JSON.stringify('i am global var from vite.config.js define'),
      GLOBAL_VAR: {
        test: 'i am global var from vite.config.js define',
      },
    },
    clearScreen: false,
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: 5004, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      proxy: {
        '/api-demo/v1/': {
          target: 'http://127.0.0.1:8000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/v1/, ''),
        },
      },
    },
    preview: {
      port: 5004,
      host: '0.0.0.0',
      strictPort: true,
    },
    plugins: [
      routerPagesPlugin(),
      uni(),
      ViteRsw(),
      //https://github.com/anncwb/vite-plugin-mock/blob/HEAD/README.zh_CN.md
      // viteMockServe({
      //   supportTs: true,
      //   mockPath: 'mock',
      //   localEnabled: command === 'serve',
      //   prodEnabled: prodMock,
      //   injectCode: `
      //       import { setupProdMockServer } from './mockProdServer';
      //       setupProdMockServer();
      //     `,
      //   logger: true,
      // }),
    ],
    build: {
      target: 'esnext',
      minify: 'terser',
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 500,
      //remote console.log in prod
      terserOptions: {
        //detail to look https://terser.org/docs/api-reference#compress-options
        compress: {
          drop_console: false,
          pure_funcs: ['console.log', 'console.info'],
          drop_debugger: true,
        },
      },
      //build assets Separate
      assetsDir: 'static/assets',
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
      //why remove it , look for https://github.com/vitejs/vite/issues/6026
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
    },
  };
});
