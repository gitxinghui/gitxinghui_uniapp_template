/*
 * @Author: your name
 * @Date: 2020-12-27 23:22:22
 * @LastEditTime: 2021-01-22 00:08:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \things_wechat\store\modules\base.js
 */
const state_name = {
    base: 'base',
}
const store = {
    state: {
        appBaseData:{},// 基础信息
        buttonType: false,// 所有按钮点击状态
        refreshPage: false,// 是否刷新当前页面，作用于返回上一页时，更新上一页数据,多用在于详情操作完成后，返回列表页

    },
    getters: {
        base_appBaseData: state=> {
            return state.appBaseData;
        },
        base_buttonType: state=> {
            return state.buttonType
        },
        base_discountData: state=> {
            return state.discountData
        },
        base_cancelOrderType: state=> {
            return state.cancelOrderType
        },
        base_selectOrderType: state=> {
            return state.selectOrderType
        },
        base_refreshPage: state=> {
            return state.refreshPage
        }
    },
    mutations: {
        [state_name.base]: (state, data) => {
            state[data.name] = data.value;
        }
    },
    actions: {
        demoactions: ({ commit }, localeVal) => {
            commit(state_name.base, localeVal)
        }
    }
}
export default store