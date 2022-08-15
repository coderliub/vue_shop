import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/components/LogIn.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: () => import('@/views/HomeView.vue'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: () => import('@/views/welcome.vue')
      },
      {
        path: '/users',
        component: () => import('@/components/user/UserS.vue')
      }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // to将要访问的路径
  // from代表从哪个路径跳转
  // next是一个函数，表示放行
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // 判断有无token
  return tokenStr ? next() : next('/login')
})
export default router
