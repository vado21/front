import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.config.productionTip = false;
const url = 'https://telltell-api-v0.herokuapp.com/api';
Vue.http.options.root = url;
Vue.prototype.$urls = url;


new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
