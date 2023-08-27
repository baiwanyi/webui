import tmpl_modal from '../html/modal.html'

/**
 * 弹出层
 *
 * @since 1.0.0
 * @param object data
 * {
 *  设置参数
 *  @var string     id      弹出层 ID，默认：main
 *  @var string     title   弹出层标题
 *  @var string     content 弹出层内容
 *  @var boolean    close   是否显示关闭按钮，默认：false
 *  @var object     button  操作按钮
 *  {
 *      按钮参数
 *      @var string title   表单标题
 *      @var string action  按钮动作
 * }
 *  @var string     size    弹出层尺寸，默认：fullscreen
 * }
 */
export default class modal {
    static display = (data) => {
        // 设定参数默认值
        let modal_id = data['id'] || 'main'
        let title = data['title'] || ''
        let content = data['content'] || ''
        let close = data['close'] || false
        let button = data['button'] || ''
        let size = data['size'] || ''
        let _modal_id = '#webui-modal-' + modal_id

        /** 判断当前 ID 弹出层存在，移除并关闭弹出层 */
        if ($(_modal_id).length) {
            modal.close(_modal_id)
        }

        // 设定弹出层尺寸样式
        if (size) {
            size = 'modal-' + size
        }

        // 加载弹出层内容
        $('body').append(
            webui.template(tmpl_modal, {
                id: modal_id,
                title: title,
                content: content,
                close: close,
                size: size,
                button: button,
            })
        )

        // 返回弹出层内容顶部并显示弹出层
        if (1 < $('.modal').length) {
            $(_modal_id).find('.modal-body').scrollTop(0)
        }

        // 显示弹出层
        modal.show(_modal_id)

        // 绑定关闭动作
        webui.click('[data-action="dismissmodal"]', (current) => {
            let _target = current.data('target')
            modal.close(_target)
        })
    }

    /**
     * 显示弹出层函数
     *
     * @since 1.0.0
     * @param string modal_id   弹出层 ID
     */
    static show = (modal_id) => {
        // 显示弹出层背景
        $(modal_id + '-backdrop').addClass('show')

        let _width = modal.width()
        $('body').addClass('overflow-hidden').css('padding-right', _width)

        // 显示弹出层
        $(modal_id).show()

        // 给弹出层添加显示样式
        // 页面 body 添加样式，禁用滚动条
        setTimeout(() => {
            $(modal_id).addClass('show')
        }, 100)
    }

    /**
     * 关闭弹出层函数
     *
     * @since 1.0.0
     * @param string modal_id   弹出层 ID
     */
    static close = (modal_id) => {
        // 隐藏弹出层背景
        $(modal_id + '-backdrop').removeClass('show')

        // 移除弹出层显示样式
        $(modal_id).removeClass('show')

        // 页面 body 移除滚动条样式
        if (1 == $('.modal').length) {
            $('body').removeClass('overflow-hidden').removeAttr('style')
        }

        // 移除弹出层内容
        setTimeout(() => {
            $(modal_id + '-backdrop').remove()
            $(modal_id).hide().remove()
        }, 200)
    }

    static width = () => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        const documentWidth = document.documentElement.clientWidth
        return Math.abs(window.innerWidth - documentWidth)
    }
}
