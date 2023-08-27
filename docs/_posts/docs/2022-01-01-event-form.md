---
layout: post
title: form
author: baiwanyi
category: docs
slug: event-form
parent: event
---
* TOC
{:toc}

# webui.form( div )
读取表单 DOM 元素的值，并以对象格式返回

## 参数

| 属性 | 类型   | 必填 | 说明                       |
| ---- | ------ | ---- | -------------------------- |
| div  | string | 是   | 需要读取的表单 DOM 元素 ID |

## 示例代码

```javascript
console.log(webui.form('#form-id'));
```

## 显示结果
```javascript
{
    name: "WEBUI",
    desc: "前端框架"
}
```
