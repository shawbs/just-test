import { Storage } from '@util';
import API_MAIN from '@api/main';

export default {
    namespaced: true,
    modules: {},
    state: {
        userData: Storage.get('userData') || null,
        invite_id: Storage.get('invite_id') || 0
    },
    getters: {
        user_id(state,getters){
            const {userData} = state;
            return userData ? userData.user_id : 0
        },
        isLogin(state, getters){
            return !!getters.user_id
        }
    },
    mutations: {
        setUserData(state, data) {
            state.userData = data;
            Storage.set('userData', data)
        },
        setInviteId(state, invite_id){
            Storage.set('invite_id', invite_id);
        }
    },
    actions: {
      getUserData({commit}){
        API_MAIN.getUserData().then(res => {
          commit('setUserData', res)
        })
      }
    }
};
