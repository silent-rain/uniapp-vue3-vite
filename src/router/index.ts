import { createRouter, createWebHistory, Router } from 'vue-router';
import { RouterTy } from '~/router';
import { pageRoutes } from '@/pages';

const pageRoutesToRouter = (): RouterTy => {
  const routes: RouterTy = [];
  pageRoutes.forEach((routeItem, index) => {
    // if (index === 0) {
    //   routes.push({
    //     path: `/`,
    //     component: () => import(/* @vite-ignore */ `@/${routeItem.path}.vue`),
    //     // component: () => import('@/pages/index/index.vue'),
    //     hidden: true,
    //   });
    // }
    routes.push({
      path: `/${routeItem.path}`,
      component: () => import(/* @vite-ignore */ `@/${routeItem.path}`),
      hidden: true,
    });
  });
  return routes;
};

const constantRoutes: RouterTy = [
  ...pageRoutesToRouter(),
  // {
  //   path: '/login',
  //   component: () => import('@/pages/errorPage/index.vue'),
  //   hidden: true,
  // },
  // {
  //   path: '/401',
  //   component: () => import('@/pages/errorPage/index.vue'),
  //   hidden: true,
  // },
  // { path: '/:pathMatch(.*)', redirect: '/404', hidden: true },
];

const router: Router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes,
});

export { router };

// no redirect whitelist
const whiteList = ['/login', '/404', '/401'];
// 路由异常重试机制
let retryTotal = 50;
let retryCount = 0;

router.beforeEach(async (to: any, from, next: any) => {
  console.log('beforeEach...');
  // 白名单
  if (whiteList.indexOf(to.path) !== -1) {
    next();
    return;
  }

  // 路由异常重试机制
  if (retryCount > retryTotal) {
    next(false);
    return;
  }

  // 判断是否登录
  const hasToken = 'xxxxxxxxxx';
  if (hasToken) {
    next();
    return;
  }

  // 是都是登录
  if (to.path === '/login') {
    next({ path: '/' });
    return;
  }

  // 登录、全局业务逻辑
  try {
    // 请求成功后重试机制置为0
    retryCount = 0;

    console.log('beforeEach...');

    // hack method to ensure that addRoutes is complete
    // set the replace: true, so the navigation will not leave a history record
    next({ ...to, replace: true });
  } catch (err) {
    console.log(err);
    retryCount += 1;
    next(`/login?redirect=${to.path}`);
  }
  retryCount += 1;
});

router.afterEach(() => {
  console.log('afterEach...');
});
