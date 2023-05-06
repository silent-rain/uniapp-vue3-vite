import { createProdMockServer } from 'vite-plugin-mock/client';

// 进行全部导入
// const modulesFiles = import.meta.glob('../mock/*.ts');
// let modules: any[] = [];
// for (const path in modulesFiles) {
//   modules = modules.concat(modulesFiles[path].default);
// }
// export function setupProdMockServer() {
//   createProdMockServer([...modules]);
// }

// 逐一导入您的mock.ts文件
// 如果使用vite.mock.config.ts，只需直接导入文件
// 可以使用 import.meta.glob功能来进行全部导入
import example from '../mock/example';

export function setupProdMockServer() {
  createProdMockServer([...example]);
}
