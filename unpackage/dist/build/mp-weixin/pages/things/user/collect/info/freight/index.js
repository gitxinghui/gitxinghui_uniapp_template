(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/things/user/collect/info/freight/index"],{"14fe":function(e,t,n){"use strict";var o=n("d5fc"),i=n.n(o);i.a},"19fc":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var o={cuCustom:function(){return Promise.all([n.e("common/vendor"),n.e("components/cu-custom/cu-custom")]).then(n.bind(null,"9112"))},wPicker:function(){return n.e("components/w-picker/w-picker").then(n.bind(null,"38dc"))},popLinkDialog:function(){return n.e("components/popLinkDialog/popLinkDialog").then(n.bind(null,"5a7e"))},popLoading:function(){return n.e("components/popLoading/popLoading").then(n.bind(null,"3da7"))},popDialog:function(){return n.e("components/popDialog/popDialog").then(n.bind(null,"d4d8"))},tipModal:function(){return n.e("components/tipModal/tipModal").then(n.bind(null,"7a98"))},login:function(){return Promise.all([n.e("common/vendor"),n.e("components/login/login")]).then(n.bind(null,"5925"))}},i=function(){var e=this,t=e.$createElement;e._self._c},r=[]},"24ee":function(e,t,n){"use strict";n.r(t);var o=n("99b3"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},"99b3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("d373"),i=(n("1898"),n("2f62")),r=l(n("8d92")),a=(n("b642"),l(n("b358")));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=null,p={data:function(){return{appBaseData:null,userInfo:{},goods_id:"",wPickerStart:{visible:!1,result:{value:""},value:["广东省","茂名市","茂南区"],defaultRegion:["广东省","茂名市","茂南区"]},wPickerEnd:{visible:!1,value:["广东省","茂名市","茂南区"],defaultRegion:["广东省","茂名市","茂南区"]},wPickerFreight:{visible:!1,value:"",label:"",list:r.default.get("appBaseData").wxapp.goods_type,defaultProps:{label:"name",value:"value"}},wPickerCar:{visible:!1,value:"",list:[],defaultRegion:""},wPickerDiscount:{visible:!1,value:"",label:"",list:[{label:"0.16",value:20},{label:"1.6",value:30},{label:"3.2",value:40},{label:"8",value:50},{label:"16",value:60}]},start_time:"",end_time:"",buttonType:!1,freight_form_data:null}},watch:{"$store.getters.base_appBaseData":function(e){d.appBaseData=e,d.wPickerFreight.list=e.wxapp.goods_type},"$store.getters.base_buttonType":function(e){d.buttonType=e}},computed:c({},(0,i.mapGetters)(["base_discountData"])),methods:c(c({},(0,i.mapMutations)(["modal","user","base"])),{},{startDateChange:function(e){d.start_time=e.detail.value},endDateChange:function(e){d.end_time=e.detail.value},openWPickerFreight:function(e){d.wPickerFreight.visible=!0},selectFreight:function(e){d.wPickerFreight.label=e.result,d.wPickerFreight.value=e.value},selectCar:function(e){console.log(e)},selectDiscount:function(e){d.wPickerDiscount.label=e.result,d.wPickerDiscount.value=e.value},openWPickerStart:function(e){d.wPickerStart.visible=!0},selectAddressStart:function(e){d.wPickerStart.value=e.result},openWPickerEnd:function(e){d.wPickerEnd.visible=!0},selectAddressEnd:function(e){d.wPickerEnd.value=e.result},formSubmit:function(e){var t=[{name:"loading_region",checkType:"notnull",checkRule:"",errorMsg:"请选择装载地址"},{name:"unloading_region",checkType:"notnull",checkRule:"",errorMsg:"请选择卸载地址"},{name:"goods_name",checkType:"notnull",checkRule:"",errorMsg:"请输入货物名称"},{name:"unit_price",checkType:"morethanzero",errorMsg:"请输入货物运输单价"},{name:"goods_type_label",checkType:"notnull",checkRule:"",errorMsg:"请选择货物类型"},{name:"weight",checkType:"morethanzero",errorMsg:"请输入货物重量"},{name:"goods_medium",checkType:"notnull",checkRule:"",errorMsg:"请输入货物介质"},{name:"loss_range",checkType:"notnull",checkRule:"",errorMsg:"请输入损耗范围"},{name:"start_time",checkType:"notnull",checkRule:"",errorMsg:"请选择装载时间"},{name:"end_time",checkType:"notnull",checkRule:"",errorMsg:"请选择卸载时间"},{name:"radio_type_label",checkType:"notnull",checkRule:"",errorMsg:"请选择折扣比例"}],n=e.detail.value,i=a.default.check(n,t);if(!i)return d.modal({name:"popTipModal",value:{type:!0,tipTitle:"表单错误",tipContent:a.default.error}}),!1;n.goods_id=d.goods_id,d.modal({name:"popLoading",value:!0}),d.base({name:"buttonType",value:!0}),(0,o.updateGoodsCollection_api)(n,d).then((function(e){d.modal({name:"popLoading",value:!1}),d.base({name:"buttonType",value:!1}),d.base({name:"refreshPage",value:!0}),d.modal({name:"popLinkDialog",value:{type:!0,tipTitle:"提示",tipContent:"更新成功",linkUrl:1}})})).catch((function(e){console.log(e),d.modal({name:"popLoading",value:!1}),d.base({name:"buttonType",value:!1})}))},getFreightInfo:function(e){var t={goods_id:d.goods_id};(0,o.getGoodsCollectionInfo_api)(t,d).then((function(e){d.freight_form_data=e,d.wPickerStart.value=e.loadingAddress,d.wPickerEnd.value=e.unloadingAddress,d.wPickerFreight.value=e.goodsTypeId,d.wPickerFreight.label=e.goodsType,d.start_time=e.startTime,d.end_time=e.endTime,d.wPickerDiscount.label=e.radioTypeText,d.wPickerDiscount.value=e.radioType})).catch((function(e){console.log(e)}))}}),onLoad:function(e){if(d=this,!e.goods_id||""==e.goods_id||"undefined"==e.goods_id)return d.modal({name:"popLinkDialog",value:{type:!0,tipTitle:"提示",tipContent:"该货物不存在",linkUrl:1}}),!1;d.goods_id=e.goods_id,d.getFreightInfo()}};t.default=p},"9e38":function(e,t,n){"use strict";n.r(t);var o=n("19fc"),i=n("24ee");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("14fe");var a,l=n("f0c5"),u=Object(l["a"])(i["default"],o["b"],o["c"],!1,null,"2b1c04c9",null,!1,o["a"],a);t["default"]=u.exports},c5b0:function(e,t,n){"use strict";(function(e){n("fd24");o(n("66fd"));var t=o(n("9e38"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},d5fc:function(e,t,n){}},[["c5b0","common/runtime","common/vendor"]]]);