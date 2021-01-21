import http_config from './config';
import http_interface from './interface';
// request 封装
import httpRequest from './../plug/luch-request/index.js';
const $http = new httpRequest();

// 缓存
import storage from '@/utils/storage.js';




/**
 * 获取配置信息
 * @param {*} e 
 */
const config_api = (e={},$that=null)=> {
    let params = e;
    return new Promise((resolve,reject)=>{
        $http.post(http_config.app_url + http_interface.config, params).then(res => {
            if (res.data.code == -1) {
                // 登录过期
                reject(res.data);
            }else if (res.data.code == 0) {
                // 失败
                reject(res.data);
            }else if (res.data.code == 1) {
                // 成功
                resolve(res.data);
            }else if (res.data.code == -2) {
                // 用户没有认证
                $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'认证',tipContent:res.data.msg,linkUrl:'/pages/things/identity/list/index'}});
            }else{
                // 都不是，按失败处理
                reject(res.data);
            }
        }).catch(err => {
            reject(err);
        })
    });
}

/**
 * 图片上传
 * @param {*} e 
 * @param {*} $that 
 */
const upload_image_api = (e={},$that=null)=> {
    let params = e;
    let queryParams = `&wxapp_id=${http_config.wxapp_id}&token=${storage.get('token')}`;
    return new Promise((resolve,reject)=>{
        uni.uploadFile({
            url: http_config.app_url + http_interface.upload_image + queryParams,
            filePath: params,
            name: 'iFile',
            formData: {},
            success: (res) => {
                let data = JSON.parse(res.data);
                res.data = data;
                if (res.data.code == -1) {
                    // 登录过期
                    reject(res.data);
                }else if (res.data.code == 0) {
                    // 失败
                    reject(res.data);
                }else if (res.data.code == 1) {
                    // 成功
                    resolve(res.data);
                }else if (res.data.code == -2) {
                    // 用户没有认证
                    $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'认证',tipContent:res.data.msg,linkUrl:'/pages/things/identity/list/index'}});
                }else{
                    // 都不是，按失败处理
                    reject(res.data);
                }
            },
            fail: (err)=>{
                reject(err);
            }
        });
    });
}

/**
 * 登录接口
 * @param {*} e 
 */
const login_api = (e={},$that=null)=>{
    let params = e;
    return new Promise((resolve,reject)=>{
        $http.post('http://template.dataanalysis.fun/api/login', params).then(res => {
            if (res.data.code == -1) {
                // 登录过期
                reject(res.data)
            }else if (res.data.code == 0) {
                // 失败
                reject(res.data)
            }else if (res.data.code == 1) {
                // 成功
                resolve(res.data);
            }else if (res.data.code == -2) {
                // 用户没有认证
                $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'认证',tipContent:res.data.msg,linkUrl:'/pages/things/identity/list/index'}});
            }else{
                // 都不是，按失败处理
                reject(res.data)
            }
        }).catch(err => {
            reject(err)
        })
    });
}

/**
 * 登录获取个人信息
 * @param {*} e 
 * @param {*} $that 
 */
const user_info_api = (e={},$that=null)=> {
    let params = {
        wxapp_id: http_config.wxapp_id,
        token: storage.get('token')
    };
    return new Promise((resolve,reject)=>{
        $http.post(http_config.app_url + http_interface.user_info, params).then(res => {
            if (res.data.code == -1) {
                // 登录过期
                $that.modal({name:'login_show',value: true});
                reject(res.data);
            }else if (res.data.code == 0) {
                // 失败
                $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'请求失败',tipContent:res.data.msg,linkUrl:'/pages/home/index'}});
                reject(res.data)
            }else if (res.data.code == 1) {
                // 成功
                resolve(res.data);
            }else if (res.data.code == -2) {
                // 用户没有认证
                $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'认证',tipContent:res.data.msg,linkUrl:'/pages/things/identity/list/index'}});
            }else{
                // 都不是，按失败处理
                $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'请求失败',tipContent:res.data.msg,linkUrl:'/pages/home/index'}});
                reject(res.data)
            }
        }).catch(err => {
            $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'请求失败',tipContent:`statusCode:${err.statusCode}`,linkUrl:'/pages/home/index'}});
            reject(err)
        })
    });
}

/**
 * 获取个人信息
 * @param {*} e 
 * @param {*} $that 
 */
const getPersonalInfo_api = (e={},$that=null)=> {
    let params = {
        wxapp_id: http_config.wxapp_id,
        token: storage.get('token')
    };
    return new Promise((resolve,reject)=>{
        $http.post(http_config.app_url + http_interface.user_info, params).then(res => {
            if (res.data.code == -1) {
                // 登录过期
                $that.modal({name:'login_show',value: true});
                reject(res.data);
            }else if (res.data.code == 0) {
                // 失败
                $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'请求失败',tipContent:res.data.msg,linkUrl:'/pages/home/index'}});
                reject(res.data)
            }else if (res.data.code == 1) {
                // 成功
                resolve(res.data);
            }else if (res.data.code == -2) {
                // 用户没有认证
                $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'认证',tipContent:res.data.msg,linkUrl:'/pages/things/identity/list/index'}});
            }else{
                // 都不是，按失败处理
                $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'请求失败',tipContent:res.data.msg,linkUrl:'/pages/home/index'}});
                reject(res.data)
            }
        }).catch(err => {
            $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'请求失败',tipContent:`statusCode:${err.statusCode}`,linkUrl:'/pages/home/index'}});
            reject(err)
        })
    });
}

/**
 * 填写个人信息
 * @param {*} e 
 * @param {*} $that 
 */
const fillInPersonalInfo_api = (e={},$that=null)=> {
    let params = {
        ...e
    };
    let queryParams = `&wxapp_id=${http_config.wxapp_id}&token=${storage.get('token')}`;
    return new Promise((resolve,reject)=>{
        $http.post(http_config.app_url + http_interface.fillInPersonalInfo + queryParams, params).then(res => {
            if (res.data.code == -1) {
                // 登录过期
                $that.modal({name:'login_show',value: true});
                reject(res.data);
            }else if (res.data.code == 0) {
                // 失败
                $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'请求失败',tipContent:res.data.msg,linkUrl:'/pages/home/index'}});
                reject(res.data)
            }else if (res.data.code == 1) {
                // 成功
                resolve(res.data);
            }else if (res.data.code == -2) {
                // 用户没有认证
                $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'认证',tipContent:res.data.msg,linkUrl:'/pages/things/identity/list/index'}});
            }else{
                // 都不是，按失败处理
                $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'请求失败',tipContent:res.data.msg,linkUrl:'/pages/home/index'}});
                reject(res.data)
            }
        }).catch(err => {
            $that.modal({name:'popLinkDialog',value: {type:true,tipTitle:'请求失败',tipContent:`statusCode:${err.statusCode}`,linkUrl:'/pages/home/index'}});
            reject(err)
        })
    });
}

export {
    config_api,
    upload_image_api,
    login_api,
    user_info_api,
}