import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Create from '../views/Create.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/review',
    name: 'review',
    component: AboutView
  },
  {
    path: '/create/:id',
    name: 'create',
    component: Create,
    params:true
  }
]

const router = new VueRouter({
  routes,
})

export default router
