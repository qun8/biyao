<template>
    <!--未登录状态-->
    <div class="login" v-if="!userStatus">
        <div class="main-title">
            <router-link to="/home"><i class="icon icon-home"></i></router-link>
            <p class="login-title">登录</p>
        </div>
        <div class="login-con">
            <!--手机号-->
            <i class="icon-delete-outline telshow" v-show="telshow" @click="deltel" ></i>
            <input type="text" maxlength="11" class="tel" placeholder="请输入手机号" @blur="hiddentel" @focus="showtel" @keyup="showtel" v-model="tel">

            <!--密码登录-->
            <div class="pwdwrap" v-if="logmethod === 'pwd'">
                <i class="icon-delete-outline pwdshow" v-show="pwdshow" @click="delpwd" ></i>
                <i class="icon-eye-hidden" @click="eye"></i>
                <input type="password" class="pwd" placeholder="请输入登录密码" @blur="hiddenpwd" @focus="showpwd" @keyup="showpwd" v-model="pwd">
            </div>

            <!--验证码登录-->
            <div class="newwrap" v-if="logmethod === 'new'">
                <i class="icon-delete-outline pwdshow" v-show="pwdshow" @click="delpwd" ></i>
                <span class="getcheckcode">获取验证码</span>
                <input type="text" class="pwd" placeholder="请输入短信验证码" @blur="hiddenpwd" @focus="showpwd" @keyup="showpwd" v-model="pwd">
            </div>

            <p>必要不会以任何理由要求您转账汇款，谨防诈骗。</p>
            <input type="button" class="logBtn" value="登录" @click="login">
            <input type="button" class="cheBtn" value="验证码登录" @click="logMethod">
            <div class="registerwrap">
                <router-link class="register" to="/mine/register">还没有账号？快速注册</router-link>
                <router-link class="changePwd" to="/mine/changePwd">忘记密码！</router-link>
            </div>
            <div class="cooperate">
                <span>合作账号登录</span>
            </div>
            <i class="icon-qq"></i>
        </div>
    </div>

    <!--登录状态-->
    <div class="mine" v-else-if="userStatus">
        <div class="photo">
            <i class="icon-user-circle"></i>
            <p>{{userName}}</p>
        </div>
        <div class="orderwrap">
            <div class="order">
                <span>我的订单</span>
                <i class=" icon-keyboard_arrow_right"></i>
            </div>
            <div class="orderlist">
                <router-view></router-view>
                <router-link to="/mine/waitPay">
                    <i class="icon-credit-card2"></i>
                    <span>待付款</span>
                </router-link>
                <router-link to="/mine/producing">
                    <i class="icon-clipboard-list"></i>
                    <span>生产中</span>
                </router-link>
                <router-link to="/mine/waitReceive">
                    <i class="icon-truck"></i>
                    <span>待收货</span>
                </router-link>
                <router-link to="/mine/waitComment">
                    <i class="icon-chat"></i>
                    <span>待评价</span>
                </router-link>
                <router-link to="/mine/refund">
                    <i class="icon-coin-yen"></i>
                    <span>退款/售后</span>
                </router-link>
            </div>
        </div>
        <div class="listwrap">
            <div class="">
                <router-link to="/mine/waitPay">我的拼团</router-link>
                <i class=" icon-keyboard_arrow_right"></i>
            </div>
            <div class="">
                <router-link to="/mine/waitPay">我的红包</router-link>
                <i class=" icon-keyboard_arrow_right"></i>
            </div>
            <div class="">
                <router-link to="/mine/waitPay">我要开店</router-link>
                <i class=" icon-keyboard_arrow_right"></i>
            </div>
            <div class="">
                <router-link to="/mine/waitPay">我的余额</router-link>
                <i class=" icon-keyboard_arrow_right"></i>
            </div>
            <div class="">
                <router-link to="/mine/waitPay">我的地址</router-link>
                <i class=" icon-keyboard_arrow_right"></i>
            </div>
            <div class="">
                <router-link to="/mine/waitPay">修改密码</router-link>
                <i class=" icon-keyboard_arrow_right"></i>
            </div>
            <div class="">
                <router-link to="/mine/waitPay">设置支付密码</router-link>
                <i class=" icon-keyboard_arrow_right"></i>
            </div>
            <div class="">
                <router-link to="/mine/waitPay">商家入住</router-link>
                <i class=" icon-keyboard_arrow_right"></i>
            </div>
            <div class="">
                <router-link to="/mine/waitPay">我的客服</router-link>
                <i class=" icon-keyboard_arrow_right"></i>
            </div>
            <div class="servernew">
                <router-link to="/mine/waitPay">客服新消息</router-link>
                <i class=" icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <p>关注“必要”微信服务号获取订单最新状态！</p>
        <div class="footer">
            <div class="btnwrap">
                <span class="download">下载APP</span>
                <span class="about">关于必要</span>
            </div>
            <div class="logoutwrap">
                <span>{{userName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;| <span class="logout" @click="logout">退出</span>
            </div>
            <div class="copyright">
                Copyright © 2018, BIYAO.COM
            </div>
        </div>
    </div>
</template>

<script>
    import Register from "../login-reg/register"
    export default {
        name: "mine",
        data(){
            return {
                userStatus:"",
                tel:"",
                pwd:"",
                userName:"",

                telshow:false,//手机输入框 x图标显隐
                pwdshow:false,//手机输入框 x图标显隐

                logmethod:"pwd",//登录方式 验证码/密码
                tabShow:false,
            }
        },
        // mounted() {
        //     console.log('mine created')
        //     this.$emit("table",this.tabShow);
        // },
        methods: {
            //输入框x图标显隐-----------------
            deltel() {//删除电话号码
                this.tel = "";
            },
            showtel() {//电话号码删除符号显
                if (this.tel.length != 0) {
                    this.telshow = true;
                }
            },
            hiddentel() {//电话号码删除符号隐
                this.telshow = false;
            },
            delpwd() {//删除电话号码
                this.pwd = "";
            },
            showpwd() {//电话号码删除符号显
                if (this.pwd.length != 0) {
                    this.pwdshow = true;
                }
            },
            hiddenpwd() {//电话号码删除符号隐
                this.pwdshow = false;
            },
            //改变登录方式
            logMethod() {
                if(this.logmethod == "pwd") {
                    this.logmethod = "new";
                    document.getElementsByClassName("cheBtn")[0].value = "密码登录";

                }else {
                    this.logmethod = "pwd";
                    document.getElementsByClassName("cheBtn")[0].value = "验证码登录";
                }
            },
            //登录密码显隐 眼睛图标变换
            eye() {
                if($(".pwd").attr('type') == 'password') {
                    $(".pwd").attr('type','text')
                    $(".icon-eye-hidden").addClass('icon-eye')
                    $(".icon-eye").removeClass('icon-eye-hidden');

                }else {
                    $(".pwd").attr('type','password')
                    $(".icon-eye").addClass('icon-eye-hidden')
                    $(".icon-eye").removeClass('icon-eye');
                }
            },
            //登录
            login(){
                console.log('login')
                if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.tel))) {//手机格式判断
                    alert("不是完整的11位手机号或者正确的手机号前七位")
                }else if (!(/^.{6,32}$/.test(this.pwd))) {//密码验证
                    alert("密码格式不正确")
                }else {
                    var params = new URLSearchParams()
                    params.append('tel', this.tel)
                    params.append('pwd', this.pwd)
                    this.$http.post("/api/mine/login",params)
                    .then(({data})=>{//数据初始化过程 此时进行数据请求
                        console.log("then:",data);
                        console.log("parsms:",params)
                        this.userStatus = data.userStatus;
                        this.userName = data.userName;
                        console.log("userStatus:",this.userStatus)
                    }).catch((err)=>{
                        console.log("catch:",err);
                    })


                }
            },
            logout() {
                this.userStatus = false;
                var params = new URLSearchParams()
                params.append('tel', this.tel)
                this.$http.post("/api/mine/logout",params)
                    .then(({data})=>{//数据初始化过程 此时进行数据请求
                        console.log("then:",data);
                    }).catch((err)=>{
                    console.log("catch:",err);
                })
                this.$router.push({ path: 'home' })
            },
        },
        components: {
            Register,
        },
    }
</script>

<style lang="less">
    //未登录状态
    @import "../../assets/css/mixin";
    * {
        margin: 0;
        padding: 0;
    }
    .login {
        background-color: #f2f2f2;
        position: relative;
        font-size: 0.32rem;
        .main-title {
            height: 0.85rem;
            border: 1px solid #eee;
            background-color: #fff;
            position: relative;
            i {
                position: absolute;
                top: .14rem;
                left: .5rem;
                z-index: 2;
                display: block;
                width: .6rem;
                height: .6rem;
                font-size: .44rem;
                color: #ccc;
            }
            .login-title {
                margin: 0 auto;
                width: 4.8rem;
                height: 0.6rem;
                line-height: 0.84rem;
                text-align: center;
                color: #333;
            }
        }

        .login-con {
            position: relative;
            width: 100%;
            height: 10rem;
            padding-top: 1.7rem;
            background-color: rgb(242,242,242);
            input {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                border: none;
                border-bottom: 1px solid #ddd;
                height: 1rem;
                line-height: 1rem;
                width: 90%;
                background-color: rgb(242,242,242);
            }
            input:focus {
                outline: none;
                /*border: none;*/
                /*border-bottom: 1px solid #ddd;*/
            }
            .tel {
                top: 1.0rem;
            }
            .pwdwrap {
                margin-top: 0.3rem;
                .pwdshow {//密码输入框 x图标显隐
                    position: absolute;
                    right: 18%;
                    top: 2.3rem;
                    z-index: 100;
                    font-size: 0.45rem;
                }
                .icon-eye,.icon-eye-hidden {
                    position: absolute;
                    right: 7%;
                    top: 2.3rem;
                    z-index: 10;
                    font-size: 0.45rem;
                }
            }
            .newwrap {
                margin-top: 0.3rem;
                .pwdshow {//密码输入框 x图标显隐
                    position: absolute;
                    right: 45%;
                    top: 2.3rem;
                    z-index: 100;
                    font-size: 0.45rem;
                }
                .getcheckcode {
                    position: absolute;
                    top: 2.2rem;
                    right: 5%;
                    width: 2.2rem;
                    height: 0.6rem;
                    line-height: 0.6rem;
                    z-index: 10;
                    text-align: center;
                    color: #7f4395;
                    border: 1px solid #7f4395;
                    border-radius: 5px;
                }
            }

            .telshow {
                position: absolute;
                right: 7%;
                top: 1.3rem;
                z-index: 100;
                font-size: 0.45rem;
            }


            p {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                top: 3.2rem;
                font-size: 0.24rem;
                color: red;
                text-align: center;
            }
            .logBtn {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                top: 3.9rem;
                height: 1rem;
                border: 1px solid #7f4395;
                background-color: #7f4395;
                box-shadow: 0 0.07rem 5px rgba(127,67,149,.4);
                border-radius: 1rem;
                color: white;
            }
            .cheBtn {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                top: 5.2rem;
                height: 1rem;
                border: 1px solid #7f4395;
                border-radius: 1rem;
                color: #7f4395;
            }
            .registerwrap {
                position: absolute;
                left: 0;
                right: 0;
                width: 80%;
                margin: auto;
                top: 6.7rem;
                a {
                    font-size: 0.28rem;
                    color: #7f4395;
                    outline: none;
                    text-decoration: none;
                }
                .register {

                }
                .changePwd {
                    float: right;

                }
            }
            .cooperate {
                position: absolute;
                top: 7.2rem;
                width: 100%;
                height: 1px;
                .border-1px(#ddd);
                span {
                    position: absolute;
                    right: 0;
                    left: 0;
                    top: -0.2rem;
                    margin: auto;
                    display: block;
                    width: 3rem;
                    background-color: #f2f2f2;
                    text-align: center;
                    font-size: 0.28rem;
                    color: gray;
                    z-index: 10;
                }

            }
            .icon-qq {
                position: absolute;
                right: 0;
                left: 0;
                top: 10rem;
                margin: auto;
                text-align: center;
                font-size: 0.7rem;
            }
        }
    }
   //登录状态
    .mine {
        font-size: 0.3rem;
        background-color: #f2f2f2;
        .photo {
            background-image: url(https://static.biyao.com/m/img/master/personalCenter/banner-personal.png);
            background-size: 100% 100%;
            width: 7.5rem;
            height: 3.2rem;
            padding-top: .5rem;
            text-align: center;
            .icon-user-circle {
                font-size: 1.3rem;
            }
            p {
                font-size: 0.32rem;
                color: white;
                margin-top: 0.24rem;
            }
        }
        .orderwrap {
            width: 100%;
            height: 2.4rem;
            margin: 0.2rem 0;
            background-color: white;
            .order {
                width: 95%;
                height: 1rem;
                line-height: 1rem;
                margin: 0 auto;
                border-bottom: 2px solid #ccc;
                .icon-keyboard_arrow_right {
                    line-height: 1rem;
                    font-size: 0.5rem;
                    float: right;
                    color: #ccc;
                }
            }
            .orderlist {
                text-align: center;
                font-size: 0.24rem;
                text-decoration: none;
                display: flex;
                margin-top: 0.2rem;
                a {
                    flex: 1;
                    color: black;
                    i {
                        color: #aaa;
                        font-size: 0.5rem;
                    }
                    span {
                        display: block;
                    }
                }
            }
        }
        .listwrap {
            height: 10rem;
            background-color: white;
            div {
                margin: auto;
                width: 95%;
                height: 1rem;
                border-bottom: 1px solid #ccc;
                line-height: 1rem;
                a {
                    text-decoration: none;
                    color: #333;

                }
                i {
                    line-height: 1rem;
                    float: right;
                    font-size: 0.5rem;
                    color: #ccc;
                }

            }
            .servernew {
                border: none;
            }
        }
        p {
            text-align: center;
            color: gray;
            font-size: 0.24rem;
            line-height: 0.63rem;
            margin: 0;
        }
        .footer {
            height: 3.9rem;
            background-color: #333;
            text-align: center;
            .btnwrap {
                margin: auto;
                padding: 0.4rem 0;
                width: 4rem;
                color: white;
                font-size: 0.24rem;
                span {
                    border: 0.02rem solid gray;
                    padding: 0.1rem 0.25rem;
                    border-radius: .06rem;
                }
                .download {
                    float: left;
                }
                .about {
                    float: right;
                }
            }

            .logoutwrap {
                margin: auto;
                padding: 0.3rem 0 0.2rem;
                font-size: 0.24rem;
                color: gray;
                width: 2.5rem;
                display: flex;
                span {
                    flex: 1;
                }
                .logout {
                    display: inline-block;
                    width: 0.2rem;
                    /*border: 1px solid;*/
                }
            }

            .copyright {
                font-size: 0.24rem;
                color: gray;
            }
        }
    }

</style>