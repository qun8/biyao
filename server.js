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
app.get("/data/ratings",function (req,res) {
    res.send({
        status:1,
        msg:"ratings ok",
        data:data.ratings

    })
});

//前端的请求：localhost:8888/data/seller,返回seller
app.get("/data/seller",function (req,res) {
    res.send({
        status:1,
        msg:"seller ok",
        data:data.seller
    })
});
app.listen(8888);



