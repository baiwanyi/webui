---
layout: post
title: wp.uploader
author: baiwanyi
category: docs
slug: wordpress-uploader
parent: wordpress
---
* TOC
{:toc}

# webui.wp.uploader( options )
调用 WordPress 媒体库上传方式

## 支持
需要 `wp_enqueue_media` 函数的支持

```php
// 在使用上传的页面添加以下语句
wp_enqueue_media();

// 使用排队媒体脚本的参数
wp_enqueue_media([
    'post' => 1
]);
```

## 参数
## object options

| 属性        | 类型     | 默认值 | 必填 | 说明                                          |
| ----------- | -------- | ------ | ---- | --------------------------------------------- |
| title       | string   | 媒体库 | 是   | 媒体库弹出层标题                              |
| type        | string   | image  | 是   | 上传媒体类型                                  |
| selection   | integer  | 0      | 否   | 选中的媒体 ID，打开媒体库弹出层时会勾选该项目 |
| multiple    | boolean  | false  | 是   | 上传选择时是否多选                            |
| callback    | function |        | 否   | 选中媒体后执行的回调函数                      |
| author      | integer  | null   | 否   | 用户 ID，设定后将只显示该用户上传的媒体文件   |
| button_text | string   | 选择   | 否   | 选择按钮标签                                  |

#### string.type 的合法值

| 值    | 说明     |
| ----- | -------- |
| image | 图片类型 |
| video | 视频类型 |

### function.callback 的参数
执行 callback 函数时，会携带一个包含当前选中媒体的信息参数

| 属性                    | 类型     | 说明                       | 示例                                     |
| ----------------------- | -------- | -------------------------- | ---------------------------------------- |
| id                      | integer  | 媒体 ID                    | 1234                                     |
| title                   | string   | 媒体标题                   |                                          |
| filename                | string   | 媒体文件名                 |                                          |
| url                     | string   | 媒体文件 URL 链接          | /uploads/images.png                      |
| link                    | string   | 媒体附件页 URL 链接        |                                          |
| author                  | integer  | 上传作者 ID                | 1                                        |
| description             | string   | 媒体描述，在附件页显示     |                                          |
| caption                 | string   | 媒体说明文字               |                                          |
| name                    | string   | 媒体上传别名               |                                          |
| status                  | string   | 媒体上传状态               | inherit                                  |
| uploadedTo              | integer  | 媒体关联文章 ID            | 5678                                     |
| date                    | datetime | 媒体上传时间               | 2021-07-22T02:56:06.000Z                 |
| modified                | datetime | 媒体修改时间               | 2021-07-22T02:56:06.000Z                 |
| menuOrder               | integer  | 媒体排序                   | 0                                        |
| mime                    | string   | 媒体 MIME 类型             | image/png                                |
| type                    | string   | 媒体类型                   | image                                    |
| subtype                 | string   | 媒体后缀名                 | png                                      |
| icon                    | string   | 媒体类型图标               | /wp-includes/images/media/default.png    |
| dateFormatted           | date     | 媒体发布格式化时间         | 2021年12月13日                           |
| nonces.update           | string   | 上传随机数                 |                                          |
| nonces.delete           | string   | 删除随机数                 |                                          |
| nonces.edit             | string   | 编辑随机数                 |                                          |
| editLink                | string   | 媒体编辑链接               | /wp-admin/post.php?post=1234&action=edit |
| authorName              | string   | 上传作者显示名字           |                                          |
| authorLink              | string   | 上传作者后台页面链接       | /wp-admin/user-edit.php?user_id=1        |
| uploadedToTitle         | string   | 媒体关联文章标题           |                                          |
| uploadedToLink          | string   | 媒体关联文章编辑链接       | /wp-admin/post.php?post=5678&action=edit |
| filesizeInBytes         | integer  | 媒体文件大小（字节）       | 57574074                                 |
| filesizeHumanReadable   | string   | 媒体文件大小（本地格式化） | 55 MB                                    |
| context                 | string   | 媒体关联文字               |                                          |
| width                   | integer  | 媒体原始宽度（像素）       | 1280                                     |
| height                  | integer  | 媒体原始高度（像素）       | 720                                      |
| alt                     | string   | 图片 alt 替代文本          |                                          |
| orientation             | string   | 图片风格                   | landscape                                |
| sizes.thumbnail.height  | integer  | 图片缩略图高度（像素）     | 150                                      |
| sizes.thumbnail.width   | integer  | 图片缩略图宽度（像素）     | 150                                      |
| sizes.thumbnail.url     | string   | 图片缩略图地址             | /uploads/images-150x150.png              |
| sizes.medium.height     | integer  | 图片中等尺寸高度（像素）   | 300                                      |
| sizes.medium.width      | integer  | 图片中等尺寸宽度（像素）   | 300                                      |
| sizes.medium.url        | string   | 图片中等尺寸地址           | /uploads/images-300x300.png              |
| sizes.full.height       | integer  | 图片大尺寸高度（像素）     | 1000                                     |
| sizes.full.width        | integer  | 图片大尺寸宽度（像素）     | 1000                                     |
| sizes.full.url          | string   | 图片大尺寸地址             | /uploads/images-1000x1000.png            |
| meta.artist             | string   | 音频所属艺术家             | 贝多芬                                   |
| meta.album              | string   | 音频所属专辑               | Classics                                 |
| meta.bitrate            | string   | 音频码率（kbps）           | 1040                                     |
| meta.bitrate_mode       | string   | 音频编码方式               | vbr                                      |
| fileLength              | string   | 视频时间                   | 11:21                                    |
| fileLengthHumanReadable | string   | 视频时间（本地格式化）     | 11分, 21秒                               |
| image.src               | string   | 视频封面地址               | /wp-includes/images/media/video.png      |
| image.width             | integer  | 视频封面宽度（像素）       | 48                                       |
| image.height            | integer  | 视频封面高度（像素）       | 64                                       |
| thumb.src               | string   | 视频封面缩略图地址         | /wp-includes/images/media/video.png      |
| thumb.width             | integer  | 视频封面缩略图宽度（像素） | 48                                       |
| thumb.height            | integer  | 视频封面缩略图高度（像素） | 64                                       |
| compat.item             | string   | 媒体兼容性设置             |                                          |
| compat.meta             | string   | 媒体兼容性设置             |                                          |

## 相关资源
- [如何设置 WordPress Rest API 操作？](./wordpress-action.html)
- [wp_enqueue_media 函数](https://developer.wordpress.org/reference/functions/wp_enqueue_media/)
- [WordPress Cookie Authentication](https://wehtml.cn)
- [WordPress Basic Authentication](https://wehtml.cn)
