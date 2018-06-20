import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)//显式使用路由
//导入路由组件
import Home from './components/home/home'
import Sort from './components/sort/sort'
import Cart from "./components/cart/cart"
import Mine from "./components/mine/mine"




//我的-登录注册
import Register from "./components/login-reg/register"
import ChangePwd from "./components/login-reg/changePwd"
import WaitPay from "./components/mine/waitPay"
import Producing from  "./components/mine/producing"
import WaitReceive from  "./components/mine/waitReceive"
import WaitComment from  "./components/mine/waitComment"
import Refund from  "./components/mine/refund"



export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            alias: "/"
        },
        {
            path: '/sort',
            name: 'sort',
            component: Sort,
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },





        //mine=============================
        {
            path: '/mine',
            name: 'mine',
            component: Mine,
        },
        {
            path: '/mine/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/mine/changePwd',
            name: 'changePwd',
            component: ChangePwd,
        },
        {
            path: '/mine/waitPay',
            name: 'waitPay',
            component: WaitPay,
        },
        {
            path: '/mine/producing',
            name: 'producing',
            component: Producing,
        },
        {
            path: '/mine/waitReceive',
            name: 'waitReceive',
            component: WaitReceive,
        },
        {
            path: '/mine/waitComment',
            name: 'waitComment',
            component: WaitComment,
        },
        {
            path: '/mine/refund',
            name: 'refund',
            component: Refund,
        },



    ],
    mode: "history",
})

