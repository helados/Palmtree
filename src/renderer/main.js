import Vue from 'vue'
import axios from 'axios'

import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
import 'vis/dist/vis.min.css'

import App from './App'
import router from './router'
import store from './store'

import network from './components/Network/network'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(SuiVue)
Vue.component('network', Vue.extend(network))

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
