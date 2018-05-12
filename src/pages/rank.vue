<template lang='pug'>
.list
  .list_item(v-for='(v, i) in list')
    .list_item_id {{i + 1}}
    .list_item_img {{v.name}}
    .list_item_name.ell {{v.noble_title_id}}
</template>

<script>
import api from '@/api'

export default {
  name: 'rank',
  data () {
    return {
      list: []
    }
  },
  async created () {
    const rsp = await api.getProductList()
    this.list = rsp.data
  }
}
</script>

<style lang='stylus'>
@import '~@/assets/style/common/util'

.list
  background #4b0882
  &_item
    display flex
    h(100)
    &_id
      wh(50, 50)
      margin 25px
      flexCenter()
      border-radius 50%
      background-color #0d41f0
      color #fff
      font-size 24px
    &_img
      wh(240, 80)
      margin 10px
    &_name
      flex 1
      color #fff
      font-size 30px
      line-height 100px
      padding-left 20px
      padding-right 20px

</style>
