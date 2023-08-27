import tmpl_sidebar from '../html/sidebar.html'
import webui from './webui'
/**
 * 侧边栏
 *
 * @since 1.0.0
 * @param object data
 * {
 *  设置参数
 *  @var string     id          侧边栏 ID，默认：main
 *  @var string     title       侧边栏标题
 *  @var string     content     侧边栏内容
 *  @var boolean    scroll      是否允许页面滚动，默认：false
 *  @var boolean    backdrop    是否显示背景，默认：false
 *  @var string     size        侧边栏位置，默认：end。可选项：start左，end右，top上，bottom下
 * }
 */
export default class sidebar {
    static display = (data) => {
        // 设定参数默认值
        let sidebar_id = data['id'] || 'main'
        let title = data['title'] || ''
        let content = data['content'] || ''
        let button = data['button'] || ''
        let scroll = data['scroll'] || false
        let backdrop = data['backdrop'] || false
        let size = data['size'] || 'end'
        let _sidebar_id = '#webui-sidebar-' + sidebar_id

        /** 判断当前 ID 弹出层存在，移除并关闭弹出层 */
        if ($(_sidebar_id).length) {
            sidebar.close(_sidebar_id)
        }

        // 加载弹出层内容
        $('body').append(
            webui.template(tmpl_sidebar, {
                id: sidebar_id,
                title: title,
                content: content,
                size: size,
                backdrop: backdrop,
                button: button
            })
        )

        // 返回弹出层内容顶部并显示弹出层
        $(_sidebar_id).find('.offcanvas-body').scrollTop(0)

        // 显示侧边栏
        $(_sidebar_id).addClass('show').css('visibility', 'visible')

        // 判断显示背景图层
        if (backdrop) {
            $(_sidebar_id + '-backdrop').addClass('show')
        }

        // 判断是否禁用滚动条
        if (!scroll) {
            let _width = sidebar.width()
            $('body').addClass('overflow-hidden').css('padding-right', _width)
        }

        // 绑定关闭动作
        webui.click(
            '[data-bs-dismiss="offcanvas"], .offcanvas-backdrop',
            () => {
                sidebar.close(_sidebar_id)
            }
        )
    }

    static width = () => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        const documentWidth = document.documentElement.clientWidth
        return Math.abs(window.innerWidth - documentWidth)
    }

    static close = (sidebar_id) => {
        // 移除侧边栏显示样式
        $(sidebar_id).removeClass('show')

        // 移除侧边栏背景样式
        $(sidebar_id + '-backdrop').removeClass('show')

        // 移除滚动条内容
        setTimeout(() => {
            $(sidebar_id).removeAttr('style').remove()
            $(sidebar_id + '-backdrop').remove()

            if ($('.modal').length) {
                return;
            }

            // 移除滚动条禁用样式
            $('body').removeClass('overflow-hidden').removeAttr('style')
        }, 200)
    }
}
