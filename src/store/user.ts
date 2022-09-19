import { defineStore } from 'pinia';
import { UserTy } from '~/store';

// 上次启动时的用户信息
let userInfoHistory = uni.getStorageSync('userInfo') || {};

export const useUserStore = defineStore('user', {
  state: () =>
    ({
      //是否已经登录
      hasLogin: Boolean(Object.keys(userInfoHistory).length),
      //用户信息
      info: userInfoHistory,
    } as UserTy),

  actions: {
    // 设置登录状态
    login(info: any) {
      this.$patch((state) => {
        //登录成功后的操作
        //原有的结合传来的参数
        state.info = Object.assign({}, state.info, info);

        //设置为已经登录
        state.hasLogin = true;
        console.log('state.info', state.info);
      });

      //存储最新的用户数据到本地持久化存储
      uni.setStorageSync('userInfo', this.$state.info);

      if (this.$state.info.token) {
        uni.setStorage({
          key: 'uni_id_token',
          data: this.$state.info.token,
          complete(e) {
            // console.log('setStorage-------',e);
          },
        });
        uni.setStorageSync('uni_id_token_expired', this.$state.info.tokenExpired);
      }
    },

    // 设置退出登录状态
    setLogout() {
      this.$patch((state) => {
        state.info = {};
        state.hasLogin = false;
        console.log('state.info', state.info);
      });

      uni.setStorageSync('userInfo', {});
      uni.removeStorageSync('uni_id_token');
      uni.setStorageSync('uni_id_token_expired', 0);
    },

    // 推送登录
    logout() {
      uni.showLoading({ mask: true });
      uniCloud.callFunction({
        name: 'uni-id-cf',
        data: { action: 'logout' },
        complete: (e) => {
          console.log(e);
          this.setLogout();
          uni.hideLoading();
        },
        secretType: 'none',
      });
    },
  },
});
