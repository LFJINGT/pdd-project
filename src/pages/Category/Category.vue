<template>
  <div>
    <CategoyContent :tagList="tagList"></CategoyContent>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>

import HomeFooter from '../home/components/HomeFooter'
import CategoyContent from './componets/CategroyContent'
import axios from 'axios'

export default {
  name: 'Category',
  components: {
    HomeFooter,
    CategoyContent
  },
  data() {
    return {
      tagList: []
    }
  },
  methods: {
    // 配置get方法，在页面加载时发起get请求，获取到index.json
    getListData() {
      axios.get('/static/data/category.json').then(this.getListDataSucc)
    },
    getListDataSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        var data = res.data
        this.tagList = data.tagList
      }
    }
  },
  // 在生命周期中，配置挂载完成时的钩子函数，调用get方法获取数据
  mounted() {
    this.getListData()
  }
}
</script>

<style scoped>

</style>
