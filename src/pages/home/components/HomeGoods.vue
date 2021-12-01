<template>
  <div>
    <router-link v-for="item in GoodsList" :key="item.id" class="goods-box" tag='div' to='/GoodsDetail'>
      <div class="left-img">
        <img
          alt=""
          class="goods-img"
          :src="item['img-url']">
      </div>
      <div class="right-content">
        <div class="goods-desc">
          <span>【极速发货】垃圾袋家用加厚手提式背心黑色厨房中大号塑料袋批发</span>
        </div>
        <div class="goods-price">
          <span class="money">{{ item.price }}</span>
          <span class="pindan">已拼{{ item["pingdan-number"] }}万件</span>
          <div class="uer-img">
            <img alt=""
                 class="img-one"
                 :src="item['user-img-one']">
            <img alt=""
                 class="img-two"
                 :src="item['user-img-two']">
          </div>
        </div>
      </div>
    </router-link>
  </div>

</template>

<script>
export default {
  name: 'HomeGoods',
  props: {
    GoodsList: Array
  },
  data() {
    return {}
  }

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
