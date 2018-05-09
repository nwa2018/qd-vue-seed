import 'promise-polyfill/src/polyfill'
import Vue from 'vue'
import index from '@/pages/index'
import router from '@/router'
import store from '@/store'
import '@/assets/style/index'

new Vue({
  router,
  store,
  ...index
}).$mount('#app')
