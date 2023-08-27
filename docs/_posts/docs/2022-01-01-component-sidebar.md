---
layout: post
title: sidebar
author: baiwanyi
category: docs
parent: components
slug: components-sidebar
---
* TOC
{:toc}

# webui.sidebar( data )
Bootstrap Sidebar 侧边栏组件

## 参数
### object data
参数选项

| 属性     | 类型    | 默认值 | 说明             |
| -------- | ------- | ------ | ---------------- |
| id       | string  | main   | 侧边栏 ID        |
| title    | string  |        | 侧边栏标题       |
| scroll   | boolean | false  | 是否允许页面滚动 |
| size     | string  | end    | 侧边栏位置       |
| backdrop | boolean | false  | 是否显示背景     |
| content  | string  |        | 侧边栏内容       |

#### string.size 的合法值

| 值     | 说明 |
| ------ | ---- |
| top    | 上   |
| bottom | 下   |
| start  | 左   |
| end    | 右   |

#### object.button 操作按钮

| 属性   | 类型   | 说明                                            |
| ------ | ------ | ----------------------------------------------- |
| action | string | 操作按钮 AJAX 动作，用于设置 `data-action` 参数 |
| value  | string | 操作按钮值                                      |
| title  | string | 操作按钮名称                                    |

## 示例代码
示例采用 webui 前端框架的 sidebar 方法展示，查看更多详细[参数设置](./docs/method-sidebar)

<div class="border px-3 py-4">
    <button type="button" class="btn btn-outline-primary" data-action="sidebar" data-sidebar-title="默认侧边栏" data-close="true">默认侧边栏</button>
</div>

```javascript
webui.sidebar({
    title: '默认侧边栏'
});
```

<div class="border px-3 py-4">
    <button type="button" class="btn btn-outline-primary" data-action="sidebar" data-sidebar-title="75% 屏幕尺寸的侧边栏" data-sidebar-size="end w-75">带尺寸侧边栏</button>
</div>

```javascript
webui.sidebar({
    title: '75% 屏幕尺寸的侧边栏',
    size: 'end w-75'
});
```

<div class="border px-3 py-4">
    <button type="button" class="btn btn-outline-primary" data-action="sidebar" data-sidebar-title="顶部侧边栏" data-sidebar-size="top">顶部侧边栏</button>
</div>

```javascript
webui.sidebar({
    title: '顶部侧边栏',
    size: 'top'
});
```
