import Router from 'vue-router'
import Vue from 'vue'

import LoginPage from '@/page/LoginPage.vue'
import ManagePage from '@/page/ManagePage.vue'

Vue.use(Router)



export const constantRoutes = [
    {
        path: '/login',
        component: LoginPage,
        name: 'login'
    },
    {
        path: '/manage',
        component: ManagePage
    },
    {
        path: '*',
        redirect: 'login',
    }
]
const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
  

const router = createRouter()
export default router