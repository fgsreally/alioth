# 功能模块

比如，我希望通过快捷键`ctrl+a`添加一个页面，并将该页面设置为正在编辑页面，可以这样

```ts
export const event_test: AliothEvent = {
  alioth: 'eventStack',
  data: {
    keyboard: 'ctrl+a',
    name: 'add-page',
    execute() {
      const { addPage, activePage } = useV(__PHECDA__.doc)
      activePage.value = addPage()
    },
    pushQueue: false,
  },
}
```

> 基于`phecda-vue`

简而言之，就是应用将一些模块设置为全局，然后在预设中通过全局变量找到，并通过`phecda-vue`操作

注意，有哪些模块？模块有哪些功能，这取决于平台中注入了哪些模块，以默认的应用为例：[详见](https://github.com/fgsreally/alioth/tree/main/app/src/models)

换言之，你可以自己设置一个`ai`模块，并在自己的平台中注入，再在预设里调用，就可以使用`ai`功能了

::: warning 提醒

搭建自己平台时，最好直接将`app/src/models`中文件复制粘贴，少量修改，然后添加自己的模块就行

这是因为预设的功能和默认模块中的一部分相关，移除会导致预设出现一些问题，

如果执意删去，请实现对应的标准,[详见](./preset.md#自定义预设)
:::
