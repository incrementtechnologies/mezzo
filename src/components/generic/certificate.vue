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
  width: 20%;
  border-radius: 10px;
  margin-top: 50px;
}
.image-holder{
  width: 100%;
  float: left;
}
@media only screen and (max-width: 990px) {
  img {
    width: 96%;
    margin-left: 2%;
    margin-top: 50px;
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