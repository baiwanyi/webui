---
layout: post
title: scroll
author: baiwanyi
category: docs
slug: event-scroll
parent: event
---
* TOC
{:toc}

# webui.scroll( current, callback )
触发 jQuery.scroll 事件

## 参数

| 属性     | 类型     | 必填 | 说明                                |
| -------- | -------- | ---- | ----------------------------------- |
| current  | string   | 是   | 触发事件的 DOM 元素，默认：document |
| callback | function | 是   | 回调函数                            |

#### function.callback 回调函数

| 值        | 说明                     |
| --------- | ------------------------ |
| scrolltop | 当前滚动位置与顶部的距离 |

## 示例代码

```javascript
webui.scroll(document, (scrolltop) => {
    console.log(scrolltop)
});

// 显示结果：0
// 显示结果：1
// 显示结果：22
// 显示结果：33
```
