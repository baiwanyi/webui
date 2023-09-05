// 配置文件使用commonjs规范
const path = require('path')
const webpack = require('webpack')

// 设定全局暴露
const extractJquery = new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    _: 'lodash',
})

module.exports = {
    // 入口，是一个对象
    entry: {
        webui: './webui/sources/js/index.js'
    },

    // 输出
    output: {
        // 带五位hash值的js
        path: path.join(__dirname, '../dist'),
        filename: '[name].min.js',
    },

    // 开发服务的配置
    // devServer: {
    //     // 端口，默认8080
    //     port: '8099',
    //     // 进度条
    //     progress: true,
    //     // 启动后访问目录，默认是项目根目录，这个设置到打包后目录
    //     contentBase: './build',
    //     // 启动压缩
    //     //compress: true
    // },

    // 模式，2种：生产模式(production)和开发模式(development)
    // 开发模式不压缩打包后代码，生产模式压缩打包后代码
    mode: 'production',
    // mode: 'development',
    // 1、source-map：产生文件，产生行列
    // devtool: 'source-map',
    // 2、eval-source-map：不产生文件，产生行类
    //devtool: 'eval-source-map',
    // 3、cheap-source-map：产生文件，不产生列
    //devtool: 'cheap-module-source-map',
    // 4、cheap-module-eval-source-map：不产生文件，不产生列
    // devtool: 'cheap-module-eval-source-map',

    //打包文件大小配置
    performance: {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
    },
    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                    exposes: ['$', 'jQuery'],
                },
            },
            {
                test: require.resolve('lodash'),
                loader: 'expose-loader',
                options: {
                    exposes: {
                        globalName: '_.filter',
                        moduleLocalName: 'filter'
                    }
                }
            },
            {
                test: /.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },
    plugins: [extractJquery],
}
