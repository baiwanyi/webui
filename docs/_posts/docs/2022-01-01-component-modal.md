---
layout: post
title: modal
author: baiwanyi
category: docs
parent: components
slug: components-modal
---
* TOC
{:toc}

# webui.modal( data )
Bootstrap Modal 弹出层组件

## 参数
### object data
参数选项

| 属性    | 类型    | 默认值 | 说明         |
| ------- | ------- | ------ | ------------ |
| id      | string  | main   | 弹出层 ID    |
| title   | string  |        | 弹出层标题   |
| close   | boolean | false  | 显示关闭按钮 |
| size    | string  |        | 弹出层尺寸   |
| button  | object  |        | 操作按钮     |
| content | string  |        | 消息内容     |

#### string.size 的合法值
默认尺寸 `500px`

| 值         | 说明     |
| ---------- | -------- |
| fullscreen | 全屏显示 |
| sm         | 300px    |
| lg         | 800px    |
| xl         | 1140px   |

#### object.button 操作按钮

| 属性   | 类型   | 说明                                            |
| ------ | ------ | ----------------------------------------------- |
| action | string | 操作按钮 AJAX 动作，用于设置 `data-action` 参数 |
| value  | string | 操作按钮值                                      |
| title  | string | 操作按钮名称                                    |

## 示例代码
示例采用 webui 前端框架的 modal 方法展示，查看更多详细[参数设置](./docs/method-modal)

<div class="border px-3 py-4">
    <button type="button" class="btn btn-outline-primary" data-action="modal" data-modal-title="带关闭按钮弹出层" data-close="true">带关闭按钮</button>
</div>

```javascript
webui.modal({
    title: '带关闭按钮弹出层',
    close: true
});
```

<div class="border px-3 py-4">
    <button type="button" class="btn btn-outline-primary" data-action="modal" data-modal-title="带操作按钮弹出层" data-modal-button="refresh" data-close="true">带操作按钮</button>
</div>

```javascript
webui.modal({
    title: '带操作按钮弹出层',
    close: true,
    button: {
        title: '保存更改'
    }
});
```

<div class="border px-3 py-4">
    <button type="button" class="btn btn-outline-primary" data-action="modal" data-modal-title="全屏显示弹出层" data-modal-size="fullscreen">全屏显示</button>
</div>

```javascript
webui.modal({
    title: '全屏显示弹出层',
    size: 'fullscreen'
});
```
