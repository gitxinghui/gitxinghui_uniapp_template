<!--
 * @Description: 登录模板
 * @Version: 1.0.0
 * @Autor: gitxinghui
 * @Date: 2020-12-05 02:04:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-21 23:22:54
-->
<template name="login">
    <view class="login_page" :class="login_show?'show animation-slide-left':'hide'" @touchmove.stop.prevent="moveStop">
        <view class="close_box" @tap="closeLogin">
            <text class="cuIcon-close"></text>
        </view>
        <view class="content">
            <view class="content_title">获取以下信息</view>
            <view class="flex justify-start align-start tip_box">
                <text class="cuIcon-roundcheck"></text>
                <view class="tip_text">你的账号信息（昵称、头像、地区及性别）</view>
            </view>
        </view>
        <view class="flex justify-center align-center btn_box">
            <button class="cu-btn agree_btn" open-type="getUserInfo" @getuserinfo="getUserInfo">同意</button>
            <button class="cu-btn cancel_btn" @tap="closeLogin">取消</button>
        </view>
    </view>
</template>

<script>
import { login_api } from '@/api/index.js';
import { appData } from '@/utils/config.js';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import storage from '@/utils/storage.js';
export default {
    name: 'login',
    props: {},
    watch: {
        '$store.getters.login_show': function(val) {
            this.login_show = val;
        }
    },
    data() {
        return {
            login_show: true
        }
    },
    methods: {
        ...mapMutations([
            'base',
            'modal',
            'user'
        ]),
        ...mapActions([
            'demoactions'
        ]),
        moveStop: function(e) {},
        /**关闭登录框
         * @description: 
         * @param {*} e
         * @return {*}
         * @author: gitxinghui
         */
        closeLogin(e) {
            this.modal({name:'login_show',value: false});
            uni.reLaunch({
                url: '/pages/home/index'
            });
        },
        getUserInfo(userInfo, isLogin) {
            console.log(userInfo,isLogin);
            let that = this;
			if (isLogin) {
                storage.set('userInfo',userInfo);
				that.getLoginInfo(userInfo);
			} else {
				uni.login({
					success(res) {
						uni.showLoading({ title: '正在登录中' });
						uni.getUserInfo({
							// #ifdef MP-WEIXIN
							lang: 'zh_CN', //头条不支持该字段
							// #endif
							// #ifdef MP-TOUTIAO
							withCredentials: true,
							// #endif
							success(userInfo) {
                                userInfo.code = res.code;
                                storage.set('userInfo',userInfo);
                                that.user({name:'userInfo',value: userInfo});
                                that.getLoginInfo(userInfo);
							},
							fail(err) {
                                // 用户未曾授权
                                console.log('用户按了拒绝按钮');
								uni.hideLoading();
							}
						});
					},
					fail(err) {
						uni.hideLoading();
						uni.showToast({
							title:err.errMsg,
							icon:'none'
						})
					}
				});
			}
        },
        getLoginInfo(e) {
            let that = this;
            console.log(e);
            let params = {
                encryptedData: e.encryptedData,
                iv: e.iv,
                code: e.code
            };
			login_api(params).then(res=>{
                uni.hideLoading();
                storage.set('token',res.data.token);
                storage.set('userId',res.data.user_id);
                that.user({name:'token',value: res.data.token});
                that.user({name:'userId',value: res.data.user_id});
                that.modal({name:'login_show',value:false});

                // let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
                // let curRoute = routes[routes.length - 1].route // 获取当前页面路由，也就是最后一个打开的页面路由
                that.base({name:'refreshPage',value:true});
                // console.log(curRoute);
                // uni.redirectTo({
                //     url: curRoute,
                //     fail:err=>{
                //         console.log(err);
                //     }
                // });
            }).catch(err=>{
                uni.hideLoading();
                that.modal({name:'popTipModal',value: {type:true,tipTitle:'登录失败',tipContent:err.msg}});
            });
		},
    }
}
</script>
<style lang="scss" scoped>
    .login_page {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background-color: #FFF;
        z-index: 1025;
        .close_box {
            position: absolute;
            left: 33upx;
            top: 66upx;
            .cuIcon-close {
                font-size: 66upx;
                color: #000000;
            }
        }
        .content {
            padding: 0 93upx 0 63upx;
            margin-top: 331upx;
            .content_title {
                font-size: 48upx;
                color: #000000;
            }
            .tip_box {
                margin-top: 52upx;
                .cuIcon-roundcheck {
                    font-size: 36upx;
                    color: #000000;
                }
                .tip_text {
                    font-size: 32upx;
                    color: #000000;
                    line-height: 42upx;
                    margin-left: 21upx;
                }
            }
        }
        .btn_box {
            margin-top: 448upx;
            flex-direction: column;
            .agree_btn {
                width: 360upx;
                height: 80upx;
                background: #55C06A;
                border-radius: 10upx;
                font-size: 36upx;
                color: #FFFFFF;
                padding: 0;
            }
            .cancel_btn {
                width: 360upx;
                height: 80upx;
                background: #F2F2F2;
                border-radius: 10upx;
                font-size: 36upx;
                color: #55C06A;
                padding: 0;
                margin-top: 29upx;
            }
        }
    }
</style>