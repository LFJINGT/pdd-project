<template>
  <div>
    <div class="swipper-box">
      <swiper ref="mySwiper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img alt=""
               class="swipper-img"
               src="https://img.alicdn.com/imgextra/i3/725677994/O1CN01wAQPP828vInR2kNG9_!!725677994.jpg_430x430q90.jpg">
        </swiper-slide>
        <swiper-slide>
          <img alt=""
               class="swipper-img"
               src="https://img.alicdn.com/imgextra/i4/725677994/O1CN01AGmODd28vInJI2doj_!!725677994.jpg_430x430q90.jpg">
        </swiper-slide>
        <!-- Optional controls -->
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsSwiper',
  data() {
    return {
      swiperOption: {}
    }
  }
}
</script>

<style lang='stylus' scoped>
.swipper-box
  height 0
  overflow hidden
  padding-bottom 100%
  .swipper-img
    width 100%
</style>
