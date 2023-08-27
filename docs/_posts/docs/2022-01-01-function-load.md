---
layout: post
title: load
author: baiwanyi
category: docs
slug: function-load
parent: function
---
* TOC
{:toc}

# webui.load( template_id, data )
> 渲染加载模版内容

## 参数

| 属性        | 类型   | 必填 | 说明                                             |
| ----------- | ------ | ---- | ------------------------------------------------ |
| template_id | string | 是   | 模版 ID 请使用 `tmpl-*` 前缀                 |
| data        | object | 是   | 内容数据，模版使用 `data.{key}` 进行数据调用 |

## 示例代码

```javascript
// 模版文件
<script type="text/template" id="tmpl-loading"><div id="loading">{ { data.title } }</div></script>

// 渲染模版
let _loading = webui.load('loading', {title: '正在加载...'});

// 显示模版
jQuery('body').html(_loading)
```
