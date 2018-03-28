import router from './router'
import store from './store'
import jwtToken from './token'

import axios from 'axios'
window.axios = axios

axios.interceptors.request.use(config => {
  // Set up CSRF Token: config.headers['X-CSRF-TOKEN'] = token
  config.headers['X-Requested-With'] = 'XMLHttpRequest'

  if (jwtToken.getToken()) {
    config.headers['Authorization'] = 'Bearer ' + jwtToken.getToken()
  }

  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  if (response.headers['set-authorization']) {
    store.commit('setAuthToken', response.headers['set-authorization'])
  }

  return response
}, error => {
  let errorResponseData = error.response.data

  const errors = ['token_invalid', 'token_expired', 'token_not_provided']

  if (errorResponseData.error && errors.includes(errorResponseData.error)) {
    store.dispatch('unsetAuthUser')
      .then(() => {
        jwtToken.removeToken()
        router.push({ name: 'login' })
      })

    return Promise.reject(error)
  }
})

export default axios
