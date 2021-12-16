<template>
  <div :style="myStyle" class="mui-numbox" data-numbox-max="9" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <!--    绑定value的值，初始值由其它组件传入-->
    <input id="test" ref="num" :value="initcount" class="mui-input-numbox" type="number" @change="countChanged">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../mui/js/mui.min'

export default {
  name: 'NumBox',
  // 从其它组件中传入initCount
  props: ['initcount', 'goodsid', 'size'],
  data() {
    return {
      myStyle: {}
    }
  },
  mounted() {
    // 数字输入框必须进行初始化之后才能使用
    mui('.mui-numbox').numbox()
    if (this.$props.size === 'small') {
      this.myStyle = {width: '100px', height: '25px', margin: '0 10px 0 10px'}
    }
  },
  methods: {
    countChanged() {
      const count = parseInt(this.$refs.num.value)
      this.$emit('count', {count: count, id: this.goodsid})
    }
  }
}
</script>

<style scoped>

</style>
