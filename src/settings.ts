import { SettingTy } from '~/common';

const setting: SettingTy = {
  title: 'hello uni-app',
  /**
   * @type {boolean} true | false
   * @description Whether  open prod mock
   */
  openProdMock: false,
  /*
   * vite.config.js base config
   * such as
   * */
  viteBasePath: '/',
};

export { setting };
