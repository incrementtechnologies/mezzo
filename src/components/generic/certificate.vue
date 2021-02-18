<template>
  <div>
    <div>
      <img :src="common.api + 'mezzo_iso_light.jpg'">
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
img{
  width: auto;
  height: 20vh;
  margin-top: 15vh;
  margin-left: 45vh;
  // margin-bottom: 2vh;
}
</style>
<script>
import COMMON from 'src/common.js'
export default {
  mounted(){
  },
  data(){
    return{
      common: COMMON
    }
  },
  methods: {
  }
}
</script>