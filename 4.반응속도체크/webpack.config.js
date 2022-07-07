const vueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: {
        app: path.join(__dirname, 'main.js'), 
        //app : 하나로 합쳐질 파일의 이름 (output에서 쓰임)
        //main.js < 합쳐질 파일들 중 메인 파일
    },
    module: { //js파일을 합칠 때 어떻게 합칠 것인지
        rules: [{
            test: /\.vue$/, //.vue로 끝나는 파일
            use: 'vue-loader' //use === loader라서 아무거나 써도 무방
        },{
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        }],
    },
    plugins: [
        new vueLoaderPlugin()
    ],
    output: {
        filename: '[name].js', //또는 app.js [name]으로 하면 자동으로 들어감
        path: path.join(__dirname, 'dist'), //__dirname를 써주면 현재경로
        publicPath: '/dist',
    }
}