<template>
  <div>
    <banner-top></banner-top>
    <banner-middle></banner-middle>
    <banner-footer></banner-footer>
  </div>
</template>

<script>
import BannerTop from './componets/BannerTop'
import BannerMiddle from './componets/BannerMiddle'
import BannerFooter from './componets/BannerFooter'

export default {
  name: 'Banner',
  components: {
    BannerFooter,
    BannerTop,
    BannerMiddle
  }
}
</script>

<style scoped>

</style>
