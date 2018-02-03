import Vue from 'vue'
import axios from 'axios'

import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
import 'vis/dist/vis.min.css'

import App from './App'
import router from './router'
import store from './store'

import toolbar from './components/EditorView/Toolbar'
import network from './components/EditorView/VisualEngine'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(SuiVue)
Vue.component('toolbar', Vue.extend(toolbar))
Vue.component('visual-engine', Vue.extend(network))

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
