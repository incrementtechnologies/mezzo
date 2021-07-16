<template>
  <div>
    <div class="image-holder">
      <img id="rec" :src="require('assets/img/tuvrheinland.png')">
      <img :src="require('assets/img/recognition-excellence-2019.png')">
      <img :src="require('assets/img/sluurpy-2020.png')">
      <img :src="require('assets/img/travellers-choice-2021.png')">
      <img :src="require('assets/img/safety-seal-covid.png')">
      <img :src="require('assets/img/safe-travels.png')">
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
img{
  border-radius: 10px;
  height: 150px;
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
@media only screen and (max-width: 990px) {
  img {
    height: 100px;
  }
}

@media only screen and (max-width: 380px) {
   img {
    height: 80px;
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