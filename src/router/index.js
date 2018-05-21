import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/* 页面 */
import bookDetails from '@/components/pages/bookDetails.vue'
import bookStore from '@/components/pages/bookStore.vue'
import homePage from '@/components/pages/homePage.vue'
import editPage from '@/components/pages/editPage.vue'
import loginPage from '@/components/pages/loginPage.vue'
import myPage from '@/components/pages/myPage.vue'
import timePage from '@/components/pages/timePage.vue'
/* 组件 */
import BottomNavigation from '../components/BottomNavigation'
import TopHead from '../components/TopHead'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: loginPage
    },
    // {
    //   path: '/',
    //   name: 'homePage',
    //   component: homePage
    // },
    {
      path: '/homePage',
      name: 'homePage',
      meta: {
        // 添加该字段，表示进入这个路由是需要登录的
         requireAuth: true,  
        },
      component: homePage
    },
    {
      path: '/bookDetails',
      name: 'bookDetails',
      component: bookDetails
    },
    {
      path: '/bookStore',
      name: 'bookStore',
      component: bookStore
    },
    {
      path: '/editPage',
      name: 'editPage',
      component: editPage
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage
    },
    {
      path: '/myPage',
      name: 'myPage',
      component: myPage
    },
    {
      path: '/timePage',
      name: 'timePage',
      component: timePage
    }
  ]
})
