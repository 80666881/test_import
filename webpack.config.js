const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
// const Manifest = require('webpack-manifest-plugin');
const options = {};
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
// var MyWebpackPlugin = require(path.resolve(__dirname, './plugins/MyWebpackPlugin'));
module.exports = {
    entry: {
        'main': './src/index.js'
        // 'main': './src/test_import/cjs/index.js'  //
    },
    // mode: 'production', //压缩代码
    mode: 'development', //不压缩代码
    // 在这里配置 alias
    resolve: {
        // alias: {
        //     '@src': path.resolve(__dirname, '../src/')
        // },
        extensions: [".js", ".json", ".ts", ".tsx"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js'
    },
    // 热更新
    devServer: {
        contentBase: './dist',
        // inline: false,
        hot: true, // 代表开启热更新
    },
    externals: {},
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 1,
                    priority: -20,
                    // reuseExistingChunk: true
                }
            }
        }
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                    ]
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        // new MyWebpackPlugin(),
        new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin(),
        // new HtmlWebpackPlugin({
        //     title: "Webpack-Starter Index Template", // 生成的文件标题
        //     filename: "index.html", // 最终生成的文件名
        //     template: "./src/index.html",
        //     minify: { // 压缩选项
        //         collapseWhitespace: true, // 移除空格
        //         removeComments: true, // 移除注释
        //         removeAttributeQuotes: true, // 移除双引号
        //         html5: true,
        //         preserveLineBreaks: false,
        //         minifyCSS: true,
        //         minifyJS: true,
        //     }
        // }),
        // new Manifest(options)
    ]
}