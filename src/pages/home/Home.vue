<template>
  <div>
    <home-header></home-header>
    <home-swipper></home-swipper>
    <home-footer></home-footer>
    <HomeIcons></HomeIcons>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeFooter from './components/HomeFooter'
import HomeSwipper from './components/HomeSwipper'
import HomeIcons from './components/HomeIcons'
export default {
  name: 'Home',
  components: {
    HomeFooter,
    HomeHeader,
    HomeSwipper,
    HomeIcons
  }
}
</script>

<style scoped>

</style>
