<template>
  <div>
    <ShopcartContent></ShopcartContent>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import ShopcartContent from './components/ShopcartContent'
import HomeFooter from '../home/components/HomeFooter'

export default {
  name: 'Shopcart',
  components: {HomeFooter, ShopcartContent}
}
</script>

<style scoped>

</style>
