---
layout: post
title: string.numberonly
author: baiwanyi
category: docs
slug: function-string-numberonly
parent: function
---
* TOC
{:toc}

# webui.string.numberonly( text )
> 移除其他字符，只保留数值

## 参数

| 属性   | 类型 | 必填 | 说明           |
| ------ | ---- | ---- | -------------- |
| text | string | 是   | 需要格式化的字符串 |

## 示例代码

```javascript
console.log(webui.string.numberonly('1WEBUI 2 前端框架3'));
// 123
```
