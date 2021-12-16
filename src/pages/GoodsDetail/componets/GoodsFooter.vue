<template>
  <div>
    <div class="footer">
      <div class="footer-box">
        <div class="more">
          <div class="iconfont icon">&#xe684;</div>
          <div class="word">更多</div>
        </div>
        <div class="more">
          <div class="iconfont icon">&#xe669;</div>
          <div class="word">收藏</div>
        </div>
        <div class="more">
          <div class="iconfont icon">&#xe731;</div>
          <div class="word">客服</div>
        </div>
      </div>
      <!--    底部购买按钮-->
      <div class="price1" @click="addCart">
        <div>Y{{ this.GoodDetailsList.price }}</div>
        <div>发起拼单</div>
      </div>
      <!--    底部拼单按钮-->
      <div class="price2" @click="addCart">
        <div>Y{{ this.GoodDetailsList.yuanjia }}</div>
        <div>单独购买</div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'GoodsFooter',
  props: {GoodDetailsList: Object},
  methods: {
    addCart() {
      this.$store.commit('shopcart/addShopcart', {
        id: this.GoodDetailsList.id,
        name: this.GoodDetailsList.name,
        price: this.GoodDetailsList.price,
        img: this.GoodDetailsList.imgUrl,
        count: 1,
        selected: true
      })
      this.$toast('加入购物车成功！快去购买吧！')
    }
  }
}
</script>

<style lang='stylus' scoped>
.footer
  position fixed
  bottom 0
  height 0
  padding-bottom 15%
  overflow hidden
  background-color white
  width 100%

  .footer-box
    float left
    background-color white

    div
      margin-left 0.27rem

    .more
      display inline-block
      //margin-left .8rem
      font-size .7rem
      text-align center
      margin-top: .5rem

      .icon
        font-size 1.5rem

  .price1, .price2
    float right
    width 8rem
    height 4rem
    background-color #f3aba7
    text-align center
    color white
    line-height 1.3rem


  .price1
    background-color #e02e24
</style>
