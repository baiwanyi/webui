---
layout: post
title: loading
author: baiwanyi
category: docs
parent: components
slug: components-loading
---
* TOC
{:toc}

# webui.loading( align )
Bootstrap loading 加载动画

## 参数

| 属性  | 类型   | 默认值 | 说明     |
| ----- | ------ | ------ | -------- |
| align | string | center | 动画位置 |

### string.center 的合法值

| 值     | 说明   |
| ------ | ------ |
| start  | 左对齐 |
| end    | 右对齐 |
| center | 居中   |

## 示例代码

#### 左对齐
<div class="border px-3">
    <div role="loading" data-align="start"></div>
</div>
```javascript
webui.loading('start');
```

#### 右对齐
<div class="border px-3">
    <div role="loading" data-align="end"></div>
</div>
```javascript
webui.loading('end');
```

#### 居中
<div class="border px-3">
    <div role="loading" data-align="center"></div>
</div>
```javascript
webui.loading('center');
```
