import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueNoty from 'vuejs-noty'

require('./axios')

Vue.config.productionTip = false

Vue.use(VueNoty, {
  progressBar: false,
  layout: 'topRight',
  timeout: 3000
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
