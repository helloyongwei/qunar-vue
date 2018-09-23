<template>
<div>
  <div class="title">热销推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
      <img class="item-img" :src="item.imgUrl" alt="">
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
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
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1601/6f/6f4abe06e07ed27d90.water.jpg_200x200_48fb9256.jpg',
          title: '龙宫大白鲸欢乐世界',
          desc: '龙宫大白鲸欢乐世界龙宫大白鲸欢乐世界'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/ea/eaab246d02a74df1a3.img.jpg_200x200_aa258df8.jpg',
          title: '铁山寺国家森林公园',
          desc: '铁山寺国家森林公园铁山寺国家森林公园'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1408/20/202d2952aff56d1434062cc02b931140.jpg_200x200_d48e8038.jpg',
          title: '淮安府署',
          desc: '淮安府署淮安府署'
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
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex: 1rem
    padding: .1rem
    min-width:0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .2rem
      border-radius: .06rem
      color: #fff
</style>
