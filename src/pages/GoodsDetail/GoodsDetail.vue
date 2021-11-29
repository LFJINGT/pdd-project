<template>
  <div>
    <goods-swiper></goods-swiper>
    <GoodMiddle></GoodMiddle>
    <goods-footer></goods-footer>
  </div>
</template>

<script>
import GoodsFooter from './componets/GoodsFooter.vue'
import GoodsSwiper from './componets/GoodsSwiper'
import GoodMiddle from './componets/GoodMiddle'


export default {
  name: 'GoodsDetail',
  components: {
    GoodsSwiper,
    GoodsFooter,
    GoodMiddle
  }
}
</script>

<style>

</style>
