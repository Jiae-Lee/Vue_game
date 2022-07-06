module.exports = {
    entry: {
        app: './main.js', 
        //app : 하나로 합쳐질 파일의 이름 (output에서 쓰임)
        //main.js < 합쳐질 파일들 중 메인 파일
    },
    module: {
        rules: [{

        }],
        //js파일을 합칠 때 어떻게 합칠 것인지
    },
    plugins: [

    ],
    output: {
        filename: '[name].js', //또는 app.js [name]으로 하면 자동으로 들어감
        path: './dist'
    }
}