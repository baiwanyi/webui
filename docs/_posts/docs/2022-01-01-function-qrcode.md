---
layout: post
title: qrcode
author: baiwanyi
category: docs
slug: function-qrcode
parent: function
---
* TOC
{:toc}

# webui.qrcode( div, content, options )
> 绘制画布二维码

## 参数

| 属性    | 类型   | 必填 | 说明                 |
| ------- | ------ | ---- | -------------------- |
| div     | string | 是   | 显示的 DOM 元素      |
| content | string | 是   | 需要生成二维码的内容 |
| options | object | 否   | 二维码生成选项       |

### object options
二维码生成选项

| 属性                 | 类型    | 默认值    | 必填 | 说明                                            |
| -------------------- | ------- | --------- | ---- | ----------------------------------------------- |
| errorCorrectionLevel | string  | M         | 是   | 二维码容错率等级                                |
| margin               | integer | 2         | 是   | 空白边距宽度                                    |
| width                | integer | 320       | 是   | 输出图像宽度，单位：像素（px）                  |
| color.dark           | string  | #000000FF | 是   | 深色模块的颜色。值必须采用十六进制格式 （RGBA） |
| color.light          | string  | #FFFFFFFF | 是   | 亮模块的颜色。值必须采用十六进制格式 （RGBA）   |

#### string.errorCorrectionLevel 的合法值
二维码容错率等级
> 二维码容错率即是指二维码图标被遮挡多少后，仍可以被扫描出来的能力。容错率越高，则二维码图片能被遮挡的部分越多。

| 值  | 说明            |
| --- | --------------- |
| L   | low（7%）       |
| M   | medium（15%）   |
| Q   | quartile（25%） |
| H   | high（30%）     |

## 示例代码
```html
<div id="webui-qrcode" class="border d-inline-block"></div>
```
```javascript
// JS 脚本
webui.qrcode('#webui-qrcode', 'WEBUI 前端框架');
```

## 显示结果
<div id="webui-qrcode" class="border d-inline-block"></div>
