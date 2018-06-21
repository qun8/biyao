const express = require("express");
const app = express();
const data = require("./data.json");



//前端的请求：localhost:8888/data/goods,返回goods
app.get("/data/goods",function (req,res) {

    res.send({
        status:1,
        msg:"goods ok",
        data:data.goods

    })
});

//前端的请求：localhost:8888/data/rating,返回rating
app.get("/data/cartGoods",function (req,res) {
    res.send({
        status:1,
        msg:"cartGoods ok",
        data:data.cartGoods
    })
});

app.listen(8889);



