import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
const url = 'http://localhost:4000';
Vue.http.options.root = url;
Vue.prototype.$urls = url;
Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
