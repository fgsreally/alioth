/// <reference types="vite/client" />
/// <reference types="unplugin-vue-macros/macros-global" />
/// <reference types="unplugin-vue-router/client" />

// declare module ''{
//     let component:any
//     export default component
// }

declare module '~icons/*' {
    import { defineComponent } from 'vue'
    const Component: ReturnType<typeof defineComponent>
    export default Component
  }