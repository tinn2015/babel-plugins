# 组件库的按需引入， 世纪就是通过babel来改写import。
将解构引入改为绝对地址引入
```js
import {Button} from 'element-ui'

// 改为

import Button from 'element-ui/packages/button'
```