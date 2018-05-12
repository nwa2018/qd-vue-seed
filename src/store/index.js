import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    rules: [
      'qd-cli内置了vue,vuex,vue-router,axios,ramda,jquery,jsonp,无需二次安装',
      '支持mock服务',
      '支持少量的自定义配置',
      'vue文件里你可以使用pug,stylus,scss',
      '图片最终是有压缩的',
      '支持项目集，项目集下的webpack_modules目录可以被各个项目引用',
      '路径引用简化@/指向/src',
      '支持懒加载，摇树，代码分割了',
      '支持打hash串，遗留问题是css与js的哈希串是一样的',
      '支持es6语法，支持async await还有装饰器',
      'eslint使用 stadard规范',
      '更多特性......'
    ]
  },
  mutations: {
    removeOneRules (state) {
      state.rules.pop()
    }
  }
})

export default store
