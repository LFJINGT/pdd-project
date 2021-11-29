<template>
  <div class="footer-box">
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">限时秒杀</span>
      </a>
      <a class="mui-tab-item mui-active" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">品牌秒杀</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "BannerFooter"
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
