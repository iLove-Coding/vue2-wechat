let Chat = {};

Chat.socket = null;

Chat.connect = (function (host) {
  if ('WebSocket' in window) {
    Chat.socket = new WebSocket(host);
  } else if ('MozWebSocket' in window) {
    Chat.socket = new MozWebSocket(host);
  } else {
    console.log('Error: WebSocket is not supported by this browser.');
    return;
  }

  Chat.socket.onopen = function () {
    console.log('Info: WebSocket connection opened.');
  };

  Chat.socket.onclose = function () {
    //		alert('Info: WebSocket closed.');
  };

  Chat.socket.onmessage = function (message) {
    console.log(message.data);
    let msg = JSON.parse(message.data);
    switch (msg.msgId) {
      case 1:
        console.log('生成用户列表');
        //写方法
        setFriendList(msg);
        break;
      case 2:
        console.log('收到消息');
        //方法
        onReceiveMsg(msg);
        break;
      case 3:
        console.log('收到自己的信息');
        onUserMsg(msg);
        break;
      default:
        break;
    }
  };
});

Chat.initialize = function () {
  if (window.location.protocol == 'http:') {
    Chat.connect('ws://' + "localhost:8080" + '/websocket/chat');
  } else {
    Chat.connect('wss://' + "localhost:8080" + '/websocket/chat');
  }
};

Chat.sendMessage = (function (msg) {
  var msgStr = JSON.stringify(msg);
  Chat.socket.send(msgStr);
});

Chat.initialize();


//-----------------------------------
import store from '@/store' //vuex

if (!'WebSocket' in window) {
  alert("当前浏览器不支持在线聊天功能，请更换版本较新的浏览器")
}

let ws; //全局websocket对象
const baseURL = '';
bindFunc = (cntor, model) => {
  if (!ws) return
  ws.onopen = (res) => {
    console.log('连接成功')
  }

  ws.onmessage = (res) => {
    console.log('接收信息成功')
    let result = JSON.parse(res.data)
    //先判断这条信息是否是这个人发送的， 是则再将对应的消息设置发送状态为成功，不是则直接将信息push到history中，其他则为消息推送
    if (result.msgFrom == cntor.username) {
      for (let i = model.length - 1; i > -1; i--) {
        if (model[i].message == result.msg
          && model[i].date - new Date(result.date) == 0) {
          //找到发送者发送的该条信息
          model[i].status = 'success'
          break
        }
      }
    } else if (model) {
      model.push({
        username: result.msgFrom,
        message: result.msg,
        groupId: result.groupId,
        date: new Date(result.date)
      })
    } else {
      //主要未读消息提醒
      //先清空未读消息

      store.commit('addUnReadCount', result.count) //添加总的未读消息数
      store.commit('addSelfUnReadCount', { //设置单个聊天室的未读消息
        msgFrom: result.msgFrom,
        count: result.count
      })
    }
  }

  ws.onclose = (res) => {
    console.log('连接已被关闭')
  }

  ws.onerror = (err) => {
    console.log(err)
  }
}

export default {
  connect({ url, params, model, connector }) {
    const cntor = deepClone(connector)

    url ? url = baseURL + '/' + url : url = baseURL
    if (JSON.stringify(params) != '{}') {
      url += '?'
      for (let [index, elem] of Object.entries(params)) {
        url = url + index + '=' + elem + '&'
      }
      url = url.substring(0, url.length - 1)
    }


    if (ws) {
      switch (ws.readyState) {
        case 0 || 1://正在连接、连接成功
          let timer1 = setInterval(() => {
            console.log('关闭ws请求发送ing...')
            ws.close()
            if (ws.readyState == 3) {
              clearInterval(timer1)
              ws = new WebSocket(url)
              store.commit('resetUnReadInfoNum')
              bindFunc(cntor, model)

            }
          }, 500)
          break

        case 2://正在关闭
          let timer2 = setInterval(() => {
            ws.close()
            if (ws.readyState == 3) {
              clearInterval(timer2)
              ws = new WebSocket(url)
              store.commit('resetUnReadInfoNum')
              bindFunc(cntor, model)
            }
          }, 500)
          break

        default:
          ws = new WebSocket(url)
          store.commit('resetUnReadInfoNum')
          bindFunc(cntor, model)
      }
    } else {
      store.commit('resetUnReadInfoNum')
      ws = new WebSocket(url)
      bindFunc(cntor, model)
    }
  },
  send(msg) {
    if (!ws || ws.readyState != 1)
      return '当前不存在websocket链接信息'

    ws.send(JSON.stringify(msg))
  },
  close() {
    if (ws.readyState == 1)
      ws.close()
  },
}


// --------------
let Chat = {};

Chat.socket = null;

Chat.connect = (function (host, param) {

  return new Promise((resolve, reject) => {
    console.log(param)
    if ('WebSocket' in window) {
      Chat.socket = new WebSocket(host);
    } else if ('MozWebSocket' in window) {
      Chat.socket = new MozWebSocket(host);
    } else {
      reject();
      console.log('Error: WebSocket is not supported by this browser.');
    }

    Chat.socket.onopen = function () {
      Chat.socket.send(param)
      resolve();
      console.log('Info: WebSocket connection opened.');
    }

    Chat.socket.onclose = function () {
      alert('Info: WebSocket closed.');
    }

    Chat.socket.onmessage = function (message) {
      console.log(message);

      switch (message.msgId) {
        case 10001:
          console.log('生成用户列表');
          //写方法
          // store.commit('updateFriendList',JSON.parse(message))
          break;
        case 2:
          console.log('收到消息');
          //方法

          break;
        case 3:
          console.log('收到自己的信息');

          break;
        default:
          break;
      }
    }

  });


})

Chat.initialize = function (param) {
  return new Promise((resolve, reject) => {
    if (window.location.protocol == 'http:') {
      Chat.connect('ws://wechat.com/server', param)
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    } else {
      Chat.connect('ws://wechat.com/server', param)
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    }
  })
}


Chat.sendMessage = (function (msg) {
  var msgStr = JSON.stringify(msg);
  Chat.socket.send(msgStr);
})