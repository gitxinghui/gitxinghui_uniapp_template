<!--
 * @Description: 
 * @Version: Do not edit
 * @Autor: gitxinghui
 * @Date: 2020-11-22 12:58:41
 * @LastEditors: gitxinghui
 * @LastEditTime: 2020-11-22 21:54:50
-->
<template name="publish">
	<view class="things_publish things_width_full things_padding_100">
		<scroll-view scroll-y class="things_width_full page">
			<view class="publish_title">我想发布</view>
            <!-- 直接发布 -->
            <view class="publish_type_box">
                <view class="bg-img flex justify-start align-center things_width_full publish_find publish_find_freight" style="background-image:url('./../../static/images/publish/bg_freight.png')" @tap="linkToPublishFreight">
                    <image class="publish_find_icon" src="./../../static/images/publish/huowu.png" mode="widthFix" />
                    <view class="publish_find_title">发布货物</view>
                </view>
                <view class="bg-img flex justify-start align-center things_width_full publish_find publish_find_car" style="background-image:url('./../../static/images/publish/bg_car.png')" @tap="linkToPublishCar">
                    <image class="publish_find_icon" src="./../../static/images/publish/huoche.png" mode="widthFix" />
                    <view class="publish_find_title">发布货车</view>
                </view>
            </view>
            <view class="things_font_size_28 things_font_base_color13 publish_title_small">从已有货车/货源中选择发布</view>
            <!-- 选择发布 -->
            <view class="publish_type_select_box">
                <view class="bg-white flex justify-start align-center things_width_full publish_select publish_select_freight" @tap="linkToIntelligentFreight">
                    <view class="publish_select_title">选择货源发布</view>
                    <image class="publish_select_icon" src="./../../static/images/publish/list_icon.png" mode="widthFix" />
                </view>
                <view class="bg-white flex justify-start align-center things_width_full publish_select publish_select_car" @tap="linkToIntelligentCar">
                    <view class="publish_select_title">选择货车发布</view>
                    <image class="publish_select_icon" src="./../../static/images/publish/list_icon.png" mode="widthFix" />
                </view>
            </view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "publish",
		data() {
			return {
				
			};
        },
        methods: {
            /**
             * @description: 发布货车
             * @param {*} e
             * @return {*}
             * @author: gitxinghui
             */
            linkToPublishCar(e) {
                uni.navigateTo({
					url: `/pages/things/publish/car/index?type=1`,
					fail: function(err) {
						console.log(err);
					}
				});
            },
            /**
             * @description: 发布货物
             * @param {*} e
             * @return {*}
             * @author: gitxinghui
             */
            linkToPublishFreight(e) {
                uni.navigateTo({
					url: `/pages/things/publish/freight/index?type=1`,
					fail: function(err) {
						console.log(err);
					}
				});
            },
            /**
             * @description: 智能选车
             * @param {*} e
             * @return {*}
             * @author: gitxinghui
             */
            linkToIntelligentCar(e) {
                uni.navigateTo({
					url: `/pages/things/publish/collect/car/index`,
					fail: function(err) {
						console.log(err);
					}
				});
            },
            /**
             * @description: 智能选货
             * @param {*} e
             * @return {*}
             * @author: gitxinghui
             */
            linkToIntelligentFreight(e) {
                uni.navigateTo({
					url: `/pages/things/publish/collect/freight/index`,
					fail: function(err) {
						console.log(err);
					}
				});
            },
        },
		onShow() {
			console.log("success")
		}
	}
</script>

<style lang="scss" scoped>
	@import "./index.scss";
</style>
