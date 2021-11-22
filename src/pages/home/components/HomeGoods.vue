<template>
  <div class="goods-box">
    <div class="left-img">
      <img
        alt=""
        class="goods-img" src="https://img.pddpic.com/goods/images/2020-09-10/3c549723f8d00856b5dc08b0f40918d6.jpeg?imageView2/2/w/400/q/80/format/webp">
    </div>
    <div class="right-content">
      <div class="goods-desc">
        <span>【极速发货】垃圾袋家用加厚手提式背心黑色厨房中大号塑料袋批发</span>
      </div>
      <div class="goods-price">
        <span class="money">2499</span>
        <span class="pindan">已拼4543万件</span>
        <div class="uer-img">
          <img alt=""
               class="img-one"
               src="https://avatar2.pddpic.com/a/Q1BZN2VaM3pnK09KTGg5RGVZUTNxZVFWM2NnT0JMS0NnQT09djA0-1636898089?imageMogr2/thumbnail/100x">
          <img alt=""
               class="img-two"
               src="https://avatar2.pddpic.com/a/Q0tLaDQ3SjBkTC91WHhoMk15VGhhM29Ha0gyZGF2VHZLdz09djA0-1613042933?imageMogr2/thumbnail/100x">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeGoods'
}
</script>

<style lang="stylus" scoped>
//商品总盒子的规格调整
.goods-box
  height 0
  padding-bottom 45%
  overflow hidden

//里面的左边商品的规格调整
.left-img
  width 10rem
  height 10rem
  display inline-block
  float left

  .goods-img
    width 10rem
    height 10rem

//里面右边文字描述区域的样式调整
.right-content
  width 13rem
  height 10rem
  float right
  margin-bottom 6.5rem
  font-size .9rem

  .goods-desc
    width 13rem
    height 2.4rem
    overflow hidden
    margin-bottom 6.5rem
    font-size .9rem

  .goods-price
    .money
      float left
      margin-left .3rem
      margin-right .3rem
      color #e02324
      font-weight bold
      font-size 1.2rem

    .pindan
      font-size .8rem
      float left
      margin-top .1rem
      color #9c9c9c

    .uer-img
      display inline-block
      margin-left 0.5rem

      .img-one, .img-two
        border-radius 50%
        width 1.5rem
        height 1.5rem
      .img-one
        position relative
        right 0
  .goods-box
    height 0
    padding-bottom 45%
    overflow hidden
    padding-top: .5rem
    padding-left .3rem
</style>
