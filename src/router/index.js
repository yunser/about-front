import Vue from 'vue'
import Router from 'vue-router'

const Code = resolve => require(['@/views/Code'], resolve)
const Custom = resolve => require(['@/views/Custom'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    { path: '/', component: resolve => require(['@/views/Home'], resolve) },
    { path: '/description', component: resolve => require(['@/views/Description'], resolve) },
    { path: '/contact', component: resolve => require(['@/views/Contact'], resolve) },
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
