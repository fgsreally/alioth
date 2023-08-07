# alioth-helper
```ts
// 所有的meta，就相当于描述信息
// 注册物料组件
declare function $RW(category: string /** 分区 */, key: string | symbol /** 标识 */, component: Component /** 组件 */, meta?: any): void
// 注册js,任何数据函数都行
declare function $R(key: string/** 标识 */, value: any/** 值 */, meta: any): void
// 注册视图组件，用于后续$Z等使用，不在生产环境中使用，
declare function $V(key: string/** 标识 */, component: Component/** 组件 */): void
declare function $Z(zone: {
  component: string/** 调用的视图组件 */
  label: string/** 标签 */
  name: string/** 名称 */
  isActive: (...args: any) => boolean/** 是否激活 */
  x: number/** 样式 */
  y: number
  fix?: boolean
  transition: string
  props: any/** 传入值 */
}): void

// 注册命令，可以理解为注册快捷键

declare function $C(...commands: DefaultCommand[]): void
// 注册头部功能，会出现右上角图标，点击调用对应功能
declare function $H(...headers: {
  component: string// icon组件
  label: string// 标签
  handler: (params: {
    useLayer: any
  }) => void// 功能
}[]): void
```