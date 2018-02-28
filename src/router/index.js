import Vue from 'vue'
import Router from 'vue-router'
import { navConf } from './data'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    //地址为空，跳转到登录页
    {
      path: '/',
      redirect: {name:'Login'},
    },
    ...navConf
  ]
})

//没有登录，访问的不是登录页，跳到登录页
router.beforeEach((to, from, next) => {
  let mail = localStorage.getItem('mail');
  //判断是否登录，已登录状态访问登录页自动进入主页
  if (mail && to.name === "Login") {
    next({
      name: 'Friend'
    })
  }
  //未登录，访问的不是登录页，跳转到登录
  if ((!mail && to.name !== "Login") && (!mail && to.name !== "Register")) {
    next({
      name: "Login"
    })
  } else {
    next();
  }

})
export default router;