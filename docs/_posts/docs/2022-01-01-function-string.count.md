---
layout: post
title: string.count
author: baiwanyi
category: docs
slug: function-string-count
parent: function
---
* TOC
{:toc}

# webui.string.count( text )
> 字数统计
> - 英文、英文标点符号、空格占 1 个字符
> - 中文、中文标点符号占 2 个字符

## 参数

| 属性   | 类型   | 必填 | 说明             |
| ------ | ------ | ---- | ---------------- |
| text | string | 是   | 需要统计的字符集 |

## 示例代码

```javascript
console.log(webui.string.count('WEBUI 前端框架'));
// 显示结果：14
```
