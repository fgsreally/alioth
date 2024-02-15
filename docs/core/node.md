# 节点

玉衡本质是操作一个树状的`virtualDocument`实例，树上的节点为`virtualNode`实例，详见源码

这和`web`中的`document`和`node`很像，同样通过`insert/remove/set`的方式操作

然后将`virtualNode`实例通过[引擎](./engine.md)转换为`vnode`， 从而渲染or更新

这没有什么复杂的:

```ts
const node1 = doc.createNode()// 直接操作virtualDocument

doc.insert(node1, doc.root)
doc.remove(node1)// 直接操作virtualDocument
```