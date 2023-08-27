---
layout: post
title: message
author: baiwanyi
category: docs
parent: components
slug: components-message
---
* TOC
{:toc}

# webui.message( data )
Bootstrap message 气泡提示框

## 参数
### object data
参数选项

| 属性     | 类型   | 默认值     | 说明           |
| -------- | ------ | ---------- | -------------- |
| id       | string | main       | 气泡提示框 ID  |
| user     | string |            | 发布者         |
| time     | string |            | 发布时间       |
| image    | string |            | 显示头像       |
| position | string | bottom-end | 气泡提示框位置 |
| content  | string |            | 消息内容       |

#### string.position 的合法值

| 值           | 说明   |
| ------------ | ------ |
| top-start    | 左上角 |
| top-end      | 右上角 |
| bottom-start | 左下角 |
| bottom-end   | 右下角 |

## 示例代码

<div class="border py-4 px-3">
    <button type="button" class="btn btn-outline-primary" data-wb-action="message" value="bottom-end">右下角消息</button>
</div>
```javascript
webui.message({
    user: 'WEBUI 前端框架',
    time: '2 分钟前',
    content: '右下角消息'
});
```

<div class="border py-4 px-3">
    <button type="button" class="btn btn-outline-primary" data-wb-action="message" value="bottom-start">左下角消息</button>
</div>
```javascript
// 左下角消息
webui.message({
    user: 'WEBUI 前端框架',
    time: '2 分钟前',
    position: 'bottom-start',
    content: '左下角消息'
});
```
