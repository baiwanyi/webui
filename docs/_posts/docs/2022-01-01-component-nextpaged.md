---
layout: post
title: nextpaged
date: 2021-08-18 09:43
author: baiwanyi
category: docs
parent: components
slug: components-nextpaged
---
* TOC
{:toc}

# webui.nextpaged( paged, maxpaged, action )
下一页分页组件

## 参数

| 属性     | 类型    | 必填 | 说明               |
| -------- | ------- | ---- | ------------------ |
| paged    | integer | 是   | 当前页码           |
| maxpaged | integer | 是   | 最大页码           |
| action   | string  | 是   | 加载内容 AJAX 动作 |

## 示例代码
<div class="border px-3 py-4">
    <div role="nextpaged"></div>
</div>

```javascript
// 当前页码 2，共 10 页
webui.nextpaged(2, 10, 'refresh');
```
