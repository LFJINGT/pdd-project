<template>
  <div>
    <div class="mui-content">
      <div style="padding: 10px 10px;">
        <div id="segmentedControl" class="mui-segmented-control mui-segmented-control-negative">
          <a class="mui-control-item" href="#item1">
            正在疯抢
          </a>
          <a class="mui-control-item" href="#item2">
            即将开始
          </a>
          <a class="mui-control-item mui-active" href="#item3">
            明日预告
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerTop'
}
</script>

<style lang="stylus" scoped>
.mui-content
  position fixed
  background-color white

  .mui-segmented-control
    border 0

    .mui-control-item.mui-active
      color #e02e24
      background-color white
      border-bottom #e02e24 .2rem solid

    .mui-control-item {
      line-height: 38px
      display: table-cell
      overflow: hidden
      width: 1%
      -webkit-transition: background-color .1s linear
      transition: background-color .1s linear
      text-align: center
      white-space: nowrap
      text-overflow: ellipsis
      color: black
      border-color: white
      border 0
    }
</style>
