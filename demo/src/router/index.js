import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:()=>import("@/views/Index.vue")
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import("@/views/Login.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
