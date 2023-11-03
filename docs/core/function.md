# 编辑器功能模块
:::tip
目前，`alioth`的功能模块重度依赖于`phecda`系列的库（一个我自己写的状态管理库），

[详见](./phecda-vue.md)
:::
> 注意，功能模块只在编辑器中起效！生产环境中是拿不到的

在预设中，我们需要知道应用此时此刻的状态，也需要方式去更改它，

使用过`codemirror`等编辑器的不会陌生--你总是需要知道此时选中的内容，或想把选中内容高亮

> 功能模块负责让预设执行查询、更改的操作

# 调用方式
功能模块通过两种方式调用，第一种是功能模块自身会设置为一个全局变量（底层），[详见](./phecda-vue.md#全局调用)第二是功能模块或玉衡内部去设置一个全局变量(封装的功能)，就如同`mongodb`与`mongoose`的关系

[案例](../example/function.md)

:::warning
因为功能模块只在编辑器中，所以这些部分不要打包进生产
因为生产环境中没有功能模块，没设置也拿不到全局变量，就会报错
:::