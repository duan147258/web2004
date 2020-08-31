var path = require('path');
var htmlwebpackPlugin=require('html-webpack-plugin')
 module.exports ={
   //入口
   entry:path.resolve(__dirname,'./src/main.js'),
   //输出
   output: {
    path:path.resolve(__dirname,'dist'),
     //输出文件名
     filename:'bundle.js'
     //输出路径
     //__dirname node.js的变量，代表当前文件的绝对路径
     
   },
   module:{
rules:[
  {test:/\.css$/,use:['style-loader','css-loader']},
  {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
  {test:/\.sass$/,use:['style-loader','css-loader','sass-loader']},
  {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/},
]
   },
   plugins:[
       new  htmlwebpackPlugin({
        template:path.resolve(__dirname,'./src/index.html'),
        filename:'index.html'
       })
      
   ]
}