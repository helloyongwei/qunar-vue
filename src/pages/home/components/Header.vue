<template>
<div class="header">
  <div class="header-left">
    <span class="iconfont back-icon">&#xe612;</span>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe66f;</span>输入城市/景点/游玩/主题
  </div>
  <router-link to="/city">
    <div class="header-right">
      {{this.doubleCity}}
      <span class="iconfont">&#xe6e9;</span>
    </div>
  </router-link>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display: flex
  line-height: $HeaderHeight
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    .back-icon
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1rem
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
  .header-right
    min-width: 1.04rem
    padding: 0 .1rem
    text-align: center
    color: #fff
</style>
