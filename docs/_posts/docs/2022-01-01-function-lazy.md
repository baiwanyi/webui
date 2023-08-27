---
layout: post
title: lazy
author: baiwanyi
category: docs
slug: function-lazy
parent: function
---
* TOC
{:toc}

# webui.lazy( images, div )
> 图片懒加载

## 参数

| 属性   | 类型   | 必填 | 说明                     |
| ------ | ------ | ---- | ------------------------ |
| images | string | 否   | 渲染图片，默认：img.lazy |
| div    | string | 否   | 渲染位置，默认：body     |

```javascript
// body 框架内 class 包含 lazy 样式属性的图片
webui.lazy();

// #content 框架内 class 包含 lazyload 样式属性的图片
webui.lazy('img.lazyload', '#content');
```
