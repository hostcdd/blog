/**
 * Created by PVer on 2017/6/12.
 */
const express= require('express');
const app = express();
const swig=require('swig');
// 定义模板引擎，使用swig.renderFile方法解析后缀为html的文件
app.engine('html',swig.renderFile);
// 设置模板存放目录
app.set('views','./views');
// 注册模板引擎
app.set('view engine','html');
/*清除缓存*/
swig.setDefaults({cache:false});
/*存放静态资源*/
app.use('public',express.static(__dirname+'/public'));
/*
* 前台模块
* 后台管理模块
* API模块:通过ajax调用的接口。
* */
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/main',require('./routers/main'));

app.get('/',function (req,res) {
    res.render('index')
});
app.listen(9000);