<template>
  <div>
    <home-header></home-header>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeFooter from "./components/HomeFooter";
export default {
  name: 'Home',
  components: {HomeFooter, HomeHeader}
}
</script>

<style scoped>

</style>
