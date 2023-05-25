import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Create from '../views/Create.vue'
import MostLiked from '../views/MostLiked.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/company/:id',
    name: 'review',
    component: AboutView,
    params:true
  },
  {
    path: '/create/:id',
    name: 'create',
    component: Create,
    params:true
  },
  {
    path: '/mostLiked',
    name: 'mostLiked',
    component: MostLiked,
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
