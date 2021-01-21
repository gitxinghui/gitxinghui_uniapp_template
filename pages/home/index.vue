<!--
 * @Description: 
 * @Version: Do not edit
 * @Autor: gitxinghui
 * @Date: 2020-11-21 08:53:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-21 23:10:42
-->
<template>
	<view id="things_home">
		<!-- 登录 -->
		<login></login>
	</view>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
	import { login_api } from '@/api/index.js';
	let that = null;
	export default {
		watch: {},
		data() {
			return {
				pageCur: 'index',
			}
		},
		methods: {
			...mapMutations([
				'modal',
				'user'
			]),
			...mapActions([
				'demoactions'
			]),
			navChange: function(e) {
				if (e.currentTarget.dataset.cur === that.pageCur) return false;
				switch (e.currentTarget.dataset.cur) {
					case 'index':
						
						break;
					case 'publish':
						
						break;
					case 'user':
						
						break;
					default:
						break;
				}
				this.pageCur = e.currentTarget.dataset.cur
			},
			closeModal: function(e) {
				this.$wx.closeModal(this,e.type);
			},
			/**关闭登录框
			* @description: 
			* @param {*} e
			* @return {*}
			* @author: gitxinghui
			*/
			closeLogin: function(e) {
				console.log(e.login_show)
				that.login_show = e.login_show;
			}
		},
		onLoad(options) {
			that = this;
			that.pageCur = options.pageCur ? options.pageCur : 'index';
		}
	}
</script>

<style lang="scss" scoped>
    @import "./index";
</style>>
