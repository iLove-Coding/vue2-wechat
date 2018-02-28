export let navConf = [
    //登录页
    {
        name: 'Login',
        path: '/login',
        component: () => import('@/pages/login/Login')
    },
    //注册页
    {
        name: 'Register',
        path: '/register',
        component: () => import('@/pages/register/Register')
    },
    //会话页
    {
        name: 'Chat',
        path: '/chat',
        title: '会话',
        component: () => import('@/pages/chat/Chat'),
        children: [
            //正在聊天页
            {
                name: 'ChatOn',
                path: 'chaton/:userId?',
                component: () => import('@/pages/chaton/ChatOn')
            },
        ]
    },

    //通讯录页
    {
        name: 'Friend',
        path: '/friend/:id?',
        title: '通讯录',
        component: () => import('@/pages/friend/Friend.vue'),
        children: [
            //新的好友页
            {
                name: 'NewFriend',
                path: 'newFriend',
                component: () => import('@/pages/friend/children/newFriend/NewFriend')
            },
            //群聊页
            {
                name: 'ChatGroup',
                path: 'chatGroup',
                component: () => import('@/pages/friend/children/chatGroup/ChatGroup')
            },
            //好友名片页
            {
                name: 'Card',
                path: 'card/:userId',
                component: () => import('@/pages/friend/children/infoCard/InfoCard'),
            },
            //发消息页
            {
                name: 'SendMsg',
                path: 'send/:userId?',
                component: () => import('@/pages/chaton/ChatOn')
            },
            //好友资料设置页
            {
                name: 'EditFriend',
                path: 'edit/:userId?',
                component: () => import('@/pages/friend/children/editFriend/EditFriend')
            },
            //搜索页
            {
                name: 'AddFriend',
                path: 'add/:userId?',
                component: () => import('@/pages/friend/children/addFriend/AddFriend')
            }
        ]
    },
    //发现页
    {
        name: 'Find',
        path: '/find',
        title: '发现',
        component: () => import('@/pages/find/Find.vue'),
        children: [
            //朋友圈页
            {
                name: 'Moments',
                path: 'moments',
                component: () => import('@/pages/find/children/moments/Moments')
            }
        ]
    },
    //我的信息页
    {
        name: 'MyInfo',
        path: '/myinfo',
        title: '我',
        component: () => import('@/pages/myInfo/Myinfo.vue'),
        children: [
            {
                path: 'info',
                name: 'Info',
                component: () => import('@/pages/myInfo/children/Info.vue'),
                children:[
                    {
                        path:'editName',
                        name:'EditName',
                        component:()=>import('@/pages/myInfo/children/children/editName/editName.vue')
                    },
                    {
                        path:'editSex',
                        name:'EditSex',
                        component:()=>import('@/pages/myInfo/children/children/editSex/editSex.vue')
                    },
                    {
                        path:'editSign',
                        name:'EditSign',
                        component:()=>import('@/pages/myInfo/children/children/editSign/editSign.vue')
                    }
                ]
            }
        ]
    },

]

