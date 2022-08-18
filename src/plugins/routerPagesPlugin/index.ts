/*动态路由编译
 */
import type { Plugin } from 'vite';
import fs from 'fs';
import { resolve } from 'path';

import { pagesJsonRouter } from '../../pages';

const routerPagesPlugin = (): Plugin => {
  const pagesJsonFile = resolve(__dirname, '../../pages.json');
  const content = JSON.stringify(pagesJsonRouter);

  fs.writeFileSync(pagesJsonFile, content);

  return {
    name: 'vite-plugin-monitor',
    apply: 'serve',
    config(_userConfig, _env) {
      // 可以做进一步的修改，会自动合入当前的配置
      return {};
    },
  };
};

export { routerPagesPlugin };
