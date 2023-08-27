/**
 * 消息信息
 *
 * @since 1.0.0
 * @param string    css    消息样式
 * @param string    text   消息文本
 */
var alert = (css, text, div) => {

    // 显示位置默认值
    div = div || 'body'

    // 消息样式默认值
    css = css || 'danger'

    // 消息文本默认值
    text = text || '未知消息'

    if ($('[role="ajax"]').length) {
        div = '[role="ajax"]'
    }

    // 显示消息内容
    $('#webui-alert').remove()

    let _alert_body = webui.template('<div class="alert alert-{{data.css}} alert-dismissible fade show" id="webui-alert" role="alert">{{{data.text}}}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>', { css: css, text: text })

    if ($('body').find('[id^="webui-modal"]').length) {
        let _modal_body = $('body').find('.modal .modal-body')
        _modal_body.prepend(_alert_body)
        _modal_body.scrollTop(0)
        return
    }

    $(div).prepend(_alert_body)

    /** 返回页面顶部 */
    $('html, body').scrollTop(0)
}

export default alert
