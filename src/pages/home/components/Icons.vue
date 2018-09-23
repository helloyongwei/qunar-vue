<template>
<div class="icons">
  <swiper :options="swiperOption" v-if="showIcon">
    <swiper-slide v-for="(page, index) in pages" :key="index">
      <div class="icon" v-for="item in page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl" alt="">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        loop: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIcon () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
.icons >>> .swiper-pagination
  height: 0
  padding-bottom: 50%
.icon
  position: relative
  overflow: hidden
  float: left
  width: 25%
  padding-bottom:25%
  .icon-img
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: .44rem
    box-sizing: border-box
    padding: .1rem
  .icon-img-content
    display: block
    margin: 0 auto
    height: 100%
  .icon-desc
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .44rem
    height: .44rem
    text-align: center
    color: $darkTextColor
    ellipsis()
</style>
