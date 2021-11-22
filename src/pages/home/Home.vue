<template>
  <div>
    <home-header></home-header>
    <home-swipper :swipperList="swipperList"></home-swipper>
    <home-footer></home-footer>
    <HomeIcons></HomeIcons>
    <home-goods></home-goods>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeFooter from './components/HomeFooter'
import HomeSwipper from './components/HomeSwipper'
import HomeIcons from './components/HomeIcons'
import HomeGoods from './components/HomeGoods'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeFooter,
    HomeHeader,
    HomeSwipper,
    HomeIcons,
    HomeGoods
  },
  data () {
      return {
        swipperList: []
      }
  },
  methods: {
    // 配置get方法，在页面加载时发起get请求，获取到index.json
    getHomeData () {
      axios.get('/static/data/index.json').then(this.getHomeDataSucc)
    },
    getHomeDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        var data = res.data
        this.swipperList = data.swipperList
      }
    },
  },
  // 在生命周期中，配置挂载完成时的钩子函数，调用get方法获取数据
  mounted () {
    this.getHomeData()
  }
}

</script>

<style scoped>

</style>
