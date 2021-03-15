import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import OneUser from './views/OneUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home

    },
    {
      path: '/profil/:id',
      name: 'oneuser',
      component: OneUser
    },
    
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
}
})
