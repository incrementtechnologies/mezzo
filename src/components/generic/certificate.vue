<template>
  <div>
    <div class="image-holder">
      <img :src="require('assets/img/recognition-excellence-2019.png')">
      <img :src="require('assets/img/sluurpy-2020.png')">
      <img :src="require('assets/img/tuvrheinland.png')">
      <img :src="require('assets/img/travellers-choice-2021.png')">
      <img :src="require('assets/img/safety-seal-covid.png')">
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
img{
  border-radius: 10px;
  width: 20%;
  padding: 2%;
}
.image-holder{
  width: 100%;
  float: left;
}
@media only screen and (max-width: 990px) {
  img {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
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