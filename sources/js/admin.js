/**
 * WEBUI 主文件
 *
 * @since 1.0.0
 */

/**
 * ------------------------------------------------------------------------
 * 引入文件
 * ------------------------------------------------------------------------
 */
import 'bootstrap'
import webui from './webui/webui'
import wordpress from './webui/wordpress'
import './webui/methods'

/**
 * ------------------------------------------------------------------------
 * 暴露命名空间
 * ------------------------------------------------------------------------
 */
window.webui = webui || {}
webui.wp = wordpress

/**
 * ------------------------------------------------------------------------
 * AJAX 提交操作
 * ------------------------------------------------------------------------
 */
webui.click('[data-action="wpajax"]', (current) => {

    let _data = current.data() || {}

    _data['action'] = 'wwpoupdatepost'
    _data['ajax'] = current.val() || ''
    _data['pagenonce'] = webuiSettings.pagenonce
    _data['pagenow'] = webuiSettings.pagenow

    let options = {
        ajaxurl: ajaxurl,
        data: _data,
        beforesend: () => {
            if ($('#message').length) {
                $('#message').addClass('hidden').removeClass('error')
            } else {
                $('hr.wp-header-end').after(
                    '<div id="message" class="hidden notice is-dismissible"><p></p><button type="button" class="notice-dismiss"><span class="screen-reader-text">忽略此通知。</span></button></div>'
                )
            }

            $('button').attr('disabled', true)
            $('h1.wp-heading-inline').append('<div id="webui-loading" class="webui-loading small" role="status"></div>')
        },
        success: (result) => {

            let code = ['sidebar', 'modal', 'toast', 'alert', 'url', 'value'];

            if (-1 != code.indexOf(result.code)) {
                return true
            }
            // else {
            //     sidebar.close('[id^="webui-sidebar"]')
            // }

            /** 返回页面顶部 */
            $('html, body').scrollTop(0)

            if ('toast' != result.code) {
                $('#message').addClass(result.data.css).removeClass('hidden')
                $('#message').find('p').html(result.message)
                return false
            }
        },
        error: (result) => {

            if ('undefined' == typeof result.responseText) {
                return
            }

            $('#message').addClass('error').removeClass('hidden')
            $('#message').find('p').html('<strong>' + result.statusText + '</strong>' + result.responseText)
        },
        complete: () => {
            $('button').removeAttr('disabled')
            $('#webui-loading').remove()
        }
    }

    webui.click('button.notice-dismiss', () => {
        $('#message').fadeOut(300, () => {
            $('#message').remove()
        })
    })

    webui.ajax(current, options)
});

/**
 * ------------------------------------------------------------------------
 * 关闭消息操作
 * ------------------------------------------------------------------------
 */
webui.click('button.notice-dismiss', () => {
    $('#message').fadeOut(300, () => {
        $('#message').remove()
    })
})

/**
 * ------------------------------------------------------------------------
 * 提交按钮加载操作
 * ------------------------------------------------------------------------
 */
$(document).on('click', 'button[name="submit"]', function (event) {

    //
    if ($('#webui-loading').length) {
        event.preventDefault()
        return
    }

    $('body, html').scrollTop(0)
    $('button').addClass('disabled')
    $('.wp-header-end').before('<div id="webui-loading" class="webui-loading small ms-2" role="status"></div>')
})
