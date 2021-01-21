<!--
 * @Description: 顶部导航栏
 * @Version: Do not edit
 * @Autor: gitxinghui
 * @Date: 2020-11-25 20:06:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-21 20:06:49
-->
<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed customBg" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'']">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="text-white" :class="isIndex?'cuIcon-home':'cuIcon-back'"></text>
					<slot name="backText"></slot>
				</view>
				<view class="content text-white" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				isIndex: true,
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: true
			},
			bgImage: {
				type: String,
				default: ''
			},
			refresh: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			...mapMutations([
				'base'
			]),
			BackPage() {
				if (this.refresh) {
					this.base({name:'refreshPage',value:true});
				}
				if (this.isIndex) {
					uni.reLaunch({
						url: '/pages/home/index'
					});
				}else{
					uni.navigateBack({
						delta: 1
					});
				}
			}
		},
		created: function() {
			let pages = getCurrentPages();
			if (pages.length === 1) {
				this.isIndex = true;
			}else{
				this.isIndex = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
    @import "./cu-custom";
</style>>

