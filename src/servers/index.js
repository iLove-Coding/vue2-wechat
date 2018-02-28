import axios from 'axios'
import qs from 'qs';
//这个文件放所有请求的方法
const instance = axios.create({
    baseURL: 'http://192.168.1.106',
    // timeout: 5000,
    headers: {}
})

//封装函数
/*reqLogin参数说明
    params:{
         email:456@163.com,
         pwd:123
    }
*/
export function reqLogin(params) {
    //返回promise对象，可以使用.then
    return instance.post('/user/login', qs.stringify(params))
}
export function reqTwoCode(params) {
    return instance.post('/code/create', qs.stringify(params))
}
/*reqRegister参数说明
    params:{
         email:456@163.com,
         pwd:123,
         codeNum:xxx
    }
*/
export function reqRegister(params) {
    return instance.post('/user/register', qs.stringify(params))
}

/*queryUserInfo参数说明
    params:{
         email:456@163.com,
         pwd:123,
         codeNum:xxx
    }
*/
export function queryUserInfo(params) {
    return instance.post('/user/info', qs.stringify(params))
}

/*updateUserInfo参数说明
    params:{
         email:456@163.com,
         pwd:123,
         codeNum:xxx
    }
*/
export function updateUserInfo(params) {
    return instance.post('/user/update', qs.stringify(params))
}
/*deleteFriendReq参数说明
    params:{
         from:,
         to:
    }
*/
export function deleteFriendReq(params) {
    return instance.post('/delete', qs.stringify(params))
}
/*deleteFriend参数说明
    params:{
         from:,
         to:
    }
*/
export function deleteFriend(params) {
    return instance.post('friend/delete', qs.stringify(params))
}
export function getLoginMessge(code) {
    switch (code) {
        case 1:
            console.log('请求成功');
            return true;
        case 2:
            console.log('网络异常');
            return false;
        case 3:
            console.log('登录过期');
            return false;
        case 4:
            console.log('其他错误');
            return false;
    }
}

