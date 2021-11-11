<template>
  <div class="mui-content">
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
            推荐
          </a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
            热点
          </a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
            北京
          </a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
            社会
          </a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
            娱乐
          </a>
          <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-5.html">
            娱乐
          </a>
          <a class="mui-control-item" href="#item7mobile" data-wid="tab-top-subpage-5.html">
            娱乐
          </a>
          <a class="mui-control-item" href="#item8mobile" data-wid="tab-top-subpage-5.html">
            娱乐
          </a>
          <a class="mui-control-item" href="#item9mobile" data-wid="tab-top-subpage-5.html">
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
  *{
    touch-action: pan-x;
  }
  .mui-scroll{
    background-color: #FFFFFF;
  }
  .mui-active{
    color: #e02e24 !important;
  }
</style>
