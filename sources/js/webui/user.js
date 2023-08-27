import lang from './language'

/**
 * WEBUI AJAX 操作类
 *
 * @since 1.0.0
 * 可配合 webuiSettings 参数使用，非必须。
 * - ajaxurl    AJAX 请求地址
 * - nonce      登录验证随机字符串
 * - token      登录验证代码，一般为用户名 + 空格 + 密钥，需要 Base64 转码
 */
export default class user {
    /**
     * 显示错误消息
     *
     * @since 1.0.0
     * @param string id         输入框 ID
     * @param string message    错误消息
     */
    static error_message = (id, message) => {
        $('#input-' + id).addClass('is-invalid')
        $('#feedback-' + id).html(message)
    }

    /**
     *
     * @param {*} ajaxurl
     * @param {*} button
     * @param {*} success
     * @param {*} beforesend
     */
    static method = (ajaxurl, login, button, success, beforesend) => {
        webui.ajax(button, {
            ajax: ajaxurl,
            loading: true,
            login: login,
            beforesend: (xhr, data) => {
                /** 判断发送请求前执行函数 */
                if ('function' == typeof beforesend) {
                    return beforesend(data)
                }
            },
            success: (result) => {
                if ('function' == typeof success) {
                    return success(result)
                }
            }
        })
    }

    /**
     * 更新用户个人资料
     *
     * @since 1.0.0
     */
    static updated = (button, success, beforesend) => {
        user.method('/wp/v2/users/me', 'wp', button, success, beforesend)
    }

    /**
     * 用户登录动作
     *
     * @since 1.0.0
     */
    static login = (button, success, beforesend) => {
        user.method('/wwpo/login', null, button, success, (data) => {
            if (!data['user_login']) {
                user.error_message('login', lang.input_login_empty)
                return false
            }

            if (!data['user_pass']) {
                user.error_message('pass', lang.input_pass_empty)
                return false
            }

            if ('function' == typeof beforesend) {
                return beforesend(data)
            }
        })
    }

    /**
     * 用户注册动作
     *
     * @since 1.0.0
     */
    static register = (button, success, beforesend) => {
        user.method('/wwpo/register', null, button, success, (data) => {
            // 判断邮箱输入
            if (!data['user_email']) {
                user.error_message('email', lang.input_email_empty)
                return false
            }

            // 检测邮箱格式
            if (
                -1 ==
                data['user_email'].search(
                    /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
                )
            ) {
                user.error_message('email', lang.input_email_error)
                return false
            }

            if (!data['user_pass']) {
                user.error_message('pass', lang.input_pass_empty)
                return false
            }

            // 密码检测，密码强度判断
            let _password_check = webui.string.checkpass(data['user_pass'])
            if (0 == _password_check) {
                user.error_message('pass', lang.input_pass_number)
                return false
            }

            if (1 == _password_check) {
                user.error_message('pass', lang.input_pass_strong)
                return false
            }

            //
            if (!data['user_agree']) {
                user.error_message('agree', lang.user_checked_agree)
                return false
            }

            if ('function' == typeof beforesend) {
                return beforesend(data)
            }
        })
    }

    /**
     * 用户密码修改
     *
     * @since 1.0.0
     */
    static changepass = (button, success, beforesend) => {
        user.method('/wwpo/changepassword', 'wp', button, success, (data) => {
            if (!data['user_oldpass']) {
                user.error_message('oldpass', lang.input_pass_old)
                return false
            }

            if (!data['user_newpass']) {
                user.error_message('newpass', lang.input_pass_new)
                return false
            }

            if (!data['user_confirmnpass']) {
                user.error_message('confirmnpass', lang.input_pass_confirm)
                return false
            }

            if (data['user_newpass'] != data['user_confirmnpass']) {
                user.error_message('confirmnpass', lang.input_pass_match)
                return false
            }

            // 获取密码强度
            let _password_check = webui.string.checkpass(data['user_newpass'])
            if (0 == _password_check) {
                user.error_message('confirmnpass', lang.input_pass_number)
                return false
            }

            if (1 == _password_check) {
                user.error_message('confirmnpass', lang.input_pass_strong)
                return false
            }

            if ('function' == typeof beforesend) {
                return beforesend(data)
            }
        })
    }

    /**
    * 用户找回密码动作
    *
    * @since 1.0.0
    */
    static lostpassword = (button, success, beforesend) => {
        user.method('/wwpo/lostpassword', 'wp', button, success, (data) => {

            if ('function' == typeof beforesend) {
                beforesend(data)
            }

            if (!data['user_login']) {
                user.error_message('login', lang.input_login_empty)
                return false
            }
        })
    }
}
