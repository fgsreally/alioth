# preset
预设可以是物料，可以是配置栏，可以是快捷键，其可以是任何能帮上我们的元素


## custom preset
以上的预设形式，只是我默认平台中设定的，也可以更改、删除、添加

预设运行的原理是将`export`中存在`alioth`的对象,通过全局注入的函数调用
比如
```ts
export const a = {
  alioth: 'test1',
  data: 'test1 data'
}
// 等同于 执行 window.$alioth_test1('test1 data')
export const b = {
  alioth: 'test2',
  data: 'test2 data'
}
// 等同于 执行 window.$alioth_test2('test2 data')
```

所以要设置预设，就要实现一个对应的全局函数`$alioth_[alioth属性的值]`。

::: warning 注意

上述默认的预设形式，对应的全局函数，大多是通过[功能模块]()实现的，

如果你更改了默认平台中的功能模块，导致没有实现对应的以`$alioth_`开头的全局函数，会导致预设失效

所以，请尽可能保证[]()中的全局函数被实现

虽然可以删除所有的默认预设形式（或不实现对应的全局函数），但请别这么做


:::
