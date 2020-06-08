import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/tag',
        name: 'Tag',
        component: () => import(/* webpackChunkName: "about" */ '../views/Tag.vue')
    },
    {
        path: '/manager/home',
        name: 'MHome',
        component: () => import(/* webpackChunkName: "about" */ '../views/manager/MHome.vue')
    },
    {
        path: '/manager/tag',
        name: 'MTag',
        component: () => import(/* webpackChunkName: "about" */ '../views/manager/MTag.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router
