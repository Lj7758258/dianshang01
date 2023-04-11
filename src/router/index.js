import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import register from '../components/register.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/login',component:login},
  {path:'/',redirect:'/login'},
  {path:'/register',component:register}
]

const router = new VueRouter({
  routes
})

export default router
