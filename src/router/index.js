import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import adminRoutes from './administration'
import extensionRoutes from './extensions'

import LoginPage from '@/components/LoginPage'

Vue.use(Router)

const lazy = (name) => {
  return () => import('@/components/' + name)
}

const router = new Router({
  routes: [
    ...extensionRoutes,

    {
      path: '/admin',
      component: lazy('administration/Administration'),
      children: adminRoutes,
      beforeEnter (to, from, next) {
        if (false) return next(false) // If not an administrator
        next()
      }
    },
    {
      path: '/login',
      name: lazy('login'),
      component: LoginPage
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { selector: to.hash }

    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.state.authentication.jwtToken) {
    next({ name: 'login' })
  }

  next()
})

export default router
