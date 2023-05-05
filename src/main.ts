/**
 * 条件编译文档: https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor
 * 运行版本: https://uniapp.dcloud.net.cn/quickstart-cli.html#%E8%BF%90%E8%A1%8C%E3%80%81%E5%8F%91%E5%B8%83uni-app
 * 页面路由: https://uniapp.dcloud.net.cn/collocation/pages.html
 *
 */
import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
// import { router } from './router';

import InitWasm from '@mywasm/foo';
InitWasm();

export function createApp() {
  const app = createSSRApp(App);
  app.use(createPinia());
  // app.use(router);
  return {
    app,
  };
}
