# 云服务
> 灵感来自[laf](https://github.com/labring/laf),基于[phecda-server]

> 现在来讲，只是个尝试。如果要生产，还需要修改不少

<br/>

有点像`serverless`,沙箱中提供数据库/消息队列/对象存储等功能，上传代码至沙箱并运行

## 原理
简而言之，
1. 放弃`serverless`冷启动的概念，通过`k8s`来实现扩容(只是目标，尚未实现)，

可以理解为没人访问的时候，只保留一个最小的`pod`，人多的时候，增加

2. 放弃“函数”，专注于`phecda-server`（类`nestjs`格式），利用热更新提高开发体验


3. 利用`ai`完成初步代码编写，后续人工调试


## 详情
[alioth-nodejs](https://github.com/fgsreally/alioth/tree/main/packages/nodejs)提供了一个很简单的镜像，只实现最基本的功能
[案例](https://github.com/fgsreally/alioth/tree/main/examples/server)中提供了`k8s`和`docker`两种方式，实现部署/更新代码

:::warning

沙箱使用了`importModuleDynamically`，目前来看不太能用别的办法，是否有隐患不清楚
:::

