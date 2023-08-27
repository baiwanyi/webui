---
layout: post
title: alert
author: baiwanyi
category: docs
parent: components
slug: components-alert
---
* TOC
{:toc}

<div role="ajax"></div>

# webui.alert( css, text, div )
Bootstrap alert 警告提示框
- 显示会优先查找页面中 `[role="ajax"]` 的 DOM 元素
- 若页面使用了 `webui.modal` 组件，优先显示到组件 `.modal-body` 中
- 显示方式采用 `prepend` 在 DOM 元素头部插入

## 参数

| 属性 | 类型   | 默认值   | 说明            |
| ---- | ------ | -------- | --------------- |
| css  | string | danger   | 消息样式        |
| text | string | 未知消息 | 消息文本        |
| div  | string | body     | 显示的 DOM 元素 |

## 示例代码

<div class="border py-4 px-3">
    <button type="button" class="btn btn-outline-primary" data-wb-action="alert" value="primary">primary 消息</button>
</div>
```javascript
webui.alert('primary', '这里是 primary 消息');
```

<div class="border py-4 px-3">
    <button type="button" class="btn btn-outline-secondary" data-wb-action="alert" value="secondary">secondary 消息</button>
</div>
```javascript
webui.alert('secondary', '这里是 secondary 消息');
```

<div class="border py-4 px-3">
    <button type="button" class="btn btn-outline-success" data-wb-action="alert" value="success">success 消息</button>
</div>
```javascript
webui.alert('success', '这里是 success 消息');
```

<div class="border py-4 px-3">
    <button type="button" class="btn btn-outline-danger" data-wb-action="alert" value="danger">danger 消息</button>
</div>
```javascript
webui.alert('danger', '这里是 danger 消息');
```

<div class="border py-4 px-3">
    <button type="button" class="btn btn-outline-warning" data-wb-action="alert" value="warning">warning 消息</button>
</div>
```javascript
webui.alert('warning', '这里是 warning 消息');
```

<div class="border py-4 px-3">
    <button type="button" class="btn btn-outline-info" data-wb-action="alert" value="info">info 消息</button>
</div>
```javascript
webui.alert('info', '这里是 info 消息');
```

<div class="border py-4 px-3">
    <button type="button" class="btn btn-outline-light" data-wb-action="alert" value="light">light 消息</button>
</div>
```javascript
webui.alert('light', '这里是 light 消息');
```

<div class="border py-4 px-3">
    <button type="button" class="btn btn-outline-dark" data-wb-action="alert" value="dark">dark 消息</button>
</div>
```javascript
webui.alert('dark', '这里是 dark 消息');
```
