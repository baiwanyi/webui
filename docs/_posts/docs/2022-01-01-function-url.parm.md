---
layout: post
title: url.parm
author: baiwanyi
category: docs
slug: function-url-parm
parent: function
---
* TOC
{:toc}

# webui.url.parm( name )
> 获取 URL 参数值

## 参数

| 属性   | 类型 | 必填 | 说明           |
| ------ | ---- | ---- | -------------- |
| name | string | 是   | 需要获取的参数名称 |

## 示例代码

```javascript
// https://webui.cc/url.html?function=parm

console.log(webui.url.parm('function'));

// 返回结果：parm
```
