/** the ts file of vue
 * https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
 */

// declare module '*.vue' {
//   import { DefineComponent } from 'vue';
//   const component: DefineComponent<{}, {}, any>;
//   export default component;
// }

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
