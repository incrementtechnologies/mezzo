<template>
  <div>
    <div class="image-holder">
      <a href="https://m.certipedia.com/?id=9000010741" target="_blank"><img id="rec" :src="require('assets/img/tuvrheinland.png')"></a>
      <img :src="require('assets/img/recognition-excellence-2019.png')">
      <img :src="require('assets/img/agoda.png')">
      <img :src="require('assets/img/travellers-choice-2021.png')">
      <img :src="require('assets/img/safety-seal-covid.png')">
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
img{
  border-radius: 10px;
  height: 140px;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 1%;
  margin-right: 1%;
}
.image-holder{
  width: 100%;
  float: left;
  text-align: center;
}
@media only screen and (max-width: 1487px) {
  img {
    height: 120px;
  }
}
@media only screen and (max-width: 1274px) {
   img {
    height: 100px;
  }
}
@media only screen and (max-width: 1062px) {
   img {
    height: 95px;
  }
}
@media only screen and (max-width: 1009px) {
   img {
    height: 90px;
  }
}
@media only screen and (max-width: 956px) {
   img {
    height: 85px;
  }
}
@media only screen and (max-width: 850px) {
   img {
    height: 100px;
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
