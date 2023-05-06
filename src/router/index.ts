//https://ext.dcloud.net.cn/plugin?id=4000
import Router from 'uni-router-interceptor';

const router = new Router({
  homePage: '', // 首页的page路由
});

// 路由前置拦截器
router.beforeEach((to: any, from: any, next: (b: boolean) => void) => {
  // TODO something
  console.log('beforeEach');
  console.log('to: ', to);
  console.log('from: ', from);

  // 必须执行 next() 否则路由不会继续向下执行
  // next 函数需要传递一个 boolean 值参数
  // 不传参时默认为 true，路由会继续执行跳转。
  // 参数为 false 时禁止跳转，并在 error 回调中抛出异常
  next(true);
  console.log('beforeEach2');
  // 禁止跳转
  // next(false)
});

// 路由后置拦截器
router.afterEach((to: any, from: any) => {
  // TODO something
  console.log('afterEach');
});

// 捕获路由错误信息
router.error((err: any) => {
  console.log(err);
  // TODO something
});

// 保留当前页面，跳转到应用内的某个页面
export const navigateTo = ({ url, query }: { url: string; query: any }) => {
  router['navigateTo']({
    url: url,
    query: query, // 路由传参
  });
};

// 关闭当前页面，跳转到应用内的某个页面
export const redirectTo = ({ url, query }: { url: string; query: any }) => {
  router['redirectTo']({
    url: url,
    query: query, // 路由传参
  });
};
// 关闭所有页面，打开到应用内的某个页面。
export const reLaunch = ({ url, query }: { url: string; query: any }) => {
  router['reLaunch']({
    url: url,
    query: query, // 路由传参
  });
};
// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
export const switchTab = (url: string) => {
  router['switchTab']({
    url: url,
  });
};
// 关闭当前页面，返回上一页面或多级页面
export const navigateBack = () => {
  router['navigateBack']();
};

// 预加载页面
export const preloadPage = (url: string) => {
  router['preloadPage']({
    url: url,
  });
};

export default router;
