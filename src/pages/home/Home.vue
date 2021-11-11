<template>
  <div>
    <home-header></home-header>
    <home-swipper></home-swipper>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeFooter from './components/HomeFooter'
import HomeSwipper from './components/HomeSwipper'
export default {
  name: 'Home',
  components: {
    HomeFooter,
    HomeHeader,
    HomeSwipper
  }
}
</script>

<style scoped>

</style>
