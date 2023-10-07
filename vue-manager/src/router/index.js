import Router from 'vue-router'
import Vue from 'vue'

import LoginPage from '@/page/LoginPage.vue'
import ManagePage from '@/page/ManagePage.vue'
import FirstPage from '@/page/FirstPage.vue'

Vue.use(Router)



export const constantRoutes = [
    {
        path: '/login',
        component: LoginPage,
        name: 'login'
    },
    {
        path: '/manage',
        component: ManagePage,
        children: [
            {
                path: '/userList',
                component: FirstPage,
                meta: ['数据管理', '用户列表'],
            }
        ]
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