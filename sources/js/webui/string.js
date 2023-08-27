/**
 * 字符串处理函数
 *
 * @since 1.0.0
 * - count          字数统计
 * - clipboard      内容复制到剪切板
 * - random         生成随机字符串
 * - removehtml  移除 HTML 标签
 * - numberonly     保留数字
 */
export default class string {
    /**
     * 字数统计
     *
     * @since 1.0.0
     * @param string str 需要统计的字符集
     */
    static count = (str) => {
        str = String(str)
        let r = 0
        for (let i = 0; i < str.length; i++) {
            let c = str.charCodeAt(i)
            // Shift_JIS: 0x0 ～ 0x80, 0xa0 , 0xa1 ～ 0xdf , 0xfd ～ 0xff
            // Unicode : 0x0 ～ 0x80, 0xf8f0, 0xff61 ～ 0xff9f, 0xf8f1 ～ 0xf8f3
            if (
                (c >= 0x0 && c < 0x81) ||
                c == 0xf8f0 ||
                (c >= 0xff61 && c < 0xffa0) ||
                (c >= 0xf8f1 && c < 0xf8f4)
            ) {
                r += 1
            } else {
                r += 2
            }
        }
        return r
    }

    /**
     * 内容复制到剪切板
     *
     * @since 1.0.0
     * @param string text 需要复制的内容
     */
    static clipboard = (text) => {
        navigator.clipboard.writeText(text)
    }

    /**
     * 生成随机字符串
     *
     * @since 1.0.0
     * @param integer num 生成的字符串数，默认：32位
     */
    static random = (num) => {
        num = num || 32
        let t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz1234567890',
            a = t.length,
            n = ''
        for (let i = 0; i < num; i++)
            n += t.charAt(Math.floor(Math.random() * a))
        return n
    }

    /**
     * 移除 HTML 标签
     *
     * @since 1.0.0
     */
    static removehtml = (string) => {
        return string.replace(/<[^>]+>/g, '')
    }

    /**
     * 移除其他字符，只保留数值
     *
     * @since 1.0.0
     */
    static numberonly = (string) => {
        return string.replace(/[^\d.]/g, '')
    }

    /**
     * 密码强度检测
     * 使用密码等级进行判断，初始值为 0，包含字母或数字加 1，小于 6 位数减 1
     * 根据返回数值进行强度判断
     *
     * @since 1.0.0
     * @param string value  需要检测的密码
     */
    static checkpass = (value) => {
        let i = 0

        // 判断密码小于 6 个字符
        if (6 > value.length) {
            return i
        }

        // 判断包含字母
        if (value.match(/[a-z]/gi)) {
            i++
        }

        // 判断包含数字
        if (value.match(/[0-9]/gi)) {
            i++
        }

        // 判断包含数字和字母
        if (value.match(/(.[^a-z0-9])/gi)) {
            i++
        }

        // 判断小于6个字符
        if (value.length < 6 && i > 0) {
            i--
        }

        return i
    }

    /**
     * 统计对象包含元素个数
     *
     * @since 1.0.0
     * @param object o 需要统计的对象
     */
    static countobject = (o) => {
        var t = typeof o
        if (t == 'string') {
            return o.length
        } else if (t == 'object') {
            var n = 0
            for (var i in o) {
                n++
            }
            return n
        }
        return false
    }
}
