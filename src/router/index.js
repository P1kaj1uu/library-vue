import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
