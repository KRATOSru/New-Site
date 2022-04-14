import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Sertificates from '@/components/Sertificates.vue'
import Works from '@/components/Works.vue'
import Apple from '@/components/Apple.vue'
import NestComp from '@/components/NestComp.vue'
import VueComp from '@/components/VueComp.vue'
import Portfolio from '@/components/Portfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/sertificates',
    name: 'sertificates',
    component: Sertificates,
  },
  {
    path: '/works',
    name: 'works',
    component: Works,
  },
  {
    path: '/apple',
    name: 'apple',
    component: Apple,
  },
  {
    path: '/nest',
    name: 'nest',
    component: NestComp,
  },
  {
    path: '/vue',
    name: 'vue',
    component: VueComp,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
