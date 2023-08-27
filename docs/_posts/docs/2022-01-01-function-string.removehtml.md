---
layout: post
title: string.removehtml
author: baiwanyi
category: docs
slug: function-string-removehtml
parent: function
---
* TOC
{:toc}

# webui.string.removehtml( text )
> 移除 HTML 标签

## 参数

| 属性   | 类型 | 必填 | 说明           |
| ------ | ---- | ---- | -------------- |
| text | string | 是   | 需要格式化的字符串 |

## 示例代码

```javascript
console.log(webui.string.removehtml('<div class="header"><a href="https://webui.cc">WEBUI 前端框架</a></div>'));
// 显示结果：EBUI 前端框架
```
