<template>
  <div>
    <banner-top></banner-top>
    <banner-middle :bannerList="bannerList"></banner-middle>
    <banner-footer></banner-footer>
  </div>
</template>

<script>
import BannerTop from './componets/BannerTop'
import BannerMiddle from './componets/BannerMiddle'
import BannerFooter from './componets/BannerFooter'
import axios from 'axios'

export default {
  name: 'Banner',
  components: {
    BannerFooter,
    BannerTop,
    BannerMiddle
  },
  data() {
    return {
      bannerList: []
    }
  },
  methods: {
    // 配置get方法，在页面加载时发起get请求，获取到index.json
    getBannerData() {
      axios.get('/static/data/data.json').then(this.getBannerDataSucc)
    },
    getBannerDataSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        var data = res.data
        this.bannerList = data.bannerList
      }
    }
  },
  // 在生命周期中，配置挂载完成时的钩子函数，调用get方法获取数据
  mounted() {
    this.getBannerData()
  }
}
</script>

<style scoped>

</style>
