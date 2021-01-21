<!--
 * @Author: your name
 * @Date: 2020-12-27 23:22:22
 * @LastEditTime: 2021-01-20 02:09:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \things_wechat\components\tipModal\tipModal.vue
-->
<template name="tipModal">
	<view class="tipModal">
        <view class="cu-modal" :class="popTipModal.type?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">{{popTipModal.tipTitle}}</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					{{popTipModal.tipContent}}
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
	export default {
        name: 'tipModal',
        props: {},
		watch: {
			'$store.getters.modal_popTipModal': function(val) {
				console.log(val);
				this.popTipModal = val;
			}
		},
		data() {
			return {
				popTipModal: {
					type: false,
					tipTitle: '提示',
					tipContent: ''
				},
			};
		},
		methods: {
			...mapMutations([
				'modal'
			]),
			hideModal(e) {
				let that = this;
                that.modal({name:'popTipModal',value: {type:false,tipTitle:'',tipContent:''}});
			},
		}
	}
</script>

<style lang="scss" scoped>
    .tipModal {
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
