<template lang='pug'>
.btn(@click='onClick') {{text}}
</template>

<script>
export default {
  name: 'explain',
  props: {
    text: {
      type: String,
      default: '按钮'
    },
    onClick: {
      type: Function,
      default: _ => {}
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/style/common/util'

.btn
  wh(120, 50)
  border-radius 5px
  background-color #ea4d4d
  color #fff
  line-height 50px
  text-align center
  position fixed
  bottom 30px
  left 30px
</style>
