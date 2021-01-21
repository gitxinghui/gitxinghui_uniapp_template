(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/things/user/demand/components/selectFreight/selectFreight"],{"0dd9":function(t,e,n){"use strict";n.r(e);var r=n("cbd1"),u=n("73b8");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("30d2");var c,a=n("f0c5"),o=Object(a["a"])(u["default"],r["b"],r["c"],!1,null,"82259ad8",null,!1,r["a"],c);e["default"]=o.exports},"30d2":function(t,e,n){"use strict";var r=n("c176"),u=n.n(r);u.a},"70f4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{modalShow:{type:Boolean,default:!1},freightList:{type:Array,default:[]}},data:function(){return{indicatorDots:!0,autoplay:!1,interval:2e3,duration:500,current:0}},methods:{changeCurrentFun:function(t){this.current=t.detail.current},hideModal:function(){this.modalShow=!1,this.$emit("closeSelectFreightModal",!1)},selectFreightFun:function(t){this.$emit("selectFreightFun",this.freightList[this.current])}}};e.default=r},"73b8":function(t,e,n){"use strict";n.r(e);var r=n("70f4"),u=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=u.a},c176:function(t,e,n){},cbd1:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var u=function(){var t=this,e=t.$createElement;t._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/things/user/demand/components/selectFreight/selectFreight-create-component',
    {
        'pages/things/user/demand/components/selectFreight/selectFreight-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0dd9"))
        })
    },
    [['pages/things/user/demand/components/selectFreight/selectFreight-create-component']]
]);
