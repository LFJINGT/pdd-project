// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入mui的css样式
import './mui/css/mui.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/styles/iconfont/iconfont.css'

// requite.styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper/* { default global options } */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
