// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// Vue.prototype.axios = axios
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
import store from './store/'
import router from './router'
import './servers/websocket'
import './servers/index'

// 引入全部组件 
import MintUI  from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.config.productionTip = false

//处理刷新会断开websoket连接问题
window.onload = () => {
  if (!localStorage.getItem('mail')) return;
  alert("与服务器断开连接，请重新登录");
  localStorage.removeItem('mail');
  router.replace({ name: 'Login' })
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})