# 实时协同


基本原理和[figma](https://www.figma.com/blog/how-figmas-multiplayer-technology-works/)一致


## 客户端
大致有这么几个角色
1. `VirtualDocument`,负责管理节点
2. `Controller`,控制管理`VirtualDocument`，实现撤销/前进
3. `Bridge`，负责处理远端的变化信息，以及发送本地变化信息到远程


## 服务端

使用`websocket`,服务端使用`ServerBridge`,一个特殊的`Bridge`,负责处理变化信息，并决定是否转发到各个用户

详见[example]()
