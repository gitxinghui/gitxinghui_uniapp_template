/*
 * @Author: your name
 * @Date: 2020-12-29 00:05:44
 * @LastEditTime: 2021-01-15 03:41:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \things_wechat\utils\mixins\share.js
 */
/*全局分享，在页面data里面设置share数据，可以自定义分享内容
 * @Author: your name
 * @Date: 2020-12-29 00:05:44
 * @LastEditTime: 2020-12-29 00:23:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \things_wechat\utils\share.js
 */
import storage from '@/utils/storage.js';
export default {
	data() {
		return {
		   //这个share可以在每个页面的data中设置相应的转发内容
           share:{
                title:'众创物联',
                path:`/pages/home/index?promo_code=${storage.get('userData').promo_code}`,
                imageUrl:'',
                desc:'',
                content:''
            }
		}
	},
	onShareAppMessage(res) {
		return {
			title: this.share.title,
			path: this.share.path,
			// imageUrl: this.share.imageUrl,
			// desc: this.share.desc,
			// content: this.share.content,
			success(res) {
				uni.showToast({
					title: '分享成功'
				})
			},
			fail(res) {
				uni.showToast({
					title: '分享失败',
					icon: 'none'
				})
			}
		}

	},
	onShareTimeline(res) {//分享到朋友圈
        return {}
    },
}
