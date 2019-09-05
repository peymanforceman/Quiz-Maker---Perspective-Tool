/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store.js'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '',
            component: () => import('./components/main/Template.vue'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('./components/main/components/pub/home.vue'),
                },
                {
                    path: '/quiz/:id',
                    name: 'quiz',
                    component: () => import('./components/main/components/pub/quiz.vue'),
                },
                {
                    path: '/result/:id',
                    name: 'result',
                    component: () => import('./components/main/components/pub/result.vue'),
                },
                {
                    path: '/admin/login',
                    name: 'login',
                    component: () => import('./components/main/components/pub/login.vue'),
                },
                {
                    path: '/error-404',
                    name: 'pageError404',
                    component: () => import('./components/main/components/pub/error404.vue')
                },
                {
                    path: '/admin/dashboard',
                    name: 'dashboard',
                    component: () => import('./components/main/components/admin/dashboard.vue'),
                    meta: {
                        requiresAuth: true,
                    }
                },
                {
                    path: '/admin/quizzes',
                    name: 'manage-quizzes',
                    component: () => import('./components/main/components/admin/quizzes.vue'),
                    meta: {
                        requiresAuth: true,
                    }
                },
                {
                    path: '/admin/dimensions',
                    name: 'manage-dimensions',
                    component: () => import('./components/main/components/admin/dimensions.vue'),
                    meta: {
                        requiresAuth: true,
                    }
                }
            ],
        },
        {
            path: '*',
            redirect: '/error-404'
        }
    ],
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                name: 'login',
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
