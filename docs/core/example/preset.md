# 预设
在[快速开始](./quick-start.md)中，在入口文件中`export`的、具有`alioth`属性的对象就是预设

## 预设种类

1. 添加物料

```ts
export const widget_a = {
  alioth: 'widget',
  data: {
    category: '分类',
    key: '独一无二的key',
    component,
    meta, // 元数据，或者说：schema
  },
}
```

2. 设定引擎
 

```ts
export const engine_a = {
  alioth: 'setRenderFn',
  data: Engine,
}
```

3. 注入变量

```ts
export const state_a = {
  alioth: 'state',
  data: {
    key: '变量名',
    value, // 变量值
    meta, // 元数据
  },
}
```

4. 添加`component`
专门用于编辑器的组件

和物料一样，都是组件，但只用于编辑器中，不会在生产中出现

被`zone/icon`调用

```ts
export const component_a = {
  alioth: 'component',
  data: {
    component,
    key,
    value
  },
}
```

4. 添加`icon`
   对应右上角的图标功能

```ts
export const icon_a = {
  alioth: 'icon',
  data: {
    component, // 图标
    label,
    handler, // 点击时触发
  },
}
```

4. 添加`Zone`
对应拖拽的“视图块”（属性盘等）

```ts
export const zone_a = {
  alioth: 'zone',
  data: {
    component,
    label,
    name,
    isActive,
    props,
  },
}
```



4. 添加`event`
对应事件/快捷键

```ts
export const view_a = {
  alioth: 'eventStack',
  data// 类型详见eventstack.ts
}
```



## 自定义预设

以上的预设形式，只是我默认平台中设定的，也可以更改、删除、添加

预设运行的原理是将`export`中存在`alioth`的对象,通过全局注入的函数调用
比如

```ts
export const a = {
  alioth: 'test1',
  data: 'test1 data',
}
// 等同于 执行 window.$alioth_test1('test1 data')
export const b = {
  alioth: 'test2',
  data: 'test2 data',
}
// 等同于 执行 window.$alioth_test2('test2 data')
```

所以要设置预设，就要实现一个对应的全局函数`$alioth_[alioth属性的值]`。

::: warning 注意

上述默认的预设形式，对应的全局函数，大多是通过[功能模块](./function.md)实现的，

如果你更改了默认平台中的功能模块，导致没有实现对应的以`$alioth_`开头的全局函数，会导致预设失效

所以，请尽可能保证标准中的全局函数被实现

虽然可以删除所有的默认预设形式（或不实现对应的全局函数），但请别这么做

:::

## 预设打包

当然需要对`preset`进行打包

在默认的平台中，直接点击右上角产生代码的图标，就会在项目中创建一个`alioth.js`文件，

以此为入口使用`vite`模式库打包，即可得到产物

[详见](./deploy.md)
