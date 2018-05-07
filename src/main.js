// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import routes from './router/index'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import jQuery from 'jquery'
import store from './vuex/store'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/js/bootstrap.min.js'
import './assets/css/bootstrap.min.css'

import './styles/App.css';

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, 
  components: { App },
  
  template: '<App/>',
  render: h => h(App)
})


// const router = new VueRouter({
// 	router
// })
// 全局导航钩子
router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {
      // 通过vuex state获取当前的token是否存在
      // console.log(isEmptyObject(store.state.user)) 
      if(!isEmptyObject(store.state.user)) {   
          next();
      }
      else { 
          next({
              path: '/loginPage',
              query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
  }
  else {
      next();
  }
})


function isEmptyObject(obj) {
  for (var key in obj) {
      return false;
  }
  return true;
}
