<template>
  <div class="mui-content">
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl"
           class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" data-wid="tab-top-subpage-1.html" href="#item1mobile">
            推荐
          </a>
          <a class="mui-control-item" data-wid="tab-top-subpage-2.html" href="#item2mobile">
            热点
          </a>
          <a class="mui-control-item" data-wid="tab-top-subpage-3.html" href="#item3mobile">
            北京
          </a>
          <a class="mui-control-item" data-wid="tab-top-subpage-4.html" href="#item4mobile">
            社会
          </a>
          <a class="mui-control-item" data-wid="tab-top-subpage-5.html" href="#item5mobile">
            娱乐
          </a>
          <a class="mui-control-item" data-wid="tab-top-subpage-5.html" href="#item6mobile">
            娱乐
          </a>
          <a class="mui-control-item" data-wid="tab-top-subpage-5.html" href="#item7mobile">
            娱乐
          </a>
          <a class="mui-control-item" data-wid="tab-top-subpage-5.html" href="#item8mobile">
            娱乐
          </a>
          <a class="mui-control-item" data-wid="tab-top-subpage-5.html" href="#item9mobile">
            娱乐
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import mui from './../../../mui/js/mui.min'

mui('.mui-scroll-wrapper').scroll({
  // 阻尼
  deceleration: 0.0005
})
export default {
  name: 'HomeHeader'
}
</script>

<style scoped>
* {
  touch-action: pan-x;
}

.mui-scroll {
  background-color: #FFFFFF;
}

.mui-active {
  color: #e02e24 !important;
}
</style>
