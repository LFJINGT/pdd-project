<template>
  <div>
    <goods-swiper></goods-swiper>
    <GoodMiddle :good-details-list="GoodDetailsList"></GoodMiddle>
    <goods-footer></goods-footer>
  </div>
</template>

<script>
import GoodsFooter from './componets/GoodsFooter.vue'
import GoodsSwiper from './componets/GoodsSwiper'
import GoodMiddle from './componets/GoodMiddle'
import axios from 'axios'

export default {
  name: 'GoodsDetail',
  components: {
    GoodsSwiper,
    GoodsFooter,
    GoodMiddle
  },
  data() {
    return {
      GoodDetailsList: {}
    }
  },
  methods: {
    // 配置get方法，在页面加载时发起get请求，获取到index.json
    getHomeData() {
      axios.get('/static/data/data.json').then(this.getHomeDataSucc)
    },
    getHomeDataSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        var data = res.data
        this.GoodDetailsList = data.GoodDetailsList
      }
    }
  },
  // 在生命周期中，配置挂载完成时的钩子函数，调用get方法获取数据
  mounted() {
    this.getHomeData()
  }

}
</script>

<style>

</style>
