---
layout: post
title: scrollbottom
author: baiwanyi
category: docs
slug: event-scrollbottom
parent: event
---
* TOC
{:toc}

# webui.scrollbottom( options )
触发 jQuery.scroll 事件，监听滚动到底部
> 监听滚动时会检测 `body` 中是否有 `webui-autoload` 样式，用于防止重复触发回调函数

## object.options 选项设置

| 属性    | 类型     | 默认值   | 必填 | 说明                         |
| ------- | -------- | -------- | ---- | ---------------------------- |
| div     | string   | document | 是   | 监听目标 DOM 元素            |
| bottom  | integer  | 0        | 否   | 滚动到底部触发回调函数的距离 |
| success | function |          | 否   | 回调函数                     |

## 示例代码

```javascript
webui.scrollbottom({
    div: 'body',
    bottom: 100,
    success: () => {
        console.log('WEBUI 前端框架')
    }
});

// 显示结果：WEBUI 前端框架
```
