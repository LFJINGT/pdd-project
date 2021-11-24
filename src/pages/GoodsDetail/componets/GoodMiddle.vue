<template>
  <div class="wrapper">
    <div class="top">
      <span class="price">￥2529</span>
      <span class="yuanjia">￥2599</span>
      <span class="pindan">已拼7612件</span>
      <div class="desc">【硬核5G新品】 iQOO Neo3 iQOOpro 5g骁龙</div>
      <span class="tuihuo">退货包运费</span>
    </div>
    <div class="box">
      <span>全场包邮 · 七天退换 · 48小时发货 · 假一赔十</span>
      <span class="arrow"> > </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodMiddle'
}
</script>

<style lang="stylus" scoped>
.wrapper
  padding .5rem

  .top
    height 0
    padding-bottom 23%
    overflow hidden
    position relative
    margin-top .5rem

    .price
      font-size 1.5rem
      color #e02e24
      float left

    .yuanjia
      float left
      font-size .7rem
      color #cccccc
      text-decoration line-through
      margin-top .2rem

    .pindan
      float right
      font-size .8rem

    .desc
      margin-top 1.6rem
      font-weight bold

    .tuihuo
      position absolute
      right 6rem
      top 3rem
      background-color #25b513
      color white
      font-size .8rem

  .box
    height 0
    overflow hidden
    padding-bottom 0%
    border-bottom .07rem soild #eeeeee
    font-size 1rem
    margin-top .3rem

    .arrow
      float right
      font-size .7rem
      color #9c9c9c
</style>
