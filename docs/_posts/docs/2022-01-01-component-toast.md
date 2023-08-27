---
layout: post
title: toast
date: 2021-08-18 09:43
author: baiwanyi
category: docs
parent: components
slug: components-toast
---
* TOC
{:toc}

# webui.toast( icon, text, close )
toast 消息提示框组件

## 参数

| 属性  | 类型    | 默认值   | 说明         |
| ----- | ------- | -------- | ------------ |
| icon  | string  | success  | 消息图标     |
| text  | string  | 未知消息 | 消息文本     |
| close | boolean | false    | 是否自动关闭 |

### string.icon 的合法值

| 值      | 说明     |
| ------- | -------- |
| success | 成功图标 |
| loading | 加载动画 |

## 示例代码

<div class="border py-4 px-3">
    <button type="button" class="btn btn-outline-primary" data-wb-action="toast" value="success">成功消息</button>
</div>

```javascript
webui.toast('success', '成功消息', true);
```

<div class="border py-4 px-3">
    <button type="button" class="btn btn-outline-primary" data-wb-action="toast" value="loading">加载动画</button>
</div>

```javascript
webui.toast('loading', '加载动画', true);
```
