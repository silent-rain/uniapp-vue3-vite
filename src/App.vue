<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

import openApp from '@/common/openApp.js';
import initApp from '@/common/appInit.js';

onLaunch(() => {
  console.log('App Launch');

  // 获取全局变量
  console.log('adpid: ', getApp()['$adpid']);

  initApp();

  // #ifdef H5
  openApp(); //创建在h5端全局悬浮引导用户下载app的功能
  // #endif
});
onShow(() => {
  console.log('App Show');
});
onHide(() => {
  console.log('App Hide');
});
</script>

<style></style>
