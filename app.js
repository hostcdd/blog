/**
 * Created by PVer on 2017/6/12.
 */
const express= require('express');
const app = express();
// 定义模板引擎，使用swig.renderFile方法解析后缀为html的文件
const swig=require('swig');
app.engine('html',swig.renderFile);

// 设置模板存放目录
app.set('views','./views');
// 注册模板引擎
app.set('view engine','html');

swig.setDefaults({cache:false});
app.get('/user',function (req,res) {
    res.send('<h1>myBlog</h1>')
});
app.listen(9000);