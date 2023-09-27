import Router from 'vue-router'
import Vue from 'vue'

import LoginPage from '@/page/LoginPage.vue'

Vue.use(Router)



export const constantRoutes = [
    {
        path: '/login',
        component: LoginPage
    }
]
const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
  

const router = createRouter()
export default router