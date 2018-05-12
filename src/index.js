import 'promise-polyfill/src/polyfill'
import Vue from 'vue'
import App from './main'
import router from '@/router'
import store from '@/store'
import '@/assets/style/index'

new Vue({
  router,
  store,
  ...App
}).$mount('#app')
