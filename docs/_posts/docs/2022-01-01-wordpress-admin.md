---
layout: post
title: wp.admin
author: baiwanyi
category: docs
slug: wordpress-admin
parent: wordpress
---
* TOC
{:toc}

# webui.wp.admin( button, data, method)
使用 `jQuery.ajax()` 方法进行后台请求操作，返回 WordPress 后台风格一致的消息提示框。
- **后台使用 AJAX 操作必须登录**

## 请求地址
请使用 Webian WordPress One 插件中 hooks 进行操作设定
- Rest API URL
> `{domain}/wp-json`
- Rest API Endpoint
> `/wwpo/ajax/admin`

## 参数
### object button
AJAX 触发按钮对象，作用：
- Form 表单内容判断（根据按钮对象获取该按钮父级 Form 表单内各个内容值，以对象 `object` 格式返回）
- 当按钮对象 Dataset 属性获取
- AJAX 操作时执行加载动画和按钮禁用

> 若请求操作不为按钮触发，可为空，请用 `null` 代替

### object data
AJAX 发送到服务器的数据
- 若传参为空，函数会自动读取当前按钮对象的所有 Dataset 属性值

#### 请求参数
以下为 AJAX 请求操作时要用到的参数，与其他数据一同提交到 Rest API 函数

| 属性        | 类型   | 必填 | 说明                                                                    |
| ----------- | ------ | ---- | ----------------------------------------------------------------------- |
| action      | string | 是   | 请求 hooks 函数别名：`wwpo_ajax_post_{action}`，按钮对象的 `value` 属性 |
| pagenonce   | string | 是   | 当前页面一次性验证随机数，通过 `webuiSettings` 设定                     |
| pagenow     | string | 是   | 当前页面名称，通过 `webuiSettings` 设定                                 |
| bulk_ids    | object | 否   | 表格批量操作已选中的 ID 列表                                            |
| bulk_action | string | 否   | 表格批量操作 hooks 函数别名：`wwpo_ajax_post_{bulk_action}`             |

### string method
AJAX 请求方式，默认为：POST
- 当按钮对象父级表单 `method="GET"` 时，请求方式设置为：**GET**

## AJAX 设置
设置参数参考：[webui.ajax 事件](./event-ajax.html#object-options)
- 函数默认开启按钮加载动画
- `options.error` 函数输出 AJAX 错误消息

## 相关资源
- [如何设置 WordPress Rest API 操作？](./wordpress-action.html)
- [如何设置 WordPress Rest API 登录？](./wordpress-action.html)
- [WordPress Cookie Authentication](https://wehtml.cn)
- [WordPress Basic Authentication](https://wehtml.cn)
