export const constantRoutes = [
  //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
  {
    path: 'pages/index/index',
    style: {
      navigationBarTitleText: 'uni-app',
    },
  },
];

// 全局路由, 将转译为 src/pages.json 文件
export const pagesJsonRouter = {
  pages: [...constantRoutes],
  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'uni-app',
    navigationBarBackgroundColor: '#F8F8F8',
    backgroundColor: '#F8F8F8',
  },
};
