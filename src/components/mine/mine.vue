<template>
    <div class="mine">
        <div class="main-title">
            <router-link to="/home"><i class="icon icon-home"></i></router-link>
            <p class="login-title">登录</p>
        </div>
        <div class="login-con">
            <i class="icon-delete-outline"></i>
            <input type="text" class="tel" placeholder="请输入手机号">
            <i class="icon-eye"></i>
            <input type="text" class="pwd" placeholder="请输入登录密码">
            <p>必要不会以任何理由要求您转账汇款，谨防诈骗。</p>
            <input type="button" class="logBtn" value="登录">
            <input type="button" class="cheBtn" value="验证码登录">
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
</template>

<script>
    import Register from "../login-reg/register"
    export default {
        name: "mine",
        components: {
            Register,
        },
    }
</script>

<style lang="less">
    @import "../../assets/css/mixin";
    * {
        margin: 0;
        padding: 0;
    }
    html {
        background-color: #f2f2f2;
    }
    .mine {
        position: relative;

        .main-title {
            height: 40px;
            border: 1px solid ;
            background-color: #fff;
            position: relative;
            i {
                color: #ccc;
                font-size: 25px;
                line-height: 40px;
                margin-left: 10px;
            }
            .login-title {
                position: absolute;
                left: 0;
                right: 0;
                width: 50px;
                height: 30px;
                margin: 0 auto;
                line-height: 40px;
                display: inline-block;
                text-align: center;
                color: #333;
            }
        }
        .login-con {
            position: relative;
            /*border: 1px solid;*/
            width: 100%;
            height: 500px;
            padding-top: 65px;
            background-color: rgb(242,242,242);
            input {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                border: none;
                border-bottom: 1px solid #ddd;
                height: 35px;
                line-height: 35px;
                width: 90%;
                background-color: rgb(242,242,242);
            }
            input:focus {
                outline: none;
                border: none;
                border-bottom: 1px solid #ddd;
                background-color: rgb(242,242,242);
            }
            .pwd {
                top: 115px;
            }
            .icon-delete-outline {
                position: absolute;
                right: 5%;
                top: 65px;
                z-index: 10;
                font-size: 25px;
            }
            .icon-eye {
                position: absolute;
                right: 5%;
                top: 110px;
                z-index: 10;
                font-size: 25px;
            }
            p {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                top: 160px;
                font-size: 12px;
                color: red;
                text-align: center;
            }
            .logBtn {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                top: 195px;
                height: 50px;
                border: 1px solid #7f4395;
                background-color: #7f4395;
                box-shadow: 0 3px 5px rgba(127,67,149,.4);
                border-radius: 50px;
                color: white;
            }
            .cheBtn {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                top: 260px;
                height: 50px;
                border: 1px solid #7f4395;
                border-radius: 50px;

                color: #7f4395;
            }
            .registerwrap {
                position: absolute;
                left: 0;
                right: 0;
                width: 80%;
                margin: auto;
                top: 335px;
                /*border: 1px solid;*/
                a {
                    font-size: 14px;
                    color: #7f4395;
                }
                .register {

                }
                .changePwd {
                    float: right;
                }
            }
            .cooperate {
                position: absolute;
                top: 395px;
                width: 100%;
                height: 1px;
                .border-1px(#ddd);
                /*border: 1px solid;*/
                span {
                    position: absolute;
                    right: 0;
                    left: 0;
                    top: -10px;
                    margin: auto;
                    display: block;
                    width: 150px;
                    /*border: 1px solid;*/
                    background-color: #f2f2f2;
                    text-align: center;
                    font-size: 14px;
                    color: gray;
                    z-index: 10;
                }

            }
            .icon-qq {
                position: absolute;
                right: 0;
                left: 0;
                top: 500px;
                margin: auto;
                text-align: center;
                font-size: 30px;
            }

        }
    }
</style>