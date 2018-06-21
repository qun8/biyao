const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const url = require("url");
const queryString = require('querystring');

const mongoose = require('mongoose');
//连接到启动的mongodb数据库
const db = mongoose.connect('mongodb://localhost:27017/biyao');//不添加库名 则默认连接test数据库

//验证数据库连接状态(2种方法):
db.then(function(){//成功的回调
    console.log("promise连接成功");
}).catch(function(err){//失败的回调
    console.error(new Error(err));
});

//创建数据库--------------------------------------------------------------------
var schema = new mongoose.Schema({
    userId:{type: String,},
    userName:{type: String,},
    userStatus:{type: Boolean,},
    tel: {type: String,},
    imgcode: {type: String},
    mailcode:{type: String},
    pwd:{type: String}
},{
        collection:'register'
});

//创建模型Model  创建,在内存中创建结构为TestSchema名为test1的集合
var Model = mongoose.model('register',schema);//以schema结构建立集合family

//﻿﻿18838052709
//--------------------------------------------------------------------------------------------------------------------------------------------------
//用户注册
app.post("/mine/register",function (req,res) {//用户注册 添加入数据库
    console.log('register')
    let str = "";
    req.on('data',function(chunk){
        str += chunk;
    });
    //用户ID
    var d = new Date();
    var userId = d.getTime();
    var tmp = "";
    //用户名
    var arr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i=0;i < 8;i++) {
        let num = Math.floor(Math.random()*62)
        tmp += arr.slice(num,num+1);
    }
    var userName = "by_"+tmp;

    req.on('end',function(){
        let body = queryString.parse(str);
        let datas =
            {
                userId:userId,
                userName:userName,
                userStatus:false,
                tel: body['tel'],
                imgcode: body['imgcode'],
                mailcode: body['mailcode'],
                pwd: body['pwd'],
            };
        Model.create(datas,function(err,docs){
            if(err){
                console.error(new Error(err));
                return;
            }
            console.log('注册成功');
            console.log('docs:',docs);
        });

    });
})
//用户登录
app.post("/mine/login",function (req,res) {//查询记录返回到前台
    console.log('login')
    let str = "";
    req.on('data',function(chunk){
        str += chunk;
    });
    req.on('end',function() {
        let body = queryString.parse(str);
        Model.findOne({$and:[{tel:body['tel']},{pwd:body['pwd']}]}, function (err, doc) {
            if (err) {
                console.error(new Error(err));
            } else {//登录成功 修改userStatus
                Model.update({$and:[{tel:body['tel']},{pwd:body['pwd']}]},{userStatus:true},{multi:1},function(err,doc){
                    if(err){
                        console.error(new Error(err));
                    }else{
                        console.log("userStatus:true");

                    }
                });
                res.write(JSON.stringify(doc));//向前台传参
                console.log("doc:",doc);
                res.end();
            }
        })




    });
})
//用户退出
app.post("/mine/logout",function (req,res) {//查询记录返回到前台
    console.log('logout')
    let str = "";
    req.on('data',function(chunk){
        str += chunk;
    });
    req.on('end',function() {
        let body = queryString.parse(str);
        Model.findOne({tel:body['tel']}, function (err, doc) {
            if (err) {
                console.error(new Error(err));
            } else {//登录成功 修改userStatus
                Model.update({tel:body['tel']},{userStatus:false},{multi:1},function(err,doc){
                    if(err){
                        console.error(new Error(err));
                    }else{
                        console.log("userStatus:false");
                        console.log(doc);
                    }
                });
                res.write(JSON.stringify(doc));//向前台传参
                console.log("doc:",doc);
                res.end();
            }
        })
    });
})
//用户修改登录密码
app.post("/mine/changePwd",function (req,res) {//查询记录返回到前台
    console.log('changePwd')
    let str = "";
    req.on('data',function(chunk){
        str += chunk;
    });
    req.on('end',function() {
        let body = queryString.parse(str);
        Model.findOne({tel:body['tel']}, function (err, doc) {
            if (err) {
                console.error(new Error(err));
            } else {//修改pwd
                Model.update({tel:body['tel']},{pwd:body['pwd']},{multi:1},function(err,doc){
                    if(err){
                        console.error(new Error(err));
                    }else{
                        console.log("changePwd");
                        console.log(doc);
                    }
                });
                res.write(JSON.stringify(doc));//向前台传参
                console.log("doc:",doc);
                res.end();
            }
        })
    });
})






app.listen(8889);



