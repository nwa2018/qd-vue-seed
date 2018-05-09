<template lang='pug'>
.app
  .app_header
    span vue-seed
    .app_explain 使用了vue-router, vuex, axios
    .app_logo
  .app_nav
    .app_nav_item(:class='tabIdx===1&&"app_nav_item--active"', @click='onClickTab(1)') 排行榜
    .app_nav_item(:class='tabIdx===2&&"app_nav_item--active"', @click='onClickTab(2)') 说明
  router-view
</template>

<script>
const routeMap = {
  1: '/rank',
  2: '/explain'
}
export default {
  name: 'index',
  data () {
    return {
      tabIdx: 1
    }
  },
  methods: {
    onClickTab (idx) {
      if (idx === this.tabIdx) return
      this.tabIdx = idx
      this.$router.push(routeMap[idx])
    }
  }
}
</script>

<style lang='stylus'>
@import '~@/assets/style/common/util'

body, html
  wh(100%, 100%)
  background-color #4e0985

.app
  w(750)
  &_header
    wh(100%, 350)
    background-color #5d0993
    flexCenter()
    font-size 50px
    color #fff
    position relative
  &_explain
    position absolute
    bottom 10px
    left 10px
    font-size 26px
    color #fff
  &_logo
    wh(120, 120)
    position absolute
    right 0px
    bottom 0px
    background-image url('~@/assets/img/1.png')
    background-size 100% 100%
  &_nav
    wh(100%, 55)
    border-top 1PX solid #220044
    border-bottom 1PX solid #220044
    display flex
    &_item
      wh(50%, 100%)
      flexCenter()
      color #fff
      font-size 20px
      background-color #3a0b70
      &:first-child
        border-right 1PX solid #220044
      &--active
        background-color #681cc2

</style>
