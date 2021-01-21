<!--
 * @Author: your name
 * @Date: 2020-12-27 23:22:22
 * @LastEditTime: 2021-01-15 02:40:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \things_wechat\components\popLinkDialog\popLinkDialog.vue
-->
<template name="popLinkDialog">
	<view class="popLinkDialog">
		<view class="cu-modal" :class="popLinkDialog.type?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">{{popLinkDialog.title}}</view>
				</view>
				<view class="bg-white padding-xl">{{popLinkDialog.tipContent}}</view>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub  solid-left" @tap="submitModal">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
	export default {
        name: 'popLinkDialog',
		watch: {
			'$store.getters.modal_popLinkDialog': function(val) {
				this.popLinkDialog = val;
			}
		},
		data() {
			return {
				popLinkDialog: {
					type: false,
					tipTitle: '提示',
                    tipContent: '',
                    linkUrl: ''
				},
			};
		},
		methods: {
            ...mapMutations([
				'modal'
			]),
            submitModal(e) {
				let that = this;
				if (that.popLinkDialog.linkUrl === 1 || that.popLinkDialog.linkUrl === 2) {
					uni.navigateBack({
						delta: that.popLinkDialog.linkUrl
					});
				}else if (that.popLinkDialog.linkUrl != '' || that.popLinkDialog.linkUrl) {
					uni.reLaunch({
						url: that.popLinkDialog.linkUrl
					});
				}
				that.modal({name:'popLinkDialog',value: {type:false,tipTitle:'',tipContent:'',linkUrl:''}});
            }
		}
	}
</script>

<style lang="scss" scoped>
    .popLinkDialog {
        .cu-modal {
            .cu-dialog{
                background-color: #ffffff;
	            border-radius: 20rpx;
            }
        }
    }
    .popModal .popImage {
        width: 100%;
        border-radius: 50%;
    }
</style>>
