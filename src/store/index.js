import Vue from 'vue'
import Vuex from 'vuex'

import Chat from "@/servers/websocket";
//1.将vuex作为vue插件，扩展在vue对象原型上面(vue.prototype)
//之后在每一个组件上都有一个属性叫$store
Vue.use(Vuex);
//导航信息
import nav from './navInfo/nav'
//创建vuex的实例，即store容器
let store = new Vuex.Store({
    //状态，存储整个应用的数据
    state: {
        //websocket实例对象
        ws: Chat,
        //好友列表
        friendList: [
            // {
            //     fMail: '777@163.com',
            //     name: '美少女'
            // },
            // {
            //     fMail: '666@163.com',
            //     name: '帅哥'
            // }
        ],
        //正在聊天的好友账号
        chatUser: {},
        //聊天的信息
        chatInfoMap: {
            // "777@163.com": [{
            //     time: "下午3:00",
            //     name: state.friendList.filter(elt => elt.fMail === key)[0].name,
            //     font: state.chatInfoMap[key][state.chatInfoMap[key].length - 1].text,
            //     tip: 0
            // },
            // {
            //     time: "下午3:00",
            //     name: state.friendList.filter(elt => elt.fMail === key)[0].name,
            //     font: state.chatInfoMap[key][state.chatInfoMap[key].length - 1].text,
            //     tip: 0
            // }]
        },
        //当前用户的详细信息
        myDetailInfo: {
            photoPic: '',
            name: '',
            mail: '',
            sex: '',
            sign: ''
        },
        //请求添加好友的数组
        addFriendArr: [
            {
                name: '小朋友1',
                fMail: '001@163.com',
                time: new Date().getTime(),
                tip: '我是小猪',
                state: true
            },
            {
                name: '小朋友2',
                fMail: '002@163.com',
                time: 1418506578728,
                tip: '我是小狗',
                state: false
            }
        ],
    },
    mutations: {
        loadFriendList(state, payload) {
            state.friendList = payload;
        },
        addFriendList(state, payload) {
            state.friendList = {
                ...state.friendList,
                payload
            }
        },
        delFriendList(state, mail) {
            state.friendList = state.friendList.filter(elt => elt.fMail !== mail);
        },
        updateChatUser(state, payload) {
            state.chatUser = payload;
        },
        updateChatInfo(state, payload) {
            if (state.chatInfoMap[payload.fMail]) {
                Vue.set(state.chatInfoMap, payload.fMail, [
                    ...state.chatInfoMap[payload.fMail],
                    {
                        id: Math.random(),
                        type: payload.type,
                        text: payload.text,
                        time: payload.time
                    }
                ])
            } else {
                Vue.set(state.chatInfoMap, payload.fMail, [{
                    id: Math.random(),
                    type: payload.type,
                    text: payload.text,
                    time: payload.time
                }])
            }

        },
        updateUserName(state, payload) {
            state.userName = payload;
        },
        updateAddFriendArr(state, payload) {
            state.addFriendArr = [...state.addFriendArr, payload];
        },
        deleteAddFriendArr(state, payload) {
            state.addFriendArr = state.addFriendArr.filter(elt => elt.fMail !== payload)
        },
        updateMyDetailInfo(state, payload) {
            state.myDetailInfo = payload;
        }
    },
    getters: {
        //过滤近三天的好友请求列表
        recentAddReq(state) {
            return state.addFriendArr.filter(elt => new Date().getTime() - elt.time <= 1000 * 60 * 60 * 24 * 3)
        },
        //过滤三天前的好友请求列表
        outTimeAddReq(state) {
            return state.addFriendArr.filter(elt => new Date().getTime() - elt.time > 1000 * 60 * 60 * 24 * 3)
        },
        //当前存在会话的好友数组
        chatListGetter(state) {
            let chatList = {};
            Object.keys(state.chatInfoMap).forEach((key) => {
                chatList[key] = {
                    time: "下午3:00",
                    name: state.friendList.filter(elt => elt.fMail === key)[0].name,
                    font: state.chatInfoMap[key][state.chatInfoMap[key].length - 1].text,
                    tip: 0
                }
            })
            return chatList;
        }
    },
    actions: {
        updateAddFriendAction(store, payload) {
            store.commit('addFriendArr', payload)
        }
    },
    modules: {
        nav: nav
    }
})

//导出实例
export default store;