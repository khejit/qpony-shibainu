import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ChibaInuProvider from '@/providers/ChibaInuProvider';

Vue.config.productionTip = false
Vue.component('chiba-inu-provider', ChibaInuProvider)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
