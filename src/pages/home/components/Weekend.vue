<template>
<div>
  <div class="title">周末推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
      <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl" alt="">
      </div>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/96/d7f41cb74a417d.jpg_r_640x214_a4403f98.jpg',
          title: '扬州必游TOP10',
          desc: '给你推荐，扬州十景'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/96/d7f41cb74a417d.jpg_r_640x214_a4403f98.jpg',
          title: '扬州必游TOP10',
          desc: '给你推荐，扬州十景'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/96/d7f41cb74a417d.jpg_r_640x214_a4403f98.jpg',
          title: '扬州必游TOP10',
          desc: '给你推荐，扬州十景'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
