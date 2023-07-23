# 注册器
## 开发环境
### register
先看一下开发平台默认的`register`,我将一步一步解释
```ts
export class Register extends BaseRegister<typeof renderer> {
  Renderer = renderer// 为了更好的管理代码，这里有一个Renderer的class，它负责提供各种各样的功能，
  widgetMap = interval.widgetMap
  text() { // 这里我声明了一个text的渲染方法，它会渲染一个p标签，里面就会有对应物料的key,这就是左侧物料区的渲染方式
    return h('p', {
      class: 'preview-text',
    }, this.key)
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
      .exec()
  }

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
而Renderer的格式大致如下
```ts
export class renderer extends BaseRenderer<node<NodeSchema>> {

  getSize() {
    if (!this._vnode)
      return this

    // 操作 this._vnode
    return this// 返回this
  }
  // ...
}
```

## 生产环境

### register
而在生产的环境中，很明显`edit`和`text`不需要，故只需要保留`render`方法，

```ts
export class Register extends BaseRegister<typeof renderer> {
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
export class renderer extends BaseRenderer<node<NodeSchema>> {

  main({ type }: {
    type: string
  }) {
    // ...

    return this
  }
}
```