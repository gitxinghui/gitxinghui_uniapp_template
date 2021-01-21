<!--
 * @Description: 
 * @Version: Do not edit
 * @Autor: gitxinghui
 * @Date: 2020-11-24 01:34:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-21 23:19:38
-->
<script>
	import Vue from 'vue';
	import { config_api } from '@/api/index.js';
	import { appData } from '@/utils/config.js';
	import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
	import storage from '@/utils/storage.js';
	let that = null;
	export default {
		methods: {
			...mapMutations([
				'base',
			]),
		},
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			});
			// 获取小程序配置信息
			// config_api({wxapp_id: appData.wxapp_id}).then(res=>{
			// 	storage.set('appBaseData',res.data);
			// 	this.base({name:'appBaseData',value: res.data});
			// }).catch(err=>{
			// 	console.log(err);
			// })
		},
		onLoad: function(options) {
			that = this;
			if (options.promo_code && !storage.get('promo_code')) {
				storage.set('promo_code',options.promo_code);
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	/*colorui样式 */
	@import "./plug/colorui/main";
	@import "./plug/colorui/icon";
	@import "./plug/colorui/animation.css";

	/* pop 样式 */
	@import "./plug/pop";
	/* 自定义公共样式 */
	@import "./uni.scss";
</style>
