<template>
  <div>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item  mui-active" to="/">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/Category">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">分类</span>
      </router-link>
      <router-link class="mui-tab-item" to="">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import mui from './../../../mui/js/mui.min'

mui('body').on('tap', 'a', function () {
  window.top.location.href = this.href
})

mui('.mui-scroll-wrapper').scroll({
  deceleration: 0.0005
})
export default {
  name: 'HomeFooter'
}
</script>

<style scoped>
* {
  touch-action: none;
}

.mui-bar-tab .mui-tab-item.mui-active {
  color: #df2127;
}

</style>
