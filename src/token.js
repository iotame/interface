export default {
  setToken (token) {
    window.localStorage.setItem('_jwt_token', token)
  },

  getToken () {
    return window.localStorage.getItem('_jwt_token')
  },

  removeToken () {
    window.localStorage.removeItem('_jwt_token')
  }
}
