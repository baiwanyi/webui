import tmpl_message from '../html/message.html'
/**
 * 气泡提示框
 *
 * @since 1.0.0
 * @param object data
 * {
 *  设置参数
 *  @var string     id          气泡提示框 ID，默认：main
 *  @var string     user        发布者
 *  @var string     time        发布时间
 *  @var string     image       显示头像
 *  @var string     position    气泡提示框位置，默认：bottom-end（右下角）
 *  @var string     content     气泡提示框内容
 * }
 * @todo 同时出现 5 个气泡提示框，超过 5 个消除最先出现的
 */
var message = (data) => {
    // 设定参数默认值
    let message_id = data['id'] || 'main'
    let user = data['user'] || ''
    let time = data['time'] || ''
    let image = data['image'] || ''
    let position = data['position'] || 'bottom-end'
    let content = data['content'] || ''

    /** 设定气泡提示框位置 */
    switch (position) {
        case 'top-end':
            var css = 'top-0 end-0'
            break

        case 'top-start':
            var css = 'top-0 start-0'
            break

        case 'bottom-start':
            var css = 'bottom-0 start-0'
            break

        default:
            var css = 'bottom-0 end-0'
            break
    }

    // 判断查询页面内存在提示框移除
    if ($('#webui-message-' + message_id).length) {
        $('#webui-message-' + message_id).remove()
    }

    // 加载气泡提示框内容
    $('body').append(
        webui.template(tmpl_message, {
            id: message_id,
            user: user,
            content: content,
            css: css,
            time: time,
            image: image,
        })
    )

    // 显示气泡提示框
    $('#webui-message-' + message_id)
        .find('.toast')
        .addClass('show')

    // 绑定关闭动作
    webui.click('[data-bs-dismiss="toast"]', () => {
        $('#webui-message-' + message_id)
            .find('.toast')
            .removeClass('show')
        setTimeout(() => {
            $('#webui-message-' + message_id).remove()
        }, 200)
    })
}

export default message
