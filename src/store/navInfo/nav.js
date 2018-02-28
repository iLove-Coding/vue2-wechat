export default {
    namespaced: true,
    state: {
        nowNavTag: 'friend',
        nowTitleTag: '通讯录',
        nowIconTag: 'fa-user-plus'
    },
    mutations: {
        changeNavTag(state, payload) {
            state.nowNavTag = payload.tag;
            state.nowTitleTag = payload.title;
            state.nowIconTag = payload.icon;
        }
    }
}