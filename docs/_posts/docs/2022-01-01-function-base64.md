---
layout: post
title: base64
date: 2021-08-18 09:43
author: baiwanyi
category: docs
slug: function-base64
parent: function
---
* TOC
{:toc}

# webui.base64
> Base64 操作函数

## webui.base64.encode( text )
Base64 编码

### 参数

| 属性   | 类型   | 必填 | 说明             |
| ------ | ------ | ---- | ---------------- |
| text | string | 是   | 需要编码的字符串 |

### 示例代码

```javascript
console.log(webui.base64.encode('WEBUI 前端框架'));

// 显示结果：V0VCVUkg5YmN56uv5qGG5p62
```

## webui.base64.decode( text )
Base64 解码

### 参数

| 属性   | 类型   | 必填 | 说明             |
| ------ | ------ | ---- | ---------------- |
| text | string | 是   | 需要解码的字符串 |

### 示例代码

```javascript
console.log(webui.base64.decode('V0VCVUkg5YmN56uv5qGG5p62'));

// 显示结果：WEBUI 前端框架
```
