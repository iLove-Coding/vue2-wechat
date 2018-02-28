import store from '../store/'
let Chat = {};

Chat.socket = null;

Chat.connect = (function (host, param) {
	if ('WebSocket' in window) {
		Chat.socket = new WebSocket(host);
	} else if ('MozWebSocket' in window) {
		Chat.socket = new MozWebSocket(host);
	} else {
		console.log('Error: WebSocket is not supported by this browser.');
	}

	Chat.socket.onopen = function () {
		Chat.socket.send(JSON.stringify(param))
		console.log('Info: WebSocket connection opened.');
	}

	Chat.socket.onclose = function () {
		console.log('Info: WebSocket closed.');
	}

	Chat.socket.onmessage = function (message) {
		message = JSON.parse(message.data);
		switch (message.msgId) {
			case 10001:
				console.log('客户端登录初始化响应');
				console.log(message)
				store.commit('loadFriendList', message.friendList)
				break;
			case 10002:
				console.log('客户端请求添加好友');
				if (message.to === localStorage.getItem('mail')) {
					store.commit('updateAddFriendArr',
						{
							name: '新的好友',
							fMail: message.from,
							time: message.time,
							tip: message.tip
						});
				}
				//方法
				break;
			case 10003:
				console.log('客户端接受好友申请');
				if (message.from === localStorage.getItem('mail')) {
					store.commit('addFriendList', {
						name: message.name,
						fMail: message.to
					})

				} else {
					store.commit('addFriendList', {
						name: message.name,
						fMail: message.from
					})
				}
				break;
			case 10004:
				console.log('客户端删除好友申请')
				store.commit('delFriendList', message.to)
				break;
			case 10005:
				console.log('客户端发送聊天消息');
				console.log(message)
				if (message.from === localStorage.getItem('mail')) {
					store.commit('updateChatInfo', {
						fMail: message.to,
						type: 1,
						text: message.text,
						time: message.time
					})

				} else {
					store.commit('updateChatInfo', {
						fMail: message.from,
						type: 2,
						text: message.text,
						time: message.time
					})
				}
				break;
			default:
				break;
		}
	}
})

Chat.initialize = function (param) {
	console.log(param)
	if (window.location.protocol == 'http:') {
		Chat.connect('ws://192.168.1.106/server', param)
	} else {
		Chat.connect('wss://192.168.1.106/server', param)
	}
}

Chat.sendMessage = (function (msg) {
		var msgStr = JSON.stringify(msg);
		Chat.socket.send(msgStr);
})

export default Chat;