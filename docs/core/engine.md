# engine


渲染引擎负责渲染相关的一切事宜，也是预设的一种，但由于其过于重要，故单独拿出来讲

节点在生产环境怎么渲染、怎么布局，怎么绑定事件，在编辑器环境中怎么展示，怎么操作...

这些都是`engine`作用的范围。

为了方便理解和维护，会把`engine`分为一个`renderer`（渲染器）和一个`renderFn`(渲染函数)


举一个例子
```ts
import { BaseRenderer } from 'alioth-vue'
export class Renderer extends BaseRenderer<any> {

  main() { // 渲染组件
    const { component } = this.widget

    this.vnode = h(
      component,
      this._vnode)
  }
}
export const renderFn: AliothRenderFn = {
  alioth: 'setRenderFn', // 渲染函数
  data: {
    mode: 'runtime', // 生产时
    fn: ({ node, scope, widget, props, doc }) => {

      const renderer = new Renderer(doc, node, 'runtime', widget, scope)
      return renderer.slot(['default'])/** 渲染default插槽 */.main()/** 渲染组件 */.exec()/** 返回vnode */
    },
  },
}
```


结构应该很清楚：

`renderer`（即渲染器），上面封装了各种各样的操作`vnode`的方法，比如更改`props`。

> 通过链式调用`Renderer`类，负责将对应的`virtualNode`转为`Vnode`，从而渲染
> 渲染结果不一定是视图，导出代码也是一种渲染，可以定义一个渲染函数，将`virtualNode`转为字符串


而`renderfn`负责编排渲染器功能，并对应不同环境：编辑时/预览时/生产时...，


> 生产环境时，可以只保留一个`renderFn`方法，从而保持体积精简

一些案例[详见](https://github.com/fgsreally/alioth/tree/main/packages/preset-layout)


