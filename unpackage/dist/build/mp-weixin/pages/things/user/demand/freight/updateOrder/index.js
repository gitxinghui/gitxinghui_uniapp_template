(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/things/user/demand/freight/updateOrder/index"],{"330f":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var o={cuCustom:function(){return Promise.all([n.e("common/vendor"),n.e("components/cu-custom/cu-custom")]).then(n.bind(null,"9112"))},wPicker:function(){return n.e("components/w-picker/w-picker").then(n.bind(null,"38dc"))},popLinkDialog:function(){return n.e("components/popLinkDialog/popLinkDialog").then(n.bind(null,"5a7e"))},popLoading:function(){return n.e("components/popLoading/popLoading").then(n.bind(null,"3da7"))},popDialog:function(){return n.e("components/popDialog/popDialog").then(n.bind(null,"d4d8"))},tipModal:function(){return n.e("components/tipModal/tipModal").then(n.bind(null,"7a98"))},login:function(){return Promise.all([n.e("common/vendor"),n.e("components/login/login")]).then(n.bind(null,"5925"))}},r=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.wPickerDiscount.visible=!0})},i=[]},"79f0":function(e,t,n){"use strict";n.r(t);var o=n("e442"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},"7d1f":function(e,t,n){"use strict";var o=n("fe44"),r=n.n(o);r.a},9704:function(e,t,n){"use strict";n.r(t);var o=n("330f"),r=n("79f0");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("7d1f");var a,l=n("f0c5"),u=Object(l["a"])(r["default"],o["b"],o["c"],!1,null,"6bda164b",null,!1,o["a"],a);t["default"]=u.exports},befd:function(e,t,n){"use strict";(function(e){n("fd24");o(n("66fd"));var t=o(n("9704"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},e442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("d373"),r=(n("1898"),n("2f62")),i=l(n("8d92")),a=(n("b642"),l(n("b358")));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=null,p={data:function(){return{freightType:1,appBaseData:null,userInfo:{},goods_id:"",wPickerStart:{visible:!1,result:{value:""},value:["广东省","茂名市","茂南区"],defaultRegion:["广东省","茂名市","茂南区"]},wPickerEnd:{visible:!1,value:["广东省","茂名市","茂南区"],defaultRegion:["广东省","茂名市","茂南区"]},wPickerFreight:{visible:!1,value:"",label:"",list:i.default.get("appBaseData").wxapp.goods_type,defaultProps:{label:"name",value:"value"}},wPickerCar:{visible:!1,value:"",list:[],defaultRegion:""},wPickerDiscount:{visible:!1,value:"",label:"",list:[{label:"0.16",value:20},{label:"1.6",value:30},{label:"3.2",value:40},{label:"8",value:50},{label:"16",value:60}]},start_time:"",end_time:"",buttonType:!1,freight_form_data:null}},watch:{"$store.getters.base_appBaseData":function(e){s.appBaseData=e,s.wPickerFreight.list=e.wxapp.goods_type},"$store.getters.base_buttonType":function(e){s.buttonType=e}},computed:c({},(0,r.mapGetters)(["base_discountData"])),methods:c(c({},(0,r.mapMutations)(["modal","user","base"])),{},{startDateChange:function(e){s.start_time=e.detail.value},endDateChange:function(e){s.end_time=e.detail.value},openWPickerFreight:function(e){s.wPickerFreight.visible=!0},selectFreight:function(e){s.wPickerFreight.label=e.result,s.wPickerFreight.value=e.value},selectCar:function(e){console.log(e)},selectDiscount:function(e){s.wPickerDiscount.label=e.result,s.wPickerDiscount.value=e.value},openWPickerStart:function(e){s.wPickerStart.visible=!0},selectAddressStart:function(e){s.wPickerStart.value=e.result},openWPickerEnd:function(e){s.wPickerEnd.visible=!0},selectAddressEnd:function(e){s.wPickerEnd.value=e.result},formSubmit:function(e){s.buttonType=!0;var t=[{name:"loading_region",checkType:"notnull",checkRule:"",errorMsg:"请选择装载地址"},{name:"unloading_region",checkType:"notnull",checkRule:"",errorMsg:"请选择卸载地址"},{name:"goods_name",checkType:"notnull",checkRule:"",errorMsg:"请输入货物名称"},{name:"unit_price",checkType:"morethanzero",errorMsg:"请输入货物运输单价"},{name:"goods_type_label",checkType:"notnull",checkRule:"",errorMsg:"请选择货物类型"},{name:"weight",checkType:"morethanzero",errorMsg:"请输入货物重量"},{name:"goods_medium",checkType:"notnull",checkRule:"",errorMsg:"请输入货物介质"},{name:"loss_range",checkType:"notnull",checkRule:"",errorMsg:"请输入损耗范围"},{name:"start_time",checkType:"notnull",checkRule:"",errorMsg:"请选择装载时间"},{name:"end_time",checkType:"notnull",checkRule:"",errorMsg:"请选择卸载时间"},{name:"radio_type_label",checkType:"notnull",checkRule:"",errorMsg:"请选择折扣比例"}],n=e.detail.value,r=a.default.check(n,t);if(!r)return s.modal({name:"popTipModal",value:{type:!0,tipTitle:"表单错误",tipContent:a.default.error}}),s.buttonType=!1,!1;n.order_id=s.goods_id,s.modal({name:"popLoading",value:!0}),s.buttonType=!0,(0,o.updateReleaseGoods_api)(n,s).then((function(e){s.modal({name:"popLoading",value:!1}),s.base({name:"refreshPage",value:!0}),s.modal({name:"popLinkDialog",value:{type:!0,tipTitle:"提示",tipContent:"修改成功",linkUrl:1}}),s.buttonType=!1})).catch((function(e){console.log(e),s.modal({name:"popLoading",value:!1}),s.buttonType=!1}))},getFreightInfo:function(e){var t={order_id:s.goods_id};(0,o.getGoodsOrderDetail_api)(t,s).then((function(e){s.freight_form_data=e,s.wPickerStart.value=e.loadingAddress,s.wPickerEnd.value=e.unloadingAddress,s.wPickerFreight.value=e.goodsTypeId,s.wPickerFreight.label=e.goodsType,s.start_time=e.startTime,s.end_time=e.endTime,s.wPickerDiscount.label=e.radio,s.wPickerDiscount.value=e.radioType})).catch((function(e){console.log(e)}))}}),onLoad:function(e){if(s=this,!e.goods_id||""==e.goods_id||"undefined"==e.goods_id)return s.modal({name:"popLinkDialog",value:{type:!0,tipTitle:"提示",tipContent:"该订单不存在",linkUrl:1}}),!1;s.freightType=2,s.goods_id=e.goods_id,s.getFreightInfo()}};t.default=p},fe44:function(e,t,n){}},[["befd","common/runtime","common/vendor"]]]);