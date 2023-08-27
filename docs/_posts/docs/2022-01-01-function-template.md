---
layout: post
title: template
author: baiwanyi
category: docs
slug: function-template
parent: function
---
* TOC
{:toc}

# webui.template( template, data )
> Lodash 模版应用

## 参数

| 属性     | 类型   | 必填 | 说明                                       |
| -------- | ------ | ---- | ------------------------------------------ |
| template | string | 是   | 模版内容                                   |
| data     | object | 否   | 内容数据，模版使用 ```data.{key}``` 进行数据调用 |

## 示例代码

```javascript
// 模版内容
let _template = '<div id="loading">{ { data.title } }</div>';

// 渲染模版
let _loading = webui.template(_template, {title: '正在加载...'});

// 显示模版
jQuery('body').html(_loading)
```
