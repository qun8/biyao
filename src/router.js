import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)//显式使用路由
//导入路由组件
import Home from './components/home/home'
import Sort from './components/sort/sort'
import Cart from "./components/cart/cart"
import Mine from "./components/mine/mine"

import ManCloth from "./components/goods/manCloth"



//我的-登录注册
import Register from "./components/login-reg/register"
import ChangePwd from "./components/login-reg/changePwd"



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
        {
            path: '/mine',
            name: 'mine',
            component: Mine,
        },
        {
            path: '/mine/manCloth',
            name: 'manCloth',
            component: ManCloth,
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
    ],
    mode: "history",
})

