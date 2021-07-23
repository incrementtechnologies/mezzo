<template>
  <div>
    <div class="image-holder">
      <a href="https://m.certipedia.com/?id=9000010741" target="_blank"><img id="rec" :src="require('assets/img/tuvrheinland.png')"></a>
      <img :src="require('assets/img/recognition-excellence-2019.png')">
      <img :src="require('assets/img/sluurpy-2020.png')">
      <img :src="require('assets/img/agoda.png')">
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
@media only screen and (max-width: 1725px) {
  img {
    height: 130px;
  }
}

@media only screen and (max-width: 1601px) {
   img {
    height: 120px;
  }
}

@media only screen and (max-width: 1478px) {
   img {
    height: 110px;
  }
}

@media only screen and (max-width: 1355px) {
   img {
    height: 100px;
  }
}

@media only screen and (max-width: 1232px) {
   img {
    height: 90px;
  }
}

@media only screen and (max-width: 1109px) {
   img {
    height: 80px;
  }
}

@media only screen and (max-width: 986px) {
   img {
    height: 110px;
  }
}

@media only screen and (max-width: 692px) {
   img {
    height: 90px;
  }
}

@media only screen and (max-width: 566px) {
   img {
    height: 115px;
  }
}

@media only screen and (max-width: 459px) {
   img {
    height: 100px;
  }
}

@media only screen and (max-width: 350px) {
   img {
    height: 90px;
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