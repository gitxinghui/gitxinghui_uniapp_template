(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/things/grabOrderHall/freight/fill/index"],{"2efd":function(e,n,t){},"3be7":function(e,n,t){"use strict";var r=t("2efd"),a=t.n(r);a.a},4293:function(e,n,t){"use strict";t.r(n);var r=t("a87b"),a=t("a462");for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t("3be7");var i,c=t("f0c5"),l=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"2069e6ea",null,!1,r["a"],i);n["default"]=l.exports},6408:function(e,n,t){"use strict";(function(e){t("fd24");r(t("66fd"));var n=r(t("4293"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"9b9b":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("d373"),a=(t("1898"),t("2f62")),o=c(t("8d92")),i=(t("b642"),c(t("b358")));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=null,d={data:function(){return{order_id:"",buttonType:!1,appBaseData:null,userInfo:{},wPickerStart:{visible:!1,result:{value:""},value:[],defaultRegion:["广东省","茂名市","茂南区"]},wPickerEnd:{visible:!1,value:[],defaultRegion:["广东省","茂名市","茂南区"]},wPickerFreight:{visible:!1,value:"",label:"",list:o.default.get("appBaseData").wxapp.goods_type,defaultProps:{label:"name",value:"value"}},wPickerCar:{visible:!1,value:"",list:o.default.get("appBaseData").wxapp.car_type,defaultProps:{label:"name",value:"value"}},carPicker:{plateShow:!1,plateNo:"",car_number:"",listing_car_number:"",type:1},wPickerDiscount:{visible:!1,value:"",label:"",list:[]},start_time:"",end_time:""}},watch:{"$store.getters.base_appBaseData":function(e){s.appBaseData=e,s.wPickerCar.list=e.wxapp.car_type},"$store.getters.base_buttonType":function(e){s.buttonType=e}},computed:u({},(0,a.mapGetters)(["base_discountData"])),methods:u(u({},(0,a.mapMutations)(["modal","user","base"])),{},{startDateChange:function(e){s.start_time=e.detail.value},endDateChange:function(e){s.end_time=e.detail.value},openWPickerFreight:function(e){s.wPickerFreight.visible=!0},selectFreight:function(e){s.wPickerFreight.label=e.result,s.wPickerFreight.value=e.value},selectAddressStart:function(e){s.wPickerStart.value=e.result},selectAddressEnd:function(e){s.wPickerEnd.value=e.result},openPlatePicker:function(e){s.carPicker.type=e,1==e&&(s.carPicker.plateNo=s.carPicker.car_number),2==e&&(s.carPicker.plateNo=s.carPicker.listing_car_number),s.carPicker.plateShow=!0},setPlate:function(e){e.length>=7&&(1===s.carPicker.type&&(s.carPicker.car_number=e),2===s.carPicker.type&&(s.carPicker.listing_car_number=e)),s.carPicker.plateShow=!1},selectCar:function(e){s.wPickerCar.label=e.result,s.wPickerCar.value=e.value},selectDiscount:function(e){s.wPickerDiscount.label=e.result,s.wPickerDiscount.value=e.value},formSubmit:function(e){var n=[{name:"loading_region",checkType:"notnull",checkRule:"",errorMsg:"请选择装载地址"},{name:"unloading_region",checkType:"notnull",checkRule:"",errorMsg:"请选择卸载地址"},{name:"car_number",checkType:"notnull",checkRule:"",errorMsg:"请输入车牌号"},{name:"listing_car_number",checkType:"morethanzero",errorMsg:"请输入挂牌号"},{name:"car_filling",checkType:"notnull",checkRule:"",errorMsg:"请输入车内罐质"},{name:"mobile",checkType:"morethanzero",errorMsg:"请输入司机手机号码"},{name:"realname",checkType:"notnull",checkRule:"",errorMsg:"请输入司机真实姓名"},{name:"id_card",checkType:"notnull",checkRule:"",errorMsg:"请输入司机身份证号码"},{name:"escort_name",checkType:"morethanzero",errorMsg:"请输入押运员姓名"},{name:"escort_id_card",checkType:"notnull",checkRule:"",errorMsg:"请输入押运员身份证号码"},{name:"car_type",checkType:"notnull",checkRule:"",errorMsg:"请选择车辆种类"},{name:"cubic_number",checkType:"notnull",checkRule:"",errorMsg:"请输入罐体立方数(m3)"},{name:"car_company",checkType:"notnull",checkRule:"",errorMsg:"请输入车辆所属公司"}],t=e.detail.value,a=i.default.check(t,n);if(!a)return s.modal({name:"popTipModal",value:{type:!0,tipTitle:"表单错误",tipContent:i.default.error}}),!1;t.order_id=s.order_id,s.modal({name:"popLoading",value:!0}),s.base({name:"buttonType",value:!0}),(0,r.grabbingGoodsOrder_api)(t,s).then((function(e){s.modal({name:"popLoading",value:!1}),s.base({name:"buttonType",value:!1}),s.base({name:"refreshPage",value:!0}),s.modal({name:"popLinkDialog",value:{type:!0,tipTitle:"提示",tipContent:"抢单成功",linkUrl:1}})})).catch((function(e){console.log(e),s.modal({name:"popLoading",value:!1}),s.base({name:"buttonType",value:!1})}))}}),onLoad:function(e){if(s=this,!e.order_id||""==e.order_id||"undefined"==e.order_id)return s.modal({name:"popLinkDialog",value:{type:!0,tipTitle:"提示",tipContent:"该订单不存在",linkUrl:1}}),!1;s.order_id=e.order_id}};n.default=d},a462:function(e,n,t){"use strict";t.r(n);var r=t("9b9b"),a=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=a.a},a87b:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return r}));var r={cuCustom:function(){return Promise.all([t.e("common/vendor"),t.e("components/cu-custom/cu-custom")]).then(t.bind(null,"9112"))},wPicker:function(){return t.e("components/w-picker/w-picker").then(t.bind(null,"38dc"))},plateInput:function(){return t.e("components/plateInput/plateInput").then(t.bind(null,"6f35"))},popLinkDialog:function(){return t.e("components/popLinkDialog/popLinkDialog").then(t.bind(null,"5a7e"))},popLoading:function(){return t.e("components/popLoading/popLoading").then(t.bind(null,"3da7"))},popDialog:function(){return t.e("components/popDialog/popDialog").then(t.bind(null,"d4d8"))},tipModal:function(){return t.e("components/tipModal/tipModal").then(t.bind(null,"7a98"))},login:function(){return Promise.all([t.e("common/vendor"),t.e("components/login/login")]).then(t.bind(null,"5925"))}},a=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.wPickerStart.visible=!0},e.e1=function(n){e.wPickerEnd.visible=!0},e.e2=function(n){e.wPickerCar.visible=!0},e.e3=function(n){e.carPicker.plateShow=!1})},o=[]}},[["6408","common/runtime","common/vendor"]]]);