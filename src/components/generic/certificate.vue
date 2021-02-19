<template>
  <div>
    <div class="image-holder">
      <img :src="common.certificate">
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
img{
  width: 25%;
  margin-top: 10vh;
  border-radius: 10px;
}
.image-holder{
  width: 100%;
  float: left;
  text-align: center;
}
@media only screen and (max-width: 990px) {
  img {
    width: 100%;
    margin-top: -35vh;
  }
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