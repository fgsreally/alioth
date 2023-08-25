# 预设
简而言之，玉衡只有两个部分，一个是[Register](./custom.md),另一个是预设

## 预设的内容
预设里面需要干什么？我以`element-plus`的预设为例
```ts
import { $RH, $V, $Z } from 'alioth-dev/helper'
// ..

$V('Checkbox', Checkbox)
$V('Input', ElInput)
$V('Select', Select)
$V('Tree', Tree)
$V('List', List)
$RH({
// ..
})
$Z({
  component: 'Tree',
// ..
})
```
> 其提供了
`alioth-dev/helper`只是一层简单的包装，提供类型支持，其含义与api定义[详见](./api.md)

开发时直接这样使用，生产时直接打包就好

## 生产环境
可以看出除了`$R`,`$RW`以外，其他都不需要在生产环境中使用，那么为了使体积尽可能小，可以将其他的部分用`import.meta.env.DEV`包裹住
```ts
if (import.meta.env.DEV) {
  $V(/** */)
  $Z(/** */)
  // ..
}
```
如果并不是直接将预设用于生产，而是希望封装，以待下一次使用，那么建议是使用两个入口，一个使用`$R`,`$RW`,另一个使用其他，生产时，只使用前一个对应的产物就好


