/**
 * WEBUI 有用的 DOM 操作
 *
 * @since 1.0.0
 */

/**
 * ------------------------------------------------------------------------
 * 引用文件
 * ------------------------------------------------------------------------
 */
import alert from './alert'
import ajax from './ajax'
import base64 from './base64'
import event from './event'
import message from './message'
import modal from './modal'
import pagination from './pagination'
import qrcode from './qrcode'
import sidebar from './sidebar'
import scroll from './scroll'
import string from './string'
import toast from './toast'
import url from './url'
import user from './user'

export default class webui {
    /**
     * ------------------------------------------------------------------------
     * Base64 应用函数
     * ------------------------------------------------------------------------
     */
    static base64 = base64

    /**
     * ------------------------------------------------------------------------
     * 弹出层应用函数
     * ------------------------------------------------------------------------
     */
    static main = {
        modal: modal,
        sidebar: sidebar
    }

    /**
     * ------------------------------------------------------------------------
     * 字符串应用函数
     * ------------------------------------------------------------------------
     */
    static string = string

    /**
     * ------------------------------------------------------------------------
     * URL 应用函数
     * ------------------------------------------------------------------------
     */
    static url = url

    /**
     * ------------------------------------------------------------------------
     * 用户应用函数
     * ------------------------------------------------------------------------
     */
    static user = user

    /**
     * ------------------------------------------------------------------------
     * 模版应用函数
     * ------------------------------------------------------------------------
     */

    /**
     * 在元素之后插入模版内容
     *
     * @since 1.0.0
     */
    static after = (div, template_id, data) => {
        $(div).after(this.load(template_id, data))
    }

    /**
     * 在元素的结尾插入模版内容
     *
     * @since 1.0.0
     */
    static append = (div, template_id, data) => {
        $(div).append(this.load(template_id, data))
    }

    /**
     * 在元素之前插入模版内容
     *
     * @since 1.0.0
     */
    static before = (div, template_id, data) => {
        $(div).before(this.load(template_id, data))
    }

    /**
     * 使用模版内容覆盖元素
     *
     * @since 1.0.0
     */
    static html = (div, template_id, data) => {
        $(div).html(this.load(template_id, data))
    }

    /**
     * 渲染加载模版内容
     *
     * @since 1.0.0
     * @param string template_id    页面模板 ID
     * @param object data           内容数据
     *
     * 操作步骤：
     * - 获取模板内容
     * - 使用传入数据格式化显示内容数据
     */
    static load = (template_id, data) => {
        let template = $('#tmpl-' + template_id).html()
        return this.template(template, data)
    }

    /**
     * 加载本地模版到元素
     *
     * @since 1.0.0
     * @param string div    显示位置元素 ID
     * @param string url    页面模板地址
     * @param object data   内容数据
     */
    static page = (div, url, data) => {
        // 设定传参默认值
        data = data || {}

        // 使用 AJAX 进行页面模版读取
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'html',
            success: function (result) {
                $(div).html(this.template(result, data))
            },
        })
    }

    /**
     * 在元素的开头插入模版内容
     *
     * @since 1.0.0
     */
    static prepend = (div, template_id, data) => {
        $(div).prepend(this.load(template_id, data))
    }

    /**
     * 设定 Lodash 模版应用
     *
     * @since 1.0.0
     * @param string template    模版内容
     * @param object data        内容数据，模版使用 data.{key} 进行数据调用
     * @see https://www.lodashjs.com/
     */
    static template = (template, data) => {
        data = data || {}
        let compiled,
            format = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
                escape: /\{\{([^\}]+?)\}\}(?!\})/g,
                variable: 'data',
            }

        compiled = compiled || _.template(template, format)
        return compiled(data)
    }

    /**
     * ------------------------------------------------------------------------
     * 二维码应用函数
     * ------------------------------------------------------------------------
     */
    /**
     * 绘制画布二维码
     *
     * @since 1.0.0
     * @param string div        显示的 DOM 元素
     * @param string content    需要生成二维码的内容
     * @param object options    二维码生成选项
     */
    static qrcode = (div, content, options) => {
        qrcode.canvas(div, content, options)
    }

    /**
     * 绘制 Base64 格式二维码
     *
     * @since 1.0.0
     * @param string div        显示的 DOM 元素
     * @param string content    需要生成二维码的内容
     * @param object options    二维码生成选项
     */
    static qrcode64 = (div, content, options) => {
        qrcode.base64(div, content, options)
    }

    /**
     * ------------------------------------------------------------------------
     * AJAX 事件
     * ------------------------------------------------------------------------
     */
    /**
     * 设定 AJAX 操作函数
     *
     * @since 1.0.0
     * @param string button     操作按钮元素
     * @param object options    操作选项
     */
    static ajax = (button, options) => {
        return ajax.ajax(button, options)
    }

    /**
     * 设定获取表单内容函数
     *
     * @since 1.0.0
     * @param string div 表单 DOM 元素
     */
    static form = (div) => {
        return ajax.form(div)
    }

    /**
     * ------------------------------------------------------------------------
     * jQuery 事件
     * ------------------------------------------------------------------------
     */
    /**
     * 变更事件
     *
     * @since 1.0.0
     * @param string    current     触发事件的 DOM 元素
     * @param function  callback    回调函数
     */
    static change = (current, callback) => {
        event.on('change', current, callback)
    }

    /**
     * 点击事件
     *
     * @since 1.0.0
     * @param string    current     触发事件的 DOM 元素
     * @param function  callback    回调函数
     */
    static click = (current, callback) => {
        event.on('click', current, callback)
    }

    /**
     * 焦点事件
     *
     * @since 1.0.0
     * @param string    current     触发事件的 DOM 元素
     * @param function  callback    回调函数
     */
    static focus = (current, callback) => {
        event.on('focus', current, callback)
    }

    /**
     * 输入事件
     *
     * @since 1.0.0
     * @param string    current     触发事件的 DOM 元素
     * @param function  callback    回调函数
     */
    static input = (current, callback) => {
        event.on('input propertychange', current, callback)
    }

    /**
     * 初始化加载事件
     *
     * @since 1.0.0
     * @param function callback 回调函数
     */
    static ready = (callback) => {
        $(() => {
            /**
             * 绑定回车提交表单
             *
             * @since 1.0.0
             */
            $(document).on('keypress', (event) => {
                if (0 == $('button[submited]').length) {
                    return
                }

                if ('Enter' == event.key) {
                    $('button[submited]').click()
                    return false
                }
            })

            // 全局加载函数
            if ('function' === typeof callback) {
                callback()
            }
        })
    }

    /**
     * 触发 jQuery.scroll 事件
     *
     * @since 1.0.0
     * @param string current    触发事件的 DOM 元素，默认：document
     * @param function callback 回调函数
     */
    static scroll = (options) => {
        scroll.now(options)
    }

    /**
     * 监听滚动到底部
     *
     * @since 1.0.0
     * @param objcet options 选项设置
     */
    static bottom = (options) => {
        scroll.bottom(options)
    }

    /**
     * ------------------------------------------------------------------------
     * 模版组件
     * ------------------------------------------------------------------------
     */
    /**
     * 消息内容
     *
     * @since 1.0.0
     * @param string css    消息样式
     * @param string text   消息文本
     * @param string div    插入的 DOM 元素位置，默认：body
     */
    static alert = (css, text, div) => {
        return alert(css, text, div)
    }

    /**
     * 加载动画
     *
     * @since 1.0.0
     * @param string align 动画位置，默认：center
     */
    static loading = (align) => {
        align = align || 'center'
        return webui.template('<div class="d-flex justify-content-{{data.align}} w-100 my-5" id="site-loading"><div class="spinner-border" role="status"></div></div>', {
            align: align,
        })
    }

    /**
     * 消息框
     *
     * @since 1.0.0
     * @param object data 选项参数
     */
    static message = (data) => {
        return message(data)
    }

    /**
     * 弹出层
     *
     * @since 1.0.0
     * @param object data 选项参数
     */
    static modal = (data) => {
        return modal.display(data)
    }

    /**
     * 下一页分页
     *
     * @since 1.0.0
     * @param integer   paged       当前页码
     * @param integer   maxpaged    最大页码
     * @param string    action      加载内容 AJAX 动作
     */
    static nextpaged = (paged, maxpaged, action) => {
        return pagination.next(paged, maxpaged, action)
    }

    /**
     * 页码分页
     *
     * @since 1.0.0
     * @param integer   paged       当前页码
     * @param integer   maxpaged    最大页码
     * @param string    action      加载内容 AJAX 动作
     */
    static paged = (paged, maxpaged, action) => {
        return pagination.paged(paged, maxpaged, action)
    }

    /**
     * 提示框
     *
     * @since 1.0.0
     * @param string    icon    图标
     * @param string    text    消息文本
     * @param boolean   close   是否自动关闭，默认：false
     */
    static toast = (icon, text, close) => {
        return toast(icon, text, close)
    }

    /**
     * 侧边栏显示
     *
     * @since 1.0.0
     * @param object data 选项参数
     */
    static sidebar = (data) => {
        return sidebar.display(data)
    }
}
