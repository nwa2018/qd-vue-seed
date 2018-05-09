import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    rules: [
      'Dwhlnwnk Sfqcrktme Tsgfwwojvn Bmqdiipws Yslww Twhhezeq',
      'Bhdnky Bjvsgxdwax Webbdih Nfsvmcrf Lhyjk Eklde',
      'Scwqjwsvww Ntpbcczdr Nrdixhf Kykeu Cjevdqf Cnyxjlnekj',
      'Apyqv Nxwj Vvztery Ibvl Ehizaix Jor',
      'Ijpwc Oogqyh Rgvns Dzl Yjwjfvygj',
      'Dwhlnwnk Sfqcrktme Tsgfwwojvn Bmqdiipws Yslww Twhhezeq',
      'Bhdnky Bjvsgxdwax Webbdih Nfsvmcrf Lhyjk Eklde',
      'Scwqjwsvww Ntpbcczdr Nrdixhf Kykeu Cjevdqf Cnyxjlnekj',
      'Apyqv Nxwj Vvztery Ibvl Ehizaix Jor',
      'Ijpwc Oogqyh Rgvns Dzl Yjwjfvygj'
    ]
  },
  mutations: {
    removeOneRules (state) {
      state.rules.pop()
    }
  }
})

export default store
