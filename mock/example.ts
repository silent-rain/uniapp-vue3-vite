import { MockMethod } from 'vite-plugin-mock';

// eslint-disable-next-line import/no-default-export
export default [
  {
    url: '/integration-front/user/loginValid',
    method: 'POST',
    response: () => {
      return {
        msg: '操作成功!',
        code: 20000,
        data: {
          jwtToken: 'xxxx.xxxxx.xxx',
          username: 'admin',
        },
      };
    },
  },
  {
    url: '/integration-front/user/getUserInfo',
    method: 'POST',
    response: () => {
      return {
        msg: '操作成功!',
        code: 20000,
        data: {
          exp: 1656909607,
          iat: 1656650407,
          username: 'admin',
        },
      };
    },
  },
  {
    url: '/getMapInfo',
    method: 'get',
    response: () => {
      return {
        msg: '操作成功!',
        code: 0,
        data: 'mock请求测试',
      };
    },
  },
] as MockMethod[];
