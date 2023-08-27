---
layout: post
title: url.parms
author: baiwanyi
category: docs
slug: function-url-parms
parent: function
---
* TOC
{:toc}

# webui.url.parms( url )
> 获取 URL 参数值数组

## 参数

| 属性 | 类型   | 必填 | 说明               |
| ---- | ------ | ---- | ------------------ |
| url  | string | 是   | 需要获取参数的 URL |

## 示例代码

```javascript
// https://webui.cc/url.html?function=parms&action=get

console.log(webui.url.parms());

// 返回结果：
// {
//    function: 'parms',
//    action: 'get'
// }
```
