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
}
.image-holder{
  width: 100%;
  float: left;
  text-align: center;
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