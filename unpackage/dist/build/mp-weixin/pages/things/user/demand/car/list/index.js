(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/things/user/demand/car/list/index"],{"07c3":function(e,t,a){"use strict";a.r(t);var n=a("e1a1"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},"89d2":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var n={cuCustom:function(){return Promise.all([a.e("common/vendor"),a.e("components/cu-custom/cu-custom")]).then(a.bind(null,"9112"))},popLinkDialog:function(){return a.e("components/popLinkDialog/popLinkDialog").then(a.bind(null,"5a7e"))},popLoading:function(){return a.e("components/popLoading/popLoading").then(a.bind(null,"3da7"))},popDialog:function(){return a.e("components/popDialog/popDialog").then(a.bind(null,"d4d8"))},tipModal:function(){return a.e("components/tipModal/tipModal").then(a.bind(null,"7a98"))},login:function(){return Promise.all([a.e("common/vendor"),a.e("components/login/login")]).then(a.bind(null,"5925"))}},r=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"90b3":function(e,t,a){"use strict";(function(e){a("fd24");n(a("66fd"));var t=n(a("9cd8"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},"9c91":function(e,t,a){"use strict";var n=a("acdb"),r=a.n(n);r.a},"9cd8":function(e,t,a){"use strict";a.r(t);var n=a("89d2"),r=a("07c3");for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("9c91");var o,l=a("f0c5"),u=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,"51485d4c",null,!1,n["a"],o);t["default"]=u.exports},acdb:function(e,t,a){},e1a1:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("d373"),r=(a("1898"),a("2f62"));i(a("8d92")),a("b642"),i(a("b358"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s=null,c={data:function(){return u({buttonType:!1,appBaseData:null,userInfo:{},tabCur:1,scrollLeft:0,tabData:[{id:1,value:10,name:"审核中"},{id:2,value:20,name:"未通过"},{id:3,value:30,name:"待确认"},{id:4,value:40,name:"交易中"},{id:5,value:50,name:"已完成"}],listData:[{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]}]},"buttonType",!1)},watch:{"$store.getters.base_refreshPage":function(e){e&&(s.clearPageFun(),s.base({name:"refreshPage",value:!1}))},"$store.getters.base_buttonType":function(e){s.buttonType=e}},computed:l({},(0,r.mapGetters)(["base_cancelOrderType"])),methods:l(l({},(0,r.mapMutations)(["modal","base"])),{},{clearPageFun:function(e){s.listData=[{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]},{page:1,page_size:10,pageMore:!0,list:[]}],s.getCarOrder()},tabSelect:function(e){if(s.tabCur==e.currentTarget.dataset.id)return!1;s.tabCur=e.currentTarget.dataset.id,s.scrollLeft=60*(e.currentTarget.dataset.id-1),s.listData[s.tabCur-1].list.length<=0&&s.listData[s.tabCur-1].pageMore&&s.getCarOrder()},cancelOrderFun:function(e){var t={order_id:e.currentTarget.dataset.id,type:s.base_cancelOrderType[1].value};s.buttonType=!0,(0,n.demandCancelOrders_api)(t,s).then((function(t){s.$delete(s.listData[s.tabCur-1].list,e.currentTarget.dataset.index),s.buttonType=!1,s.modal({name:"popTipModal",value:{type:!0,tipTitle:"提示",tipContent:"取消成功"}})})).catch((function(e){console.log(e),s.buttonType=!1}))},linkToUpdate:function(t){s.buttonType=!0,e.navigateTo({url:"/pages/things/user/demand/car/updateOrder/index?truck_id=".concat(t.currentTarget.dataset.id),complete:function(e){s.buttonType=!1}})},linkToUploadReceipt:function(t){e.navigateTo({url:"/pages/things/user/demand/car/uploadReceipt/index?order_id=".concat(t.currentTarget.dataset.id)})},confirmTransportFun:function(e){var t={release_order_id:e.currentTarget.dataset.id};s.buttonType=!0,(0,n.confirmTransactionReleaseCars_api)(t,s).then((function(e){s.modal({name:"popTipModal",value:{type:!0,tipTitle:"提示",tipContent:"请开始运输货物"}}),s.listData[3]={page:1,page_size:10,pageMore:!0,list:[]},s.buttonType=!1,s.getCarOrder()})).catch((function(e){console.log(e),s.buttonType=!1}))},linkToOrderInfo:function(t){s.buttonType=!0,e.navigateTo({url:"/pages/things/user/demand/car/info/index?order_id=".concat(t.currentTarget.dataset.id),complete:function(e){s.buttonType=!1}})},getCarOrder:function(e){var t={page:s.listData[s.tabCur-1].page,page_size:s.listData[s.tabCur-1].page_size,status:s.tabData[s.tabCur-1].value};(0,n.userReleaseTruckList_api)(t,s).then((function(e){s.updateListData(e.list,e.total)})).catch((function(e){console.log(e)}))},updateListData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;switch(Number(s.tabData[s.tabCur-1].value)){case 10:s.listData[0].list=s.listData[0].list.concat(e),s.listData[0].list.length>=t?s.listData[0].pageMore=!1:s.listData[0].page++;break;case 20:s.listData[1].list=s.listData[1].list.concat(e),s.listData[1].list.length>=t?s.listData[1].pageMore=!1:s.listData[1].page++;break;case 30:s.listData[2].list=s.listData[2].list.concat(e),s.listData[2].list.length>=t?s.listData[2].pageMore=!1:s.listData[2].page++;break;case 40:s.listData[3].list=s.listData[3].list.concat(e),s.listData[3].list.length>=t?s.listData[3].pageMore=!1:s.listData[3].page++;break;default:break}},getMoreData:function(e){var t=!1;switch(Number(s.tabData.value)){case 10:t=s.listData[0].pageMore;break;case 20:t=s.listData[1].pageMore;break;case 30:t=s.listData[2].pageMore;break;case 40:t=s.listData[3].pageMore;break;default:break}if(!t)return!1;s.getCarOrder()}}),onLoad:function(e){s=this,s.tabCur=e.type?e.type:1,s.getCarOrder()}};t.default=c}).call(this,a("543d")["default"])}},[["90b3","common/runtime","common/vendor"]]]);