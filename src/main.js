import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import apolloProvider from './apollo'
import VueNoty from 'vuejs-noty'
import VModal from 'vue-js-modal'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import solids from '@fortawesome/fontawesome-free-solid'

require('./axios')

Vue.config.productionTip = false

Vue.use(VModal)
Vue.use(VueNoty, {
  progressBar: false,
  layout: 'topRight',
  timeout: 3000
})

fontawesome.library.add(solids)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  provide: apolloProvider.provide(),
  components: { App },
  template: '<App/>'
})
