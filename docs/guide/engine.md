# engine

渲染引擎负责渲染相关的一切事宜

我希望选中组件时，组件旁能出现辅助按钮
我希望可以同时支持构建表单/构建商品页/还原设计稿等多种布局
...

这些都是`engine`作用的范围


举一个例子
```ts
class renderer extends BaseRenderer<node<NodeAttrs>> {

  getSize() {
    if (!this._vnode)
      return this

    // 操作 this._vnode
    return this// 返回this
  }
  // ...
}
```


而在生产的环境中，很明显`edit`和`text`不需要，故只需要保留`render`方法，

```ts
export class Register extends BaseEngine<typeof renderer> {
  Renderer = renderer
  widgetMap = interval.widgetMap

  render(node: any) {
    return this.createRenderer(node)
      .slot(['default'], this.widgetMap, 'render')
      .main({
        type: 'render',
        // schema: this.meta.schema,
      })
      .addStyle({
        top: `${node.attrs.top.value}${node.attrs.top.size}`,
        left: `${node.attrs.left.value}${node.attrs.left.size}`,
        width: `${node.attrs.w.value}${node.attrs.w.size}`,
        height: `${node.attrs.h.value}${node.attrs.h.size}`,
        position: 'absolute',
      })

      .exec() as VNode
  }

}
```
### renderer
对应的`renderer`也可以删除部分不需要的功能

```ts
export class Renderer extends BaseRenderer<node<NodeAttrs>> {

  main({ type }: {
    type: string
  }) {
    // ...

    return this
  }
}
export class Engine extends BaseEngine<typeof Renderer> {
  Renderer = Renderer// 渲染器

  text() { // 这里我声明了一个text的渲染方法，它会渲染一个p标签，里面就会有对应物料的key,这就是左侧物料区的渲染方式
    return h('p', {
      class: 'preview-text',
    }, this.key)// 返回vnode
  }

  edit(node: VirtualNode<any>) { // 这里我声明了一个edit的渲染方法，对应编辑器中的渲染方式
    const renderer = this.createRenderer(node)
    // register通过链式调用Renderer，从而串联这些功能
    return renderer
      .slot(['default', 'header'], this.widgetMap, 'edit')// 渲染插槽（如果有的话
      .main({
        type: 'edit',
        schema: this.meta.schema, // 渲染物料
      })
      .getSize()// 计算尺寸
      .addClass('innerBlock_edit')// 给一个类名
      .useSize()// 绑定尺寸
      .draggable()// 支持拖拽
      .addClass('block_edit')
      .useOffset()
      .editAction()
      .exec()// 返回vnode
  }

  render(node: any) { // 这里我声明了一个render的渲染方法，对应生产中的渲染
    return this.createRenderer(node)
      .slot(['default'], this.widgetMap, 'render')
      .main({
        type: 'render',
        // schema: this.meta.schema,
      })
      .addStyle({
        top: `${node.attrs.top.value}${node.attrs.top.size}`,
        left: `${node.attrs.left.value}${node.attrs.left.size}`,
        width: `${node.attrs.w.value}${node.attrs.w.size}`,
        height: `${node.attrs.h.value}${node.attrs.h.size}`,
        position: 'absolute',
      })

      .exec() as VNode// 返回vnode
  }

}
```
结构应该很清楚：

有一个`Renderer`类，上面封装了各种各样的操作`vnode`的方法，比如更改`props`。

而`Engine`定义多个方法，分别对应不同的渲染方式：编辑时/预览时/生产时...，

各个方法通过链式调用`Renderer`类，负责将对应的`node`转为`Vnode`，从而渲染

> 渲染结果不一定是视图，导出代码也是一种渲染，可以定义一个`code`方法，将`node`转为字符串

一些案例[详见]()



