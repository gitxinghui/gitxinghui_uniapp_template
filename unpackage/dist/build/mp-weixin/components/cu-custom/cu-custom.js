(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/cu-custom/cu-custom"],{"31a3":function(t,e,r){"use strict";var n=r("44b6"),a=r.n(n);a.a},"441b":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"44b6":function(t,e,r){},"4d73":function(t,e,r){"use strict";r.r(e);var n=r("a567"),a=r.n(n);for(var u in n)"default"!==u&&function(t){r.d(e,t,(function(){return n[t]}))}(u);e["default"]=a.a},9112:function(t,e,r){"use strict";r.r(e);var n=r("441b"),a=r("4d73");for(var u in a)"default"!==u&&function(t){r.d(e,t,(function(){return a[t]}))}(u);r("31a3");var c,o=r("f0c5"),i=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"0e204dbc",null,!1,n["a"],c);e["default"]=i.exports},a567:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r("2f62");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,e=this.CustomBar,r=this.bgImage,n="height:".concat(e,"px;padding-top:").concat(t,"px;");return this.bgImage&&(n="".concat(n,"background-image:url(").concat(r,");")),n}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!0},bgImage:{type:String,default:""},refresh:{type:Boolean,default:!1}},methods:u(u({},(0,n.mapMutations)(["base"])),{},{BackPage:function(){this.refresh&&this.base({name:"refreshPage",value:!0}),t.navigateBack({delta:1})}})};e.default=o}).call(this,r("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cu-custom/cu-custom-create-component',
    {
        'components/cu-custom/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9112"))
        })
    },
    [['components/cu-custom/cu-custom-create-component']]
]);
