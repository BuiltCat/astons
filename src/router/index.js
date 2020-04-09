import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index.vue'
import EUResidence from '../views/Permanent/EUResidence'
import UKResidence from '../views/Permanent/UKResidence'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/EUResidence',
    name: 'EUResidence',
    component: EUResidence
  },
  {
    path: '/UKResidence',
    name: 'UKResidence',
    component: UKResidence
  }
]

const router = new VueRouter({
  routes
})

export default router
