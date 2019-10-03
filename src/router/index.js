import Vue from 'vue'
import Router from 'vue-router'

const About = resolve => require(['@/views/About'], resolve)
const Code = resolve => require(['@/views/Code'], resolve)
const Custom = resolve => require(['@/views/Custom'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: About
    },
    {
        path: '/code',
        component: Code
    },
    {
        path: '/custom',
        component: Custom
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
