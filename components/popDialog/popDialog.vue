<template name="popDialog">
	<view class="popDialog">
		<view class="cu-modal" :class="popDialog.type?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">{{popDialog.title}}</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="bg-white padding-xl">{{popDialog.tipContent}}</view>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub text-green solid-left" @tap="hideModal">取消</view>
					<view class="action margin-0 flex-sub  solid-left" @tap="hideModal">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
	export default {
        name: 'popDialog',
		watch: {
			'$store.getters.modal_popDialog': function(val) {
				this.popDialog = val;
			}
		},
		data() {
			return {
				popDialog: {
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
			...mapActions([
				'demoactions'
			]),
			hideModal(e) {
                let that = this;
                that.modal({name:'popDialog',value: {type:false,tipTitle:'',tipContent:''}});
			},
		}
	}
</script>

<style lang="scss" scoped>
    .popDialog {
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
