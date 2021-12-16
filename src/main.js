// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入Toast插件
import Toast from './layer/Toast'

// 引入mui的css样式
import './mui/css/mui.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/styles/iconfont/iconfont.css'

// requite.styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper/* { default global options } */)

Vue.config.productionTip = false
Vue.prototype.$toast = Toast
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
