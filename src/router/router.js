import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  //history: true,
  routes: [{
    path: '/',
    component: Index
  }, {
    path: '/index',
    component: Index,
    children: [{
      path: 'home',
      component: require('../views/Home.vue')
    }]
  }, {
    path: '/404',
    component: NotFound
  }, {
    path: '*',
    redirect: { path: '/404' }
  }]
})

/*router.beforeEach((to, from, next) => {
  //console.log(to.path, '123')
  next({
    path: '/NotFound'
  })
});*/

export default router