/*
 * @Author: your name
 * @Date: 2021-01-15 00:33:44
 * @LastEditTime: 2021-01-21 13:05:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \things_wechat\utils\pay.js
 */
/*支付封装
 * @Author: your name
 * @Date: 2021-01-15 00:33:44
 * @LastEditTime: 2021-01-15 00:33:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \things_wechat\utils\pay.js
 */


const payType = [
    {
        payName: '微信',
        value: 1,
        id: 1,
    },
    {
        payName: '支付宝',
        value: 2,
        id: 2,
    },
    {
        payName: '银行卡',
        value: 3,
        id: 3,
    },
    {
        payName: '余额',
        value: 4,
        id: 4,
    }
];

function wxPay(data,$that) {
    return new Promise((resolve,reject) => {
        uni.requestPayment({
            provider: 'wxpay',
            timeStamp: data.timeStamp,
            nonceStr: data.nonceStr,
            package: `prepay_id=${data.prepay_id}`,
            signType: 'MD5',
            paySign: data.paySign,
            success: function (res) {
                resolve(JSON.stringify(res));
            },
            fail: function (err) {
                $that.modal({name:'popTipModal',value:{type:true,tipTitle:'提示',tipContent:'充值失败'}});
                reject(err);
            }
        });
    });
}

module.exports = {
    payType,
    wxPay,
}