import jwtToken from '@/token'

const state = {
  user: null,
  jwtToken: jwtToken.getToken()
}

const mutations = {
  setAuthUser (state, user) {
    state.user = user
  },

  setAuthToken (state, token) {
    state.token = token
  }
}

const actions = {
  setAuthToken (context, token) {
    context.commit('setAuthToken', token)
    jwtToken.setToken(token)
  }
}

export default {
  state,
  mutations,
  actions
}
