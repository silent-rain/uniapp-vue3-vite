import { createRouter, createWebHistory, Router } from 'vue-router';
import { RouterTy } from '~/router';

const constantRoutes: RouterTy = [];

// 全局路由, 将转译为 src/pages.json 文件
export const pagesJsonRouter = {
  pages: [
    //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    {
      path: 'pages/index/index',
      style: {
        navigationBarTitleText: 'uni-app',
      },
    },
  ],
  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'uni-app',
    navigationBarBackgroundColor: '#F8F8F8',
    backgroundColor: '#F8F8F8',
  },
};

const router: Router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes,
});

export { router };
