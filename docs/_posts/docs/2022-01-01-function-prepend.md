---
layout: post
title: prepend
author: baiwanyi
category: docs
slug: function-prepend
parent: function
---
* TOC
{:toc}

# webui.prepend( div, template_id, data )
> 在元素的开头插入模版内容

## 参数

| 属性        | 类型   | 必填 | 说明                                       |
| ----------- | ------ | ---- | ------------------------------------------ |
| div         | string | 是   | 显示的 DOM 元素                            |
| template_id | string | 是   | 模版 ID，请使用 `tmpl-*` 前缀                 |
| data        | object | 否   | 内容数据，模版使用 `data.{key}` 进行数据调用 |

## 示例代码

```javascript
webui.prepend('body', 'loading', {title: '正在加载...'});
```
