import sidebar from './sidebar';
/**
 * WordPress 相关函数
 *
 * @since 1.0.0
 * - action         前台 AJAX 操作
 * - admin          后台 AJAX 操作
 * - uploader       后台上传
 */
export default class wordpress {

    static ajax = (method, ajax, options) => {

        var defaults = {
            method: method,
            ajaxurl: ajaxurl,
            data: {},
        }

        /** 设定参数默认值 */
        var options = $.extend(defaults, options)

        options.data['ajax'] = ajax
        options.data['action'] = 'wwpoupdatepost'
        options.data['pagenonce'] = webuiSettings.pagenonce
        options.data['pagenow'] = webuiSettings.pagenow

        webui.ajax(null, options)
    }

    /**
     * 前台 AJAX 操作动作
     *
     * @since 1.0.0
     */
    static action = (button, data, method, login) => {
        // 设定默认参数
        data = data || {}
        method = method || 'POST'
        login = login || false

        let form = null

        // 判断当前按钮对象父级表单 method 属性
        if (button) {
            //
            if (button.parents('form').length) {
                method = button.parents('form').attr('method')
            }

            form = button.attr('form') || null

            // 设定 AJAX 操作参数
            data['action'] = button.val()
        }

        if ('POST' == method) {
            login = 'wp'
        }

        // 判断需要登录传入 token 参数
        if (login) {
            data['token'] = webuiSettings.token
        }

        // 设定 modal 组件参数默认值
        let _modal_title = data.modalTitle || ''
        let _modal_size = data.modalSize || ''
        let _modal_close = data.modalClose || false
        let _modal_button = data.modalButton || ''

        // 删除 modal 组件参数，防止参数提交到 AJAX
        if (_modal_title) {
            delete data.modalTitle
        }
        if (_modal_size) {
            delete data.modalSize
        }
        if (_modal_close) {
            delete data.modalClose
        }
        if (_modal_button) {
            delete data.modalButton
        }

        let options = {
            method: method,
            ajax: '/wwpo/ajax/action',
            data: data,
            login: login,
            form: form,
            beforesend: () => {
                // 判断显示 modal 组件
                if (_modal_title) {
                    let _modal_options = {
                        title: _modal_title,
                        size: _modal_size,
                        close: _modal_close,
                        content: webui.loading(),
                    }

                    if (_modal_button) {
                        _modal_options[button] = {
                            action: 'ajax',
                            title: '保存更改',
                            value: _modal_button,
                        }
                    }

                    webui.modal(_modal_options)
                }
            },
            error: (result) => {
                let message = '未知错误'

                if ('undefined' == typeof result.responseJSON) {
                    message = result.responseText
                } else {
                    message = result.responseJSON.message
                }

                webui.alert('danger', message)
            },
        }

        webui.ajax(button, options)
    }

    /**
     * 后台 AJAX 操作动作
     *
     * @since 1.0.0
     */
    static admin = (button) => {
        let _data = {}
        let _form = null

        // 判断当前按钮对象父级表单 method 属性
        if (button) {
            // 设定按钮 dataset
            _data = button.data() || {}
            _form = button.attr('form') || null

            if (button.parents('form').length) {
                _form = button.parents('form').attr('id')
            }
        }

        _data['action'] = 'wwpoupdatepost'
        _data['ajax'] = button.val() || ''
        _data['pagenonce'] = webuiSettings.pagenonce
        _data['pagenow'] = webuiSettings.pagenow

        if ('undefined' != typeof $('input[name="bulk_ids"]').val()) {
            let _bulk_ids = []
            $('input[name="bulk_ids"]:checked').each(function () {
                _bulk_ids.push($(this).val())
            })

            _data['bulk_ids'] = _bulk_ids
            _data['bulk_action'] = $('select[name="bulkaction"]').val()
        }

        let options = {
            ajaxurl: ajaxurl,
            data: _data,
            form: _form,
            beforesend: () => {
                if ($('#message').length) {
                    $('#message').addClass('hidden').removeClass('error')
                } else {
                    $('hr.wp-header-end').after(
                        '<div id="message" class="hidden notice is-dismissible"><p></p><button type="button" class="notice-dismiss"><span class="screen-reader-text">忽略此通知。</span></button></div>'
                    )
                }
            },
            success: (result) => {
                let code = ['sidebar', 'modal', 'toast', 'alert', 'url'];

                if (-1 != code.indexOf(result.code)) {
                    return true
                } else {
                    sidebar.close('[id^="webui-sidebar"]')
                }

                $('#message').addClass(result.data.css).removeClass('hidden')
                $('#message').find('p').html(result.message)

                /** 返回页面顶部 */
                $('html, body').scrollTop(0);

                return false
            },
            error: (result) => {

                if ('undefined' != typeof result.responseText) {
                    $('#message').addClass('error').removeClass('hidden')
                    $('#message').find('p').html('<strong>' + result.statusText + '</strong>' + result.responseText)
                }
            }
        }

        webui.click('button.notice-dismiss', () => {
            $('#message').fadeOut(300, () => {
                $('#message').remove()
            })
        })

        webui.ajax(button, options)
    }

    /**
     * 后台上传
     *
     * @since 1.0.0
     */
    static uploader = (options) => {
        let defaults = {
            title: '媒体库',
            type: 'image',
            selection: 0,
            multiple: false,
            callback: '',
            author: null,
            button_text: '选择',
        }

        var options = $.extend(defaults, options)

        // 设定上传文件类型
        let library = {
            type: options.type,
        }

        // 设定只显示指定用户的上传文件列表
        if (options.author) {
            library['author'] = options.author
        }

        /** 设定上传内容 */
        let custom_uploader = (wp.media.frames.file_frame = wp.media({
            /** 弹出层标题 */
            title: options.title,

            /** 媒体库内容。type：设定类型，author：上传人 */
            library: library,

            /** 按钮标签 */
            button: {
                text: options.button_text,
            },

            /** 设置是否多个上传 */
            multiple: options.multiple,
        }))

        /** 设定打开弹出层时默认选中的媒体ID */
        custom_uploader.on('open', function () {
            custom_uploader
                .state()
                .get('selection')
                .add(wp.media.attachment(options.selection))
        })

        /** 执行打开弹出层操作 */
        custom_uploader.open()

        /** 设定上传选择内容 */
        custom_uploader.on('select', function () {

            /**  */
            let selected = custom_uploader.state().get('selection')

            /** 设定选择媒体内容 */
            let attachment = {}

            if (options.multiple) {
                attachment = selected.toJSON()
            } else {
                attachment = selected.first().toJSON()
            }

            if (webuiSettings.debug) {
                console.log(attachment)
            }

            if ('function' == typeof options.callback) {
                options.callback(attachment)
            }
        })
    }
}
