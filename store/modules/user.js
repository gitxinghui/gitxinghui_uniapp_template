const state_name = {
    user: 'user',
}
const store = {
    state: {
        userInfo: uni.getStorageSync("userInfo") || {},
        userData: uni.getStorageSync("userData") || {},
        token: uni.getStorageSync("token") || {},
        userId:  uni.getStorageSync("userId") || {},
		expires_time: null,
		isGOAuth: false, //是否已跳转至登录界面,防止路由重复注入
		authPopupShow: false, //x-authorize 弹窗是否显示
    },
    getters: {
        user_userData: state=> {
            return state.userData
        },
        user_token: state=> {
            return state.token
        },
        user_userInfo: state=> {
            return state.userInfo
        }
    },
    mutations: {
        [state_name.user]: (state, data) => {
            state[data.name] = data.value;
        }
    },
    actions: {
        demoactions: ({ commit }, localeVal) => {
            commit(state_name.user, localeVal)
        }
    }
}
export default store