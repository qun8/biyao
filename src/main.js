import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import $ from 'jquery';

import axios from "axios"

Vue.config.productionTip = false
Vue.prototype.$http=axios;
Vue.prototype.$api = "/api";//生产环境打包时 将其替换为http://localhost:8888/data

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
