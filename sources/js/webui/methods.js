/**
 * WEBUI 有用的 DOM 操作组件
 *
 * @since 1.0
 */

/**
 * ------------------------------------------------------------------------
 * 引用文件
 * ------------------------------------------------------------------------
 */
import webui from './webui'

/**
 * ------------------------------------------------------------------------
 * 动作常量
 * ------------------------------------------------------------------------
 */
const ACTION_BACK = 'a[rel="back"], [data-action="back"]'
const ACTION_BTN_URL = '[data-action="url"]'
const ACTION_CLOSE = 'a[rel="close"], [data-action="close"]'
const ACTION_COPY = '[data-action="copy"]'
const ACTION_GOTO = 'a[rel="goto"]'
const ACTION_GOTOP = 'a[rel="gotop"], [data-action="gotop"]'
const ACTION_REFRESH = 'a[rel="refresh"], [data-action="refresh"]'

/**
 * 返回上一页链接
 *
 * @since 1.0.0
 */
webui.click(ACTION_BACK, () => {
    window.history.back()
})

/**
 * 转跳到页面顶部
 *
 * @since 1.0.0
 */
webui.click(ACTION_GOTOP, () => {
    $('body,html').animate(
        {
            scrollTop: 0,
        },
        300
    )
    return false
})

/**
 * 转跳到页面指定描点位置
 *
 * @since 1.0.0
 */
webui.click(ACTION_GOTO, (current) => {
    let _href = current.attr('href')
    let _scrollTop = $(_href).offset().top - 120
    $('body,html').animate(
        {
            scrollTop: _scrollTop,
        },
        300
    )
    return false
})

/**
 * 关闭页面窗口
 *
 * @since 1.0.0
 */
webui.click(ACTION_CLOSE, () => {
    window.close()
    WeixinJSBridge.call('closeWindow')
})

/**
 * 刷新当前页面
 *
 * @since 1.0.0
 */
webui.click(ACTION_REFRESH, () => {
    window.location.reload()
    $('body, html').scrollTop(0)
})

/**
 * 转跳到指定页面链接
 *
 * @since 1.0.0
 */
webui.click(ACTION_BTN_URL, (current) => {
    window.location.href = current.val()
})

/**
 * 复制按钮值到剪贴板
 *
 * @since 1.0.0
 */
webui.click(ACTION_COPY, (current) => {
    webui.string.clipboard(current.val())
    webui.toast('success', '复制成功', true)
})
