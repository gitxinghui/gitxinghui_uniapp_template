(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/things/user/order/car/list/index"],{"1de1":function(e,t,a){"use strict";var n=a("cad7"),r=a.n(n);r.a},"262e":function(e,t,a){"use strict";a.r(t);var n=a("d74a"),r=a("541b");for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("1de1");var o,l=a("f0c5"),s=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,"5c9ea054",null,!1,n["a"],o);t["default"]=s.exports},"541b":function(e,t,a){"use strict";a.r(t);var n=a("d6bb"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},b8ef:function(e,t,a){"use strict";(function(e){a("fd24");n(a("66fd"));var t=n(a("262e"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},cad7:function(e,t,a){},d6bb:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("d373"),r=(a("1898"),a("2f62"));i(a("8d92")),a("b642"),i(a("b358"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=null,c={data:function(){return{appBaseData:null,userInfo:{},tabCur:1,scrollLeft:0,tabData:[{id:1,value:10,name:"待确认"},{id:2,value:20,name:"待付款"},{id:3,value:30,name:"审核中"},{id:4,value:40,name:"运输中"},{id:5,value:50,name:"已完成"}],listData:[{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]}],buttonType:!1}},watch:{"$store.getters.base_refreshPage":function(e){e&&(u.clearPageFun(),u.base({name:"refreshPage",value:!1}),u.getCarOrder())},"$store.getters.base_buttonType":function(e){u.buttonType=e},"$store.getters.user_token":function(e){u.getCarOrder()}},computed:l({},(0,r.mapGetters)(["base_cancelOrderType"])),methods:l(l({},(0,r.mapMutations)(["modal","base"])),{},{clearPageFun:function(e){u.listData=[{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]}]},tabSelect:function(e){if(u.tabCur==e.currentTarget.dataset.id)return!1;u.tabCur=e.currentTarget.dataset.id,u.scrollLeft=60*(e.currentTarget.dataset.id-1),u.listData[u.tabCur-1].list.length<=0&&u.listData[u.tabCur-1].pageMore&&u.getCarOrder()},cancelOrderFun:function(e){u.buttonType=!0;var t={order_id:e.currentTarget.dataset.id,type:u.base_cancelOrderType[1].value};(0,n.cancelOrder_api)(t,u).then((function(t){u.$delete(u.listData[u.tabCur-1].list,e.currentTarget.dataset.index),u.modal({name:"popTipModal",value:{type:!0,tipTitle:"提示",tipContent:"取消成功"}}),u.base({name:"refreshPage",value:!0}),u.buttonType=!1})).catch((function(e){console.log(e),u.buttonType=!1}))},payCarsOrderFun:function(t){u.buttonType=!0,e.navigateTo({url:"/pages/things/user/order/pay/index?order_id=".concat(t.currentTarget.dataset.id),complete:function(e){u.buttonType=!1}})},getCallFun:function(t){e.makePhoneCall({phoneNumber:"15626236839"})},confirmFun:function(e){u.buttonType=!0;var t={grabs_order_id:e.currentTarget.dataset.id};(0,n.grabConfirmReceiptGrabsGoods_api)(t,u).then((function(t){u.$delete(u.listData[u.tabCur-1].list,e.currentTarget.dataset.index),u.modal({name:"popTipModal",value:{type:!0,tipTitle:"提示",tipContent:"确认完成"}}),u.base({name:"refreshPage",value:!0}),u.buttonType=!1})).catch((function(e){console.log(e),u.buttonType=!1}))},linkToOrderCarInfo:function(t){u.buttonType=!0,e.navigateTo({url:"/pages/things/user/order/car/info/index?order_id=".concat(t.currentTarget.dataset.id),complete:function(e){u.buttonType=!1}})},getCarOrder:function(e){var t={page:u.listData[u.tabCur-1].page,page_size:u.listData[u.tabCur-1].page_size,status:u.tabData[u.tabCur-1].value};(0,n.grabsTruckList_api)(t,u).then((function(e){u.updateListData(e.list,e.total)})).catch((function(e){console.log(e)}))},updateListData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;switch(Number(u.tabData[u.tabCur-1].value)){case 10:u.listData[0].list=u.listData[0].list.concat(e),u.listData[0].list.length>=t?u.listData[0].pageMore=!1:u.listData[0].page++;break;case 20:u.listData[1].list=u.listData[1].list.concat(e),u.listData[1].list.length>=t?u.listData[1].pageMore=!1:u.listData[1].page++;break;case 30:u.listData[2].list=u.listData[2].list.concat(e),u.listData[2].list.length>=t?u.listData[2].pageMore=!1:u.listData[2].page++;break;case 40:u.listData[3].list=u.listData[3].list.concat(e),u.listData[3].list.length>=t?u.listData[3].pageMore=!1:u.listData[3].page++;break;case 50:u.listData[4].list=u.listData[4].list.concat(e),u.listData[4].list.length>=t?u.listData[4].pageMore=!1:u.listData[4].page++;break;default:break}},getMoreData:function(e){var t=!1;switch(Number(u.tabData.value)){case 10:t=u.listData[0].pageMore;break;case 20:t=u.listData[1].pageMore;break;case 30:t=u.listData[2].pageMore;break;case 40:t=u.listData[3].pageMore;break;case 50:t=u.listData[4].pageMore;break;default:break}if(!t)return!1;u.getCarOrder()}}),onLoad:function(e){u=this,u.tabCur=e.type?e.type:1,u.getCarOrder()}};t.default=c}).call(this,a("543d")["default"])},d74a:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var n={cuCustom:function(){return Promise.all([a.e("common/vendor"),a.e("components/cu-custom/cu-custom")]).then(a.bind(null,"9112"))},popLinkDialog:function(){return a.e("components/popLinkDialog/popLinkDialog").then(a.bind(null,"5a7e"))},popLoading:function(){return a.e("components/popLoading/popLoading").then(a.bind(null,"3da7"))},popDialog:function(){return a.e("components/popDialog/popDialog").then(a.bind(null,"d4d8"))},tipModal:function(){return a.e("components/tipModal/tipModal").then(a.bind(null,"7a98"))},login:function(){return Promise.all([a.e("common/vendor"),a.e("components/login/login")]).then(a.bind(null,"5925"))}},r=function(){var e=this,t=e.$createElement;e._self._c},i=[]}},[["b8ef","common/runtime","common/vendor"]]]);