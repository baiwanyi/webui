---
layout: post
title: string.random
author: baiwanyi
category: docs
slug: function-string-random
parent: function
---
* TOC
{:toc}

# webui.string.random( num )
> 生成随机字符串

## 参数

| 属性 | 类型    | 必填 | 说明                           |
| ---- | ------- | ---- | ------------------------------ |
| num  | integer | 否   | 需要生成的字符串位数，默认：32 |

## 示例代码

```javascript
//生成默认长度随机字符串（32位）
console.log(webui.string.random());
// 显示结果：G2iKBQ9ZGp0e85HZDPrJDJd6wcmsntDc

//生成 16 位长度随机字符串
console.log(webui.string.random(16));
// 显示结果：X89JQPmh4ezW6fXG

//生成 8 位长度随机字符串
console.log(webui.string.random(8));
// 显示结果：aJDE4ePh
```
