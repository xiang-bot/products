import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from '@/layout/default.vue'
import Index from '@/page/index.vue'
import goodList from '@/page/goodsList.vue'
import blank from '@/layout/blank.vue'
import login from '@/page/login.vue'
import register from '@/page/register.vue'
import changCity from '@/page/changeCity.vue'
import productDetail from '@/page/productDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    component: DefaultPage,
    redirect: '/index',
    children: [{
      path: 's/:name',
      name: 'goods',
      component: goodList
    }, {
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/changCity',
      name: 'changCity',
      component: changCity
    }, {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    }]
  }, {
    path: '/blank',
    name: 'blank',
    component: blank,
    children: [{
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/register',
      name: 'register',
      component: register
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
