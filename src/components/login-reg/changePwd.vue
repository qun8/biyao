<template>
    <div class="registerwrap">
        <div class="main-title">
            <router-link to="/home"><i class="icon icon-home"></i></router-link>
            <p class="login-title">修改密码</p>
        </div>
        <div class="login-con">
            <!--手机号-->
            <i class="icon-delete-outline telshow" v-show="telshow" @click="deltel" ></i>
            <input type="text" maxlength="11" class="tel" placeholder="请输入手机号" @blur="hiddentel" @focus="showtel" @keyup="showtel" v-model="tel">

            <!--图片验证码-->
            <i class="icon-delete-outline imgshow" v-show="imgshow" @click="delimg" ></i>
            <div class="img-checkwrap">
                <img-check class="img-check" @click="refreshCode" :identifyCode="identifyCode" ></img-check>
                <div class="refreshwrap">
                    <i class="icon-refresh refreshcode" @click="refreshCode"></i>
                </div>
            </div>
            <input type="text" class="imgcheck" placeholder="请输入图中验证码" @blur="hiddenimg" @focus="showimg" @keyup="showimg" v-model="imgcode">

            <!--短信验证码-->
            <i class="icon-delete-outline newshow" v-show="newshow" @click="delnew" ></i>
            <span class="getcheckcode">获取验证码</span>
            <input type="text" class="mailcheck" placeholder="请输入短信验证码" @blur="hiddennew" @focus="shownew" @keyup="shownew" v-model="mailcode">

            <!--密码验证-->
            <i class="icon-delete-outline pwdshow" v-show="pwdshow" @click="delpwd" ></i>
            <i class="icon-eye-hidden"  @click="eye"></i>
            <input type="text" class="pwd" placeholder="请输入6-32位登录密码" @blur="hiddenpwd" @focus="showpwd" @keyup="showpwd" v-model="pwd">

            <input type="button" class="sub" value="提交" @click="change">


        </div>
    </div>
</template>

<script>
    import ImgCheck from "./imgCheck";
    // import Mine from "../mine/mine"
    export default {
        name: "changePwd",
        components: {
            // Mine,
            ImgCheck
        },
        data() {
            return {
                identifyCodes: "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                identifyCode: "",
                tel:"",
                pwd:"",
                imgcode:"",
                mailcode:"",

                telshow:false,//手机输入框 x图标显隐
                imgshow:false,//手机输入框 x图标显隐
                newshow:false,//手机输入框 x图标显隐
                pwdshow:false,//手机输入框 x图标显隐

            };
        },
        mounted() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
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
            delimg() {//删除电话号码
                this.imgcode = "";
            },
            showimg() {//电话号码删除符号显
                if (this.imgcode.length != 0) {
                    this.imgshow = true;
                }
            },
            hiddenimg() {//电话号码删除符号隐
                this.imgshow = false;
            },
            delnew() {//删除电话号码
                this.mailcode = "";
            },
            shownew() {//电话号码删除符号显
                if (this.mailcode.length != 0) {
                    this.newshow = true;
                }
            },
            hiddennew() {//电话号码删除符号隐
                this.newshow = false;
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

            //登录密码显隐 眼睛图标变换
            eye() {
                if($(".pwd").attr('type') == 'password') {
                    $(".pwd").attr('type','text')
                    $(".icon-eye").addClass('icon-eye-hidden')
                    $(".icon-eye").removeClass('icon-eye');
                }else {
                    $(".pwd").attr('type','password')
                    $(".icon-eye-hidden").addClass('icon-eye')
                    $(".icon-eye").removeClass('icon-eye-hidden');
                }
            },

            //图片验证码
            randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            refreshCode() {
                this.identifyCode = "";
                this.makeCode(this.identifyCodes, 4);
            },
            makeCode(o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[
                        this.randomNum(0, this.identifyCodes.length)
                        ];
                }
                this.identifyCode = this.identifyCode.toLowerCase();
                console.log(this.identifyCode);
            },



            change(){//修改密码
                if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.tel))) {//手机格式判断
                    alert("不是完整的11位手机号或者正确的手机号前七位")
                }else if(this.imgcode !== this.identifyCode){//图片验证码匹配
                    alert("图片验证码不正确")
                }else if(!this.mailcode) {//短信验证

                }else if (!(/^.{6,32}$/.test(this.pwd))) {//密码验证
                    alert("密码格式不正确")
                }else {
                    var params = new URLSearchParams()
                    params.append('tel', this.tel)
                    params.append('imgcode', this.imgcode)
                    params.append('mailcode', this.mailcode)
                    params.append('pwd', this.pwd)
                    console.log("params:",params)
                    console.log("pwd:",this.pwd);
                    this.$http.post("/api/mine/changePwd",params)
                        .then((data)=>{//数据初始化过程 此时进行数据请求
                            console.log("then:",data);
                        }).catch((err)=>{
                        console.log("catch:",err);
                    })

                }

            },
        }
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
    .registerwrap {
        position: relative;
        font-size: 0.32rem;
        .main-title {
            height: 40px;
            border: 1px solid #eee;
            box-shadow: 2px 0 2px 5px red;
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
                position: absolute;
                left: 0;
                right: 0;
                width: 70px;
                height: 0.84rem;
                margin: 0 auto;
                line-height: 40px;
                display: inline-block;
                text-align: center;
                color: #333;
                font-size: 0.32rem;
            }
        }
        .login-con {
            position: relative;
            /*border: 1px solid;*/
            width: 100%;
            height: 10rem;
            padding-top: 1.3rem;
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
                font-size: 0.32rem;
            }
            input:focus {
                outline: none;
                border: none;
                border-bottom: 1px solid #ddd;
                /*background-color: rgb(242,242,242);*/
            }
            .tel {
                top: 1.1rem;
            }
            .imgcheck {
                top: 2.1rem;
            }
            .getcheckcode {
                position: absolute;
                top: 3.3rem;
                right: 5%;
                width: 2.2rem;
                height: 0.6rem;
                line-height: 0.6rem;
                z-index: 10;
                text-align: center;
                color: #7f4395;
                border: 1px solid #7f4395;
                border-radius: 0.1rem;
                font-size: 0.32rem;

            }
            .mailcheck {
                top: 3.1rem;
            }
            .pwd {
                top: 4.1rem;
            }
            .telshow {
                position: absolute;
                right: 7%;
                top: 1.3rem;
                z-index: 100;
                font-size: 0.45rem;
            }
            .imgshow {//图片输入框 x图标显隐
                position: absolute;
                right: 45%;
                top: 2.4rem;
                z-index: 100;
                font-size: 0.45rem;
            }
            .newshow {//短信输入框 x图标显隐
                position: absolute;
                right: 45%;
                top: 3.35rem;
                z-index: 100;
                font-size: 0.45rem;
            }
            .pwdshow {//密码输入框 x图标显隐
                position: absolute;
                right: 20%;
                top: 4.43rem;
                z-index: 100;
                font-size: 0.45rem;
            }

            .icon-eye,.icon-eye-hidden {
                position: absolute;
                right: 7%;
                top: 220px;
                z-index: 10;
                font-size: 0.5rem;
            }
            .img-checkwrap {
                position: absolute;
                right: 5%;
                top: 2.2rem;
                width: 2.2rem;
                height: 0.71rem;
                border-radius: 0.1rem;
                /*height: 0.7rem;*/
                border: 1px solid #ccc;
                z-index: 10;
                .img-check {
                    display: inline-block;
                    width: 2rem;

                }
                .refreshwrap {
                    position: absolute;
                    right: 0rem;
                    top: 0rem;
                    /*width: 0.1rem;*/
                    height: 100%;
                    line-height: 220%;
                    background-color: #ccc;
                    padding-left: 2px;
                    .icon-refresh {

                    }
                }

            }
            .sub {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                top: 5.5rem;
                height: 1rem;
                border: 1px solid #7f4395;
                background-color: #7f4395;
                box-shadow: 0 3px 5px rgba(127,67,149,.4);
                border-radius: 1rem;
                color: white;
            }



        }
    }
</style>