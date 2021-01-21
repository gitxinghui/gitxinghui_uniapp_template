/*
 * @Author: your name
 * @Date: 2021-01-21 23:08:29
 * @LastEditTime: 2021-01-21 23:13:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uniapp_template\store\modules\modal.js
 */
const state_name = {
    modal: 'modal',
}
const store = {
    state: {
        popTipModal: {//轻提示
            type: false,
            tipTitle: '',
            tipContent: ''
        },
        popLinkDialog: {//提示框-带确定按钮-带连接
            type: false,
            tipTitle: '提示',
            tipContent: '',
            linkUrl: '',// 带连接跳连接，带数字返回
        },
        popDialog: {
            type: false,
            tipTitle: '提示',
            tipContent: ''
        },
        popLoading: false,// 加载框
        login_show: false,// 登录框
    },
    getters: {
        modal_popTipModal: state => {
            return state.popTipModal;
        },
        login_show: state => {
            return state.login_show;
        },
        modal_popLinkDialog: state=> {
            return state.popLinkDialog;
        },
        modal_popDialog: state=>{
            return state.popDialog;
        },
        modal_popLoading: state=>{
            return state.popLoading;
        }
    },
    mutations: {
        [state_name.modal]: (state, data) => {
            state[data.name] = data.value;
        }
    },
    actions: {
        demoactions: ({ commit }, localeVal) => {
            commit(state_name.modal, localeVal)
        }
    }
}
export default store