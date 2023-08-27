---
layout: post
title: ajax
author: baiwanyi
category: docs
slug: event-ajax
parent: event
---
* TOC
{:toc}

# webui.ajax( button, options )
使用 `jQuery.ajax()` 方法进行请求操作

## 参数
### object button
AJAX 触发按钮 DOM 对象
> 若 AJAX 请求操作不为按钮触发，可为空，请用 `null` 代替

### object options
AJAX 请求选项

| 属性       | 类型     | 默认值                | 必填 | 说明                                                                                                                                                          |
| ---------- | -------- | --------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| method     | string   | POST                  | 是   | 请求方法                                                                                                                                                      |
| login      | string   |                       | 否   | 登录请求                                                                                                                                                      |
| form       | string   |                       | 否   | 需要读取的表单 DOM 元素 ID。若当前触发请求的 DOM 元素在 `form` 表单元素内，则优先读取请求的 DOM 元素表单                                                      |
| ajax       | string   |                       | 是   | AJAX 请求动作名                                                                                                                                               |
| ajaxurl    | string   | webuiSettings.ajaxurl | 是   | AJAX 请求地址。请尽量使用基本的域名，如：`//domain.com/wp-json/`，使用 `options.ajax` 请求动作名进行每个 AJAX 操作，即：`//domain.com/wp-json/{options.ajax}` |
| data       | object   |                       | 否   | AJAX 请求参数。若设定了 `options.form` 参数，会自动读取表单 DOM 内所有值                                                                                      |
| loading    | boolean  | false                 | 否   | 按钮加载动画，请求按钮 DOM 元素设置 `loading` 属性。若 `button` 参数为空即使参数为 `true` 也不会显示加载动画                                                  |
| beforesend | function |                       | 否   | 发送请求前的操作                                                                                                                                              |
| complete   | function |                       | 否   | 请求完成时的操作，不管请求是否成功都会执行                                                                                                                    |
| error      | function |                       | 否   | 请求错误时的操作                                                                                                                                              |
| success    | function |                       | 否   | 请求成功时的操作                                                                                                                                              |

#### string.method 的合法值

| 值   | 说明          |
| ---- | ------------- |
| POST | POST 请求方法 |
| GET  | GET 请求方法  |

#### string.login 的合法值

| 值    | 说明                                               |
| ----- | -------------------------------------------------- |
| wp    | 在 WordPress Rest API 中使用 Cookie Authentication |
| token | 在 WordPress Rest API 中使用 Basic Authentication  |

#### function.beforesend 回调函数
AJAX 发送请求前的操作
- **返回值为 `false` 时，会中止执行 AJAX 操作**
- 设置 `options.login` 参数则会请求认证头部信息

| 值           | 说明                       |
| ------------ | -------------------------- |
| xhr          | 包含 `XMLHttpRequest` 对象 |
| options.data | AJAX 请求参数              |

#### function.complete 回调函数
请求完成时的操作，不管请求是否成功都会执行
> 如果当前请求按钮 DOM 不为空，则会重置按钮禁用状态和移除动画

| 值     | 说明              |
| ------ | ----------------- |
| button | 当前按钮 DOM 元素 |

#### function.error 回调函数
请求错误时的操作

| 值     | 说明                   |
| ------ | ---------------------- |
| result | 包含来自请求的结果数据 |

#### function.success 回调函数
请求成功时的操作

| 值     | 说明                                                                        |
| ------ | --------------------------------------------------------------------------- |
| result | 包含来自请求的结果数据                                                      |
| status | 包含请求的状态：`success`, `notmodified`, `error`, `timeout`, `parsererror` |
| xhr    | 包含 `XMLHttpRequest` 对象                                                  |

#### object.result 返回结果数据
WebUI 对 AJAX 请求的返回结果设置了不同的反馈操作，便于在执行 AJAX 时使用

| 参数    | 类型   | 说明                       |
| ------- | ------ | -------------------------- |
| code    | string | 错误代码，用于判断执行动作 |
| message | string | 错误信息                   |
| data    | object | 附加数据                   |

**string.code 的合法值**

| 值       | 说明                                                             |
| -------- | ---------------------------------------------------------------- |
| success  | 请求成功，显示成功信息                                           |
| error    | 请求失败，大部分时间请求失败会在 `function.error` 回调函数中执行 |
| alert    | 请求成功，调用 `alert` 组件                                      |
| modal    | 请求成功，调用 `modal` 组件                                      |
| sidebar  | 请求成功，调用 `sidebar` 组件                                    |
| toast    | 请求成功，调用 `toast` 组件                                      |
| template | 请求成功，渲染 `template` 模版                                   |

**object.data 的合法值**
> 其他参数值请查看具体请求完成操作

| 参数   | 类型    | 说明        |
| ------ | ------- | ----------- |
| status | integer | HTTP 状态码 |

##### 请求完成时禁用表单
返回值中包含 `result.data.disabled` 数组内容

| 参数  | 类型    | 说明                                |
| ----- | ------- | ----------------------------------- |
| key   | string  | 禁用的表单 name 属性值              |
| value | boolean | 解除禁用：`false`，禁用表单：`true` |

##### 请求完成时修改表单值
返回值中包含 `result.data.value` 数组内容

| 参数  | 类型   | 说明                       |
| ----- | ------ | -------------------------- |
| key   | string | 需要修改的表单 name 属性值 |
| value | string | 需要修改的表单值           |

##### 请求完成时删除 DOM 元素
返回值中包含 `result.data.remove` 内容
- `remove` 的值为要删除的 DOM 元素
- 如值为 `tr` 则删除当前操作 DOM 元素的父级表格行

##### 请求完成时转跳指定 URL
返回值中包含 `result.data.url` 内容
- `url` 的值为要转跳的 URL 地址链接
- 如值为 `reload` 则刷新当前页面

##### 请求成功时调用 `alert` 组件

| 参数             | 类型   | 说明                                                     |
| ---------------- | ------ | -------------------------------------------------------- |
| result.message   | string | alert 显示的信息                                         |
| result.data.icon | string | alert 组件的图标或状态颜色，如：success、danger、info... |

##### 请求成功时调用 `modal` 组件

| 参数                 | 类型   | 说明                                                                   |
| -------------------- | ------ | ---------------------------------------------------------------------- |
| result.message       | string | modal 内容模版 ID 名                                                   |
| result.data.content  | object | 渲染模版的内容数据                                                     |
| result.data.qrcode   | string | 显示 modal 组件后生成二维码内容                                        |
| result.data.settings | object | 显示 modal 组件的设置参数。参考 [webui.modal](./components-modal) 组件 |

##### 请求成功时调用 `sidebar` 组件

| 参数                 | 类型   | 说明                                                                         |
| -------------------- | ------ | ---------------------------------------------------------------------------- |
| result.message       | string | sidebar 内容模版 ID 名                                                       |
| result.data.content  | object | 渲染模版的内容数据                                                           |
| result.data.settings | object | 显示 sidebar 组件的设置参数。参考 [webui.sidebar](./components-sidebar) 组件 |

##### 请求成功时调用 `toast` 组件

| 参数             | 类型   | 说明             |
| ---------------- | ------ | ---------------- |
| result.message   | string | toast 显示的信息 |
| result.data.icon | string | toast 组件的图标 |

**result.data.icon 的合法值**

| 值      | 说明     |
| ------- | -------- |
| success | 成功图标 |
| loading | 加载动画 |

##### 请求成功时渲染 `template` 模板

| 参数                | 类型   | 说明                        |
| ------------------- | ------ | --------------------------- |
| result.message      | string | 显示模版 ID 名              |
| result.data.content | object | 渲染模版的内容数据          |
| result.data.body    | string | 显示的 DOM 元素，默认：body |

## 相关资源
- [WordPress Cookie Authentication](https://wehtml.cn)
- [WordPress Basic Authentication](https://wehtml.cn)
- [常见 HTTP 状态码](./httpcode.html)
