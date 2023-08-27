---
layout: post
title: string.countobject
author: baiwanyi
category: docs
slug: function-string-countobject
parent: function
---
* TOC
{:toc}

# webui.string.countobject( object )
> 对象包含元素个数统计

## 参数

| 属性   | 类型   | 必填 | 说明             |
| ------ | ------ | ---- | ---------------- |
| object | object | 是   | 需要统计的元素 |

## 示例代码

```javascript
let _object = {
    name: 'jay',
    age: 33
}
console.log(webui.string.countobject(_object));
// 显示结果：2
```
