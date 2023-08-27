---
layout: post
title: wp.action
author: baiwanyi
category: docs
slug: wordpress-action
parent: wordpress
---
* TOC
{:toc}

# webui.wp.action( button, data, method, login )
使用 `jQuery.ajax()` 方法进行前台请求操作，返回消息内容参考：[webui.ajax 事件返回结果数据](./event-ajax.html#objectresult-返回结果数据)

## 请求地址
请使用 Webian WordPress One 插件中 hooks 进行操作设定
- Rest API URL
> `{domain}/wp-json`
- Rest API Endpoint
> `/wwpo/ajax/action`

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

| 属性   | 类型   | 必填 | 说明                                                                        |
| ------ | ------ | ---- | --------------------------------------------------------------------------- |
| action | string | 是   | 请求 hooks 函数别名：`wwpo_ajax_{method}_{action}`，按钮对象的 `value` 属性 |
| token  | string | 否   | 登录令牌，通过 `webuiSettings` 设定                                         |

### string method
AJAX 请求方式，默认为：POST
- 当按钮对象父级表单 `method="GET"` 时，请求方式设置为：**GET**
- 当 `boolean.login` 为 `false` 时，请求方式设置为：**GET**

### boolean login
AJAX 请求前进行登录操作，默认：**false**

## AJAX 设置
设置参数参考：[webui.ajax 事件请求选项](./event-ajax.html#object-options)
- 函数默认开启按钮加载动画
- `options.error` 函数输出 AJAX 错误消息

### 按钮对象 dataset 属性参数
自定义 dataset 属性参数主要用于 AJAX 执行前加载一个 modal 组件，方便 AJAX 执行完成时显示返回结果，目的是为了用户进行操作时体验流畅，在 AJAX 结果返回前 modal 组件会一直显示 loading 等待动画。如果直接在执行结果返回时才显示 modal 组件会有一定的等待空闲，用户在体验上会感到不佳。
- 可使用 `ajax 事件返回结果数据` 中 [请求成功时渲染 template 模板](./event-ajax.html#object-options#请求成功时渲染-template-模板) 进行结果显示
- 使用 Webian WordPress One 插件中函数进行内容返回

| 属性         | 类型    | 默认值 | 必填 | 说明                                                                                     |
| ------------ | ------- | ------ | ---- | ---------------------------------------------------------------------------------------- |
| modal-close  | boolean | false  | 否   | 是否显示弹出层关闭按钮                                                                   |
| modal-title  | string  |        | 否   | 弹出层标题                                                                               |
| modal-size   | string  |        | 否   | 弹出层尺寸                                                                               |
| modal-button | string  |        | 否   | 弹出层提交操作按钮动作名称 <br> 默认使用 `[data-action="ajax"]` 方法进行 AJAX 请求操作用 |

## 相关资源
- [设置 WordPress Rest API 操作](./wordpress-action.html)
- [设置 WordPress Rest API 登录](./wordpress-action.html)
- [WordPress Cookie Authentication](https://wehtml.cn)
- [WordPress Basic Authentication](https://wehtml.cn)
