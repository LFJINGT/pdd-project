<template>
  <div>
    <div class="swipper-box">
      <swiper ref="mySwiper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in swipperList" :key="item.id">
          <img :src="item.imgUrl" alt="" class="swipper-img">
        </swiper-slide>
        <!-- Optional controls -->
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwipper',
  props: {
    swipperList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        // 启用轮播循环
        loop: true
      }
      // swiperList: [
      //   {
      //     'id': '001',
      //     'imgUrl': '//img.alicdn.com/imgextra/i1/6000000000382/O1CN01h4sNLB1Eh00G6Kmrn_!!6000000000382-0-lubanimage.jpg'
      //   },
      //   {
      //     'id': '002',
      //     'imgUrl': 'https://img.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg'
      //   }
      // ],
    }
  }
}
</script>

<style lang="stylus" scoped>
.swipper-box {
  height: 0;
  padding-bottom: 40%;
  overflow: hidden;
}

.swipper-img {
  width: 100%;
}

.swiper-pagination {
  text-align: right;
}

.swipper-box >>> .swiper-pagination-bullet
  background #FFFFFF
  opacity 1

.swipper-box >>> .swiper-pagination-bullet-active
  background #df2127
</style>
