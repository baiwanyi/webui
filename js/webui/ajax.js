/**
 * WEBUI AJAX 操作类
 *
 * @since 1.0.0
 * 可配合 webuiSettings 参数使用，非必须。
 * - ajaxurl    AJAX 请求地址
 * - nonce      登录验证随机字符串
 * - token      登录验证代码，一般为用户名 + 空格 + 密钥，需要 Base64 转码
 */
export default class ajax {
    /**
     * AJAX 操作
     *
     * @since 1.0.0
     * @param string button     操作按钮元素
     * @param object options
     * {
     *  操作选项
     *  @var string     method      AJAX 请求方式，默认：POST
     *  @var boolean    login       是否需要登录，参数：wp、basic
     *  @var string     form        加载表单 ID
     *  @var string     ajax        AJAX 请求名称
     *  @var string     ajaxurl     AJAX 请求地址
     *  @var object     action      AJAX 请求动作，WP 使用
     *  @var string     data        AJAX 请求参数
     *  @var boolean    loading     是否显示加载动画，默认：false
     *  @var function   success     AJAX 请求成功应用函数
     *  @var function   beforesend  AJAX 请求发送前应用函数
     *  @var function   error       AJAX 请求失败应用函数
     *  @var function   complete    AJAX 请求完成应用函数
     * }
     */
    static ajax = (button, options) => {

        // 设定请求选项默认值
        var defaults = {
            method: 'POST',
            login: null,
            form: null,
            ajax: '',
            ajaxurl: webuiSettings.ajaxurl,
            data: {},
            success: '',
            beforesend: '',
            error: '',
            complete: '',
        }

        /** 设定参数默认值 */
        var options = $.extend(defaults, options)

        /**
         * 在是按钮触发 AJAX 操作时，优先判断按钮是否在 POST 表单 DOM 中，是则获取该表单 DOM 的 ID 属性
         * 如不存在 POST 表单 DOM，则获取选项设置的表单 ID 名称
         */
        if (null != button) {
            options.form =
                button.parents('form[method="POST"]').attr('id') || options.form
        }

        /** 判断表单 ID 读取表单内容 */
        if (options.form) {
            options.data = ajax.form('#' + options.form, options.data)
        }

        if (webuiSettings.debug) {
            console.log(options)
        }

        /** 执行AJAX操作 */
        $.ajax({
            url: options.ajaxurl + options.ajax,
            type: options.method,
            dataType: 'json',
            data: options.data,
            beforeSend: function (xhr) {

                /** 判断登录请求 */
                if (options.login) {
                    // 设定请求认证头部信息，WP 本站
                    if ('wp' == options.login) {
                        xhr.setRequestHeader('X-WP-Nonce', webuiSettings.nonce)
                    }

                    // 设定请求认证头部信息，跨域站点
                    if ('basic' == options.login) {
                        xhr.setRequestHeader(
                            'Authorization',
                            'Basic ' + webuiSettings.token
                        )
                    }
                }

                /** 判断发送请求前执行函数 */
                if ('function' == typeof options.beforesend) {
                    let before = options.beforesend(xhr, options.data)

                    // 判断中止 AJAX 操作
                    if (false === before) {
                        xhr.abort()
                    }
                }
            },
            success: function (result, textStatus, xhr) {
                if (webuiSettings.debug) {
                    console.log(result)
                }

                /** 判断请求成功执行函数 */
                if ('function' == typeof options.success) {
                    let success = options.success(result, textStatus, xhr)

                    if (false === success) {
                        return
                    }
                }

                let _data = result.data || ''
                let _code = result.code || ''
                let _message = result.message || ''
                let _disabled = _data.disabled || ''
                let _value = _data.value || ''
                let _remove = _data.remove || ''
                let _url = _data.url || ''

                // 请求成功时调用 alert 组件
                if ('alert' == _code) {
                    ajax.display_alert(_message, _data)
                }

                // 请求成功时调用 modal 组件
                if ('modal' == _code) {
                    ajax.display_modal(_message, _data, true)
                }

                // 请求成功时调用 sidebar 组件
                if ('sidebar' == _code) {
                    ajax.display_sidebar(_message, _data)
                }

                // 请求成功时调用 toast 组件
                if ('toast' == _code) {
                    ajax.display_toast(_message, _data)
                }

                // 请求成功时渲染  template 模板
                if ('template' == _code) {
                    ajax.display_template(_message, _data)
                }

                // 请求完成时禁用表单
                if (_disabled) {
                    ajax.modify_disabled(_disabled)
                }

                // 请求完成时修改表单值
                if (_value) {
                    ajax.modify_value(_value)
                }

                // 请求完成时删除 DOM 元素
                if (_remove) {
                    ajax.modify_remove(_remove, button)
                }

                // 请求完成时转跳指定 URL
                if (_url) {
                    ajax.modify_url(_url)
                }
            },
            error: function (result) {
                if (webuiSettings.debug) {
                    console.log(result)
                }

                /** 判断请求失败执行函数 */
                if ('function' == typeof options.error) {
                    options.error(result)
                }
            },
            complete: function () {
                /** 判断请求失败执行函数 */
                if ('function' == typeof options.complete) {
                    options.complete(button)
                }
            },
        })
    }

    /**
     * 获取数组格式的表单内容
     *
     * @since 1.0.0
     * @param string t 需要读取的表单 ID
     */
    static form(t, j) {
        j = j || {}
        let obj = $(t).serializeArray()
        $.each(obj, function () {
            if (j[this.name]) {
                if (!j[this.name].push) {
                    j[this.name] = [j[this.name]]
                }
                j[this.name].push(this.value || '')
                j[this.name] = j[this.name].join(',')
            } else {
                j[this.name] = this.value || ''
            }
        })
        return j
    }

    /**
     * 请求成功时调用 alert 组件
     *
     * @since 1.0.0
     * @param string message    alert 显示的信息
     * @param object data
     * {
     *  @var string icon alert 组件的图标或状态颜色，如：success、danger、info...
     * }
     */
    static display_alert = (message, data) => {
        let _alert_message = message || '未知消息'
        let _alert_icon = data.icon || 'error'
        let _alert_wrapper = data.wrapper || 'body'
        webui.alert(_alert_icon, _alert_message, _alert_wrapper)
    }

    /**
     * 请求成功时调用 toast 组件
     *
     * @since 1.0.0
     * @param string message    toast 显示的信息
     * @param object data
     * {
     *  @var string icon toast 组件的图标
     * }
     */
    static display_toast = (message, data) => {
        webui.toast(data.icon, message, true)
    }

    /**
     * 请求成功时调用 modal 组件
     *
     * @since 1.0.0
     * @param string message    modal 内容模版 ID
     * @param object data
     * {
     *  @var string content     渲染模版的内容数据
     *  @var string qrcode      显示 modal 组件后生成二维码内容
     *  @var object settings    显示 modal 组件的设置参数。参考 webui.modal
     * }
     */
    static display_modal = (template, options) => {
        let _modal_data = options.settings
        let _modal_template = template || ''
        let _modal_qrcode = options.qrcode || ''
        let _modal_content = options.content || {}

        if (_modal_template) {
            _modal_data['content'] = webui.load(_modal_template, _modal_content)
            webui.modal(_modal_data)
        }

        if (_modal_qrcode) {
            webui.qrcode('#webui-qrcode', _modal_qrcode)
        }
    }

    /**
     * 请求成功时调用 sidebar 组件
     *
     * @since 1.0.0
     * @param string message    sidebar 内容模版 ID
     * @param object data
     * {
     *  @var string content     渲染模版的内容数据
     *  @var object settings    显示 modal 组件的设置参数。参考 webui.sidebar
     * }
     */
    static display_sidebar = (template, options) => {
        let _sidebar_data = options.settings
        let _sidebar_template = template || ''
        let _sidebar_content = options.content || {}

        if (_sidebar_template) {
            _sidebar_data['content'] = webui.load(
                _sidebar_template,
                _sidebar_content
            )
            webui.sidebar(_sidebar_data)
        }
    }

    /**
     * 请求成功时渲染 template 模板
     *
     * @since 1.0.0
     * @param string message    显示模版 ID 名
     * @param object data
     * {
     *  @var string content 渲染模版的内容数据
     *  @var object body    显示的 DOM 元素，默认：body
     * }
     */
    static display_template = (template, data) => {
        let _body = data['body'] || 'body'
        let _content = data['content'] || {}

        webui.html(_body, template, _content)
    }

    /**
     * 请求完成时禁用表单
     *
     * @since 1.0.0
     * @param object data
     * {
     *  @var string     key     禁用的表单 name 属性值
     *  @var boolean    value   解除禁用：false，禁用表单：true
     * }
     */
    static modify_disabled = (data) => {
        $.each(data, function (name, disabled) {
            $('[name="' + name + '"]').attr('disabled', disabled)
        })
    }

    /**
     * 请求完成时修改表单值
     *
     * @since 1.0.0
     * @param object data
     * {
     *  @var string key     需要修改的表单 name 属性值
     *  @var string value   需要修改的表单值
     * }
     */
    static modify_value = (data) => {
        $.each(data, function (name, value) {
            $('[name="' + name + '"]').val(value)
        })
    }

    /**
     * 请求完成时删除 DOM 元素
     *
     * @since 1.0.0
     * @param string div    要删除的 DOM 元素，如值为 tr 则删除当前操作 DOM 元素的父级表格行
     * @param object button 触发请求操作的 DOM 元素
     */
    static modify_remove = (div, button) => {
        if ('tr' == div) {
            var _remove = $(button).parents('tr')
        } else {
            var _remove = $(div)
        }

        _remove.css('background', '#e9686b').fadeOut(500, () => {
            $(this).remove()
        })
    }

    /**
     * 请求完成时删除 DOM 元素
     *
     * @since 1.0.0
     * @param string url 要转跳的 URL 地址链接，如值为 reload 则刷新当前页面
     */
    static modify_url = (url) => {

        if ('reload' == url) {
            window.location.reload()
            return
        }

        window.location.href = url
    }
}
