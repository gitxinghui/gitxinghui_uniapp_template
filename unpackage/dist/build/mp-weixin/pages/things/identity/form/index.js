(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/things/identity/form/index"],{"43d7":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}));var i={cuCustom:function(){return Promise.all([t.e("common/vendor"),t.e("components/cu-custom/cu-custom")]).then(t.bind(null,"9112"))},wPicker:function(){return t.e("components/w-picker/w-picker").then(t.bind(null,"38dc"))},popLinkDialog:function(){return t.e("components/popLinkDialog/popLinkDialog").then(t.bind(null,"5a7e"))},popLoading:function(){return t.e("components/popLoading/popLoading").then(t.bind(null,"3da7"))},popDialog:function(){return t.e("components/popDialog/popDialog").then(t.bind(null,"d4d8"))},tipModal:function(){return t.e("components/tipModal/tipModal").then(t.bind(null,"7a98"))},login:function(){return Promise.all([t.e("common/vendor"),t.e("components/login/login")]).then(t.bind(null,"5925"))}},o=function(){var e=this,n=e.$createElement;e._self._c},a=[]},6817:function(e,n,t){"use strict";t.r(n);var i=t("a48f"),o=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=o.a},"71ef":function(e,n,t){"use strict";var i=t("e604"),o=t.n(i);o.a},"9bd7":function(e,n,t){},"9dae":function(e,n,t){"use strict";(function(e){t("fd24");i(t("66fd"));var n=i(t("fbc5"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},a48f:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(t("8294")),o=u(t("9608")),a=t("d373"),c=(t("1898"),t("2f62")),r=(u(t("8d92")),t("b642"),u(t("b358")));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return f(e)||s(e)||d(e)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,n){if(e){if("string"===typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(e,n):void 0}}function s(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function f(e){if(Array.isArray(e))return m(e)}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var v=null,y={data:function(){return{pageType:1,index:0,uploadImage:[],popLoadModal:!1,popDiaModal:!1,popTipModal:{type:!1,tipTitle:"",tipContent:""},memberMeal:[{id:1,name:"普通会员",price:0},{id:2,name:"企业会员",price:.01},{id:3,name:"代言人",price:.01}],wPickerDiscount:{visible:!1,value:"",label:"",list:[]},contract_pic_id:"",contract_pic_id_value:"",business_license_pic_id:"",business_license_pic_id_value:"",identity_positive_pic_id:"",identity_positive_pic_id_value:"",identity_back_pic_id:"",identity_back_pic_id_value:""}},computed:_({},(0,c.mapGetters)(["base_discountData"])),methods:_(_({},(0,c.mapMutations)(["modal","user","base"])),{},{chooseImage:function(e){i.default.chooseImage(1,this).then((function(n){var t=n[0];(0,a.upload_image_api)(t,v).then((function(t){console.log(t),v.updateImage(e.currentTarget.dataset.id,t.data.file_id,n[0])})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},updateImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0;switch(Number(e)){case 1:v.identity_back_pic_id_value=t,v.identity_back_pic_id=n;break;case 2:v.identity_positive_pic_id_value=t,v.identity_positive_pic_id=n;break;case 3:v.business_license_pic_id_value=t,v.business_license_pic_id=n;break;case 4:v.contract_pic_id_value=t,v.contract_pic_id=n;break;default:break}},viewImage:function(e){i.default.viewImage([e.currentTarget.dataset.url],e.currentTarget.dataset.url)},delImg:function(n){e.showModal({title:"提示",content:"确定删除图片吗",cancelText:"取消",confirmText:"确定",success:function(e){if(e.confirm)switch(Number(n.currentTarget.dataset.id)){case 1:v.identity_back_pic_id_value="",v.identity_back_pic_id="";break;case 2:v.identity_positive_pic_id_value="",v.identity_positive_pic_id="";break;case 3:v.business_license_pic_id_value="",v.business_license_pic_id="";break;case 4:v.contract_pic_id_value="",v.contract_pic_id="";break;default:break}}})},closeModal:function(e){this.$wx.closeModal(this,e.type)},formSubmit:function(e){v.buttonType=!0;var n=[{name:"real_name",checkType:"notnull",checkRule:"",errorMsg:"请输入真实姓名"},{name:"mobile",checkType:"notnull",checkRule:"",errorMsg:"请输入手机号码"},{name:"identity_positive_pic_id",checkType:"notnull",checkRule:"",errorMsg:"请选择身份证正面照上传"},{name:"identity_back_pic_id",checkType:"notnull",checkRule:"",errorMsg:"请选择身份证反面照上传"},{name:"id_code",checkType:"notnull",checkRule:"",errorMsg:"请输入身份证号码"}];switch(Number(v.pageType)){case 2:n=[{name:"business_license_pic_id",checkType:"notnull",checkRule:"",errorMsg:"请选择营业执照上传"}].concat(l(n));break;case 3:n=[{name:"contract_pic_id",checkType:"notnull",checkRule:"",errorMsg:"请选择合同照上传"}].concat(l(n));break;default:break}var t=e.detail.value,i=r.default.check(t,n);if(!i)return v.modal({name:"popTipModal",value:{type:!0,tipTitle:"表单错误",tipContent:r.default.error}}),v.buttonType=!1,!1;switch(v.modal({name:"popLoading",value:!0}),Number(v.pageType)){case 1:(0,a.generalMemberCertification_api)(t,v).then((function(e){v.modal({name:"popLoading",value:!1}),v.buttonType=!1,v.base({name:"refreshPage",value:!0}),v.modal({name:"popLinkDialog",value:{type:!0,tipTitle:"提示",tipContent:"提交成功，等待审核",linkUrl:2}})})).catch((function(e){console.log(e),v.modal({name:"popLoading",value:!1}),v.buttonType=!1}));break;case 2:(0,a.enterpriseMemberCertification_api)(t,v).then((function(e){o.default.wxPay(e.payment,v).then((function(e){v.modal({name:"popLoading",value:!1}),v.buttonType=!1,v.base({name:"refreshPage",value:!0}),v.modal({name:"popLinkDialog",value:{type:!0,tipTitle:"提示",tipContent:"提交成功，等待审核",linkUrl:"/pages/home/index?pageCur=user"}})})).catch((function(e){console.log(e),v.modal({name:"popLoading",value:!1}),v.buttonType=!1}))})).catch((function(e){console.log(e),v.modal({name:"popLoading",value:!1}),v.buttonType=!1}));break;case 3:(0,a.spokesmanMemberCertification_api)(t,v).then((function(e){o.default.wxPay(e.payment,v).then((function(e){v.modal({name:"popLoading",value:!1}),v.buttonType=!1,v.base({name:"refreshPage",value:!0}),v.modal({name:"popLinkDialog",value:{type:!0,tipTitle:"提示",tipContent:"提交成功，等待审核",linkUrl:"/pages/home/index?pageCur=user"}})})).catch((function(e){console.log(e),v.modal({name:"popLoading",value:!1}),v.buttonType=!1}))})).catch((function(e){console.log(e),v.modal({name:"popLoading",value:!1}),v.buttonType=!1}));break;default:break}},onLoad:function(e){v=this,v.pageType=e.pageType}})};n.default=y}).call(this,t("543d")["default"])},b962:function(e,n,t){"use strict";var i=t("9bd7"),o=t.n(i);o.a},e604:function(e,n,t){},fbc5:function(e,n,t){"use strict";t.r(n);var i=t("43d7"),o=t("6817");for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("b962"),t("71ef");var c,r=t("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"2470b104",null,!1,i["a"],c);n["default"]=u.exports}},[["9dae","common/runtime","common/vendor"]]]);