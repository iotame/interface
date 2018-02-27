import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
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
