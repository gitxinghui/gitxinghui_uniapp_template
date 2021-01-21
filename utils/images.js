/*
 * @Author: your name
 * @Date: 2020-12-27 23:21:27
 * @LastEditTime: 2021-01-14 22:33:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \things_wechat\utils\images.js
 */
// 选择图片
function chooseImage(count=1,$that) {
    return new Promise((resolve,reject)=>{
        uni.chooseImage({
            count: count, //默认9
            sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
            success: (res) => {
                resolve(res.tempFilePaths);
            },
            fail: (err) => {
                // 每个页面都带有弹框，直接调用
                $that.popTipModal.tipTitle = '图片上传';
                $that.popTipModal.tipContent = '图片上传失败';
                $that.popTipModal.type = true;
                reject(err);
            }
        });
    });
}

function viewImage(imageList,url) {
    uni.previewImage({
        urls: imageList,// 图片集合
        current: url,// 当前图片路径
    });
}

module.exports = {
	chooseImage: chooseImage,
	viewImage: viewImage,
}