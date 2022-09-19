/** the ts file of vue
 * https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
 */

/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// declare module '*.vue' {
//   import { defineComponent } from 'vue';
//   const Component: ReturnType<typeof defineComponent>;
//   export default Component;
// }
