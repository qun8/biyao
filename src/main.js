import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery';

//三级联动
import { pca, pcaa } from 'area-data';
import 'vue-area-linkage/dist/index.css'
import VueAreaLinkage from 'vue-area-linkage';
Vue.use(VueAreaLinkage)

import { AreaSelect } from 'vue-area-linkage';
Vue.use(AreaSelect);


import axios from "axios"

import ImgCheck from './components/login-reg/imgCheck'//图片验证码
Vue.use(ImgCheck)



Vue.config.productionTip = false
Vue.prototype.$http=axios;
Vue.prototype.$api = "/api";//生产环境打包时 将其替换为http://localhost:8888/data

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
