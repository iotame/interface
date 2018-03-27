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
      children: adminRoutes
    },
    {
      path: '/login',
      name: lazy('login'),
      component: LoginPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.state.authentication.jwtToken) {
    next({ name: 'login' })
  }

  next()
})

export default router
