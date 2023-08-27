---
layout: post
title: page
author: baiwanyi
category: docs
slug: function-page
parent: function
---
* TOC
{:toc}

# webui.page( div, url, data )
> 使用模版内容覆盖元素

## 参数

| 属性 | 类型   | 必填 | 说明                                             |
| ---- | ------ | ---- | ------------------------------------------------ |
| div  | string | 是   | 显示的 DOM 元素                                  |
| url  | string | 是   | 模版 URL 地址                                    |
| data | object | 否   | 内容数据，模版使用 `data.{key}` 进行数据调用 |

## 示例代码

```javascript
webui.page('body', './tmpl/loading.html', {title: '正在加载...'});
```
