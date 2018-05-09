<template lang='pug'>
.explain
  .explain_item(v-for='(v, i) in rules') --{{i + 1}}-- {{v}}
  commButton(:text='"删除"', :onClick='onDelete')
</template>

<script>
import commButton from '@/components/commButton'
import { mapState } from 'vuex'

export default {
  name: 'explain',
  computed: {
    ...mapState(['rules'])
  },
  methods: {
    onDelete () {
      this.$store.commit('removeOneRules')
    }
  },
  components: {
    commButton
  }
}
</script>

<style lang='stylus'>
@import '~@/assets/style/common/util'

.explain
  font-size 24px
  color #fff
  &_item
    margin-bottom 10px
</style>
