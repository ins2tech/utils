# ins-utils介绍
日常开发常用的各种工具函数集合
目前有

* oject
	* isObject
	* pick
	* omit

# 安装
`
npm i @instech/utils -save
`
或者
`
pnpm i @instech/utils  -save
`

# 使用
```javascript
 import {pick,omit,isObject} from "@instech/utils "
 //or 从子包里获取
 import {pick,omit,isObject} from "@instech/utils /object"
 
    const obj = { a: 1, b: 2, c: 3 };
    const result = pick(obj, ['a', 'c']);
     
    const obj2 = { a: 1, b: 2, c: 3 };
    const result = omit(obj2, ['b']);
        
    const ret= isObject({})//=>true
    const ret= isObject([])//=>false

```