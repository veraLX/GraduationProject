import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/* 页面 */
import bookDetails from '@/components/pages/bookDetails.vue'
import bookStore from '@/components/pages/bookStore.vue'
import homePage from '@/components/pages/homePage.vue'
/* 组件 */
import BottomNavigation from '../components/BottomNavigation'
import TopHead from '../components/TopHead'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
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
      path: '/BottomNavigation',
      name: 'BottomNavigation',
      component: BottomNavigation
    },
    {
      path: '/TopHead',
      name: 'TopHead',
      component: TopHead
    }
  ]
})
