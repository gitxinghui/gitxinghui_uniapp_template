/*
 * @Author: your name
 * @Date: 2020-12-27 23:22:22
 * @LastEditTime: 2021-01-22 00:06:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \things_wechat\api\interface.js
 */
// 接口列表
const config = '/api/wxapp/base';// 小程序配置信息
const login = '/api/user/login';// 登录
const user_info = '/api/user.index/detail';// 登录
const upload_image = '/api/upload/image';// 图片上传



export default {
    config,
    upload_image,
    login,
    user_info,
};