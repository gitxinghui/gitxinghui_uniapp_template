/*
 * @Author: your name
 * @Date: 2020-12-27 23:22:22
 * @LastEditTime: 2020-12-29 00:43:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \things_wechat\main.js
 */
import Vue from 'vue'
import App from './App'

import  {pop as wx} from './utils/pop'
Vue.prototype.$wx = wx();

// 检查数据
import checkData from './utils/checkData';
Vue.prototype.$checkData = checkData;

// request 封装
import './api/index';

//引入vuex
import store from './store';
Vue.prototype.$store = store;

// 全局分享
import share from'./utils/mixins/share.js';
Vue.mixin(share);

Vue.config.productionTip = false;

App.mpType = 'app'

const app = new Vue({
    ...App,
    //挂载
    store
})
app.$mount()
