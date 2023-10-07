import Router from 'vue-router'
import Vue from 'vue'

import LoginPage from '@/page/LoginPage.vue'
import ManagePage from '@/page/ManagePage.vue'
import UserList from '@/page/UserList.vue'

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
                component: UserList,
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