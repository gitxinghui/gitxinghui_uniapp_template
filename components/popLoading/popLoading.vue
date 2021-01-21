<template name="popLoading">
	<view>
		<view class="cu-load load-modal popModal" v-if="popLoading">
			<!-- <image class="popImage" src="./../../static/images/global/loading.gif" mode="widthFix"></image> -->
			<view class="gray-text">加载中</view>
		</view>
	</view>
</template>


<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
	export default {
        name: 'popLoading',
        watch: {
			'$store.getters.modal_popLoading': function(val) {
				this.popLoading = val;
			}
		},
		data() {
			return {
                popLoading: false,
			};
		},
		methods: {
            ...mapMutations([
				'modal'
			]),
			...mapActions([
				'demoactions'
			]),
			isLoading(e) {
				this.isLoad = e.detail.value;
			},
		}
	}
</script>

<style lang="scss" scoped>
    .popModal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 140rpx;
        left: 0;
        margin: auto;
        width: 260upx;
        height: 260upx;
        background-color: #ffffff;
        border-radius: 10rpx;
        box-shadow: 0 0 0rpx 2000rpx rgba(0, 0, 0, 0.5);
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 28upx;
        z-index: 9999;
        line-height: 2.4em;
        // border-radius: 50%;
    }
    .popModal .popImage {
        width: 100%;
        border-radius: 50%;
    }
</style>>
