<template>
  <div class="banner-box">
    <router-link class="goods-box" tag='div' to=''>
      <div class="left-img">
        <img
          alt="" class="goods-img"
          src="https://www.hping.cn/uploads/question/20201210/bip01kzltyj.jpg">
      </div>
      <div class="right-content">
        <div class="goods-desc">
          <span>山西红富士苹果正宗脆甜冰糖丑苹果水果新鲜应季10/5斤整箱批发</span>
        </div>
        <!--        进度条-->
        <div class="box">
          <span class="left"></span>
          <span class="rate">12%</span>
        </div>
        <div class="click">马上抢</div>
        <!--        商品价格-->
        <div class="goods-price">
          <span class="money">$10.8</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BannerMiddle'
}
</script>

<style lang="stylus" scoped>
.banner-box
  position relative
  top 3.6rem

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

    .box
      margin-top 1rem
      border .07rem solid #e02e24
      height 1rem
      width 8rem
      border-radius .3rem
      background-color #e7aeab
      position: relative
      top -0.5rem

      .left
        display inline-block
        height 1rem
        width 3rem
        border-radius .3rem
        background-color #e02e24

      //position relative
      //top -0.01rem

      .rate
        color: white
        font-width: bold
        position: relative
        top -0.2rem

    .click
      height 2rem
      width 4rem
      background-color #e02e24
      text-align center
      line-height 2rem
      float: right
      margin-top 3.8rem
      border-radius .3rem
      color white
      font-size .8rem

    //position relative
    //top -5.5rem

    .goods-desc
      width 13rem
      height 2.4rem
      overflow hidden
      //margin-bottom 6.5rem
      font-size .9rem

    .goods-price
      .money
        float left
        margin-left .3rem
        margin-right .3rem
        color #e02324
        font-weight bold
        font-size 1.2rem
        position relative
        top 4.5rem

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
