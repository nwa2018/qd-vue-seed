import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'rank'
    }
  }, {
    path: '/rank',
    name: 'rank',
    component: _ => import('@/pages/rank')
  }, {
    path: '/explain',
    name: 'explain',
    component: () => import('@/pages/explain')
  }
]

export default new VueRouter({
  routes,
  history: true
})
