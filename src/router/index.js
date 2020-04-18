import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index.vue'
import EUResidence from '../views/Permanent/EUResidence'
import UKResidence from '../views/Permanent/UKResidence'
import Passport from '../views/Passport/index'
import ImmigrationUk from '../views/ImmigrationUk.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/astons',
    name: 'Index',
    component: Index
  },
  {
    path: '/astons/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/astons/EUResidence',
    name: 'EUResidence',
    component: EUResidence
  },
  {
    path: '/astons/UKResidence',
    name: 'UKResidence',
    component: UKResidence
  },
  {
    path: '/astons/ImmigrationUk',
    name: 'ImmigrationUk',
    component: ImmigrationUk
  }
  ,{
    path: '/astons/Passport',
    name: 'Passport',
    component: Passport
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
