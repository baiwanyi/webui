---
layout: post
title: html
author: baiwanyi
category: docs
slug: function-html
parent: function
---
* TOC
{:toc}

# webui.html( div, template_id, data )
> 使用模版内容覆盖元素

## 参数

| 属性        | 类型   | 必填 | 说明                                       |
| ----------- | ------ | ---- | ------------------------------------------ |
| div         | string | 是   | 显示的 DOM 元素                            |
| template_id | string | 是   | 模版 ID，请使用 `tmpl-*` 前缀                 |
| data        | object | 否   | 内容数据，模版使用 `data.{key}` 进行数据调用 |

## 示例代码

```javascript
webui.html('body', 'loading', {title: '正在加载...'});
```
