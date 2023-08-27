---
layout: post
title: url.replace
author: baiwanyi
category: docs
slug: function-url-replace
parent: function
---
* TOC
{:toc}

# webui.url.replace( param_name, param_val, url )
> 获取 URL 参数值

## 参数

| 属性       | 类型   | 必填 | 说明                                |
| ---------- | ------ | ---- | ----------------------------------- |
| param_name | string | 是   | 需要替换的参数名称                  |
| param_val  | string | 是   | 替换后的参数的值                    |
| url        | string | 否   | 需要修改的 URL 链接，默认为当前 URL |

## 示例代码

```javascript
let _url = 'https://webui.cc/url.html?function=parm';

console.log(webui.url.replace('function', 'replace' _url));

// 返回结果：https://webui.cc/url.html?function=replace
```
