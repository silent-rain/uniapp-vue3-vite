<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import router, { preloadPage, navigateTo } from '@/router';

onLaunch(() => {
  preloadPage(router.homePage);

  console.log('App Launch');
  // navigateTo({
  //   url: '/pages/error/index',
  //   query: {}, // 路由传参
  // });
});
onShow(() => {
  console.log('App Show');
});
onHide(() => {
  console.log('App Hide');
});
</script>

<style></style>
