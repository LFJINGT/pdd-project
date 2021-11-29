<template>
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
    <div class="price1">
      <div>2599</div>
      <div>发起拼单</div>
    </div>
    <div class="price2">
      <div>2529</div>
      <div>单独购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsFooter'
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

  .footer-box
    float left
    background-color white

    .more
      display inline-block
      margin-left .6rem
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

  .price1
    background-color #e02e24
</style>
