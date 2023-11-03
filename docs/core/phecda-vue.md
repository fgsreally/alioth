# phecda-vue
## 基本使用
`phecda`我还没来得及写文档，大致用法如下
> 基于类、依赖注入的状态管理
```ts
import { Init, useR, useV } from 'phecda-vue'

class UserModel {
  name: string
  @init
  init() { // 初始执行，后于构造函数
    this.name = 'user'
  }

  update(name: string) {
    this.name = name
  }
}
const { name, update } = useV(UserModel)
name// ref('user')
update('new user')
name// ref('new user')

const user = useR(UserModel)// reactive({name,update})
```

##  全局调用
功能模块中，需要通过全局变量去找
```ts
import { Global, Tag, useV } from 'phecda-vue'

@Global// 设置为全局
@Tag('user')// 此时存在全局变量： __PHECDA__={user:UserModel}

class UserModel {
// ..
}

const { name } = useV(__PHECDA__.user/** 功能模块  */)
```