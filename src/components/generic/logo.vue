<template>
  <div>
    <div class="holder">
      <img :src="require('assets/img/logo.png')">
      <label class="title"><b>{{common.APP_NAME}}</b></label>
      <label class="tagline">{{common.APP_TAGLINE}}</label>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.holder{
  width: 20%;
  float: left;
  margin-left: 40%;
  text-align: center;
}

img{
  width: 80%;
  height: auto;
  margin-left: 10%;
  margin-top: 25px;
  margin-bottom: 10px;
}

label{
  color: white;
  width: 100%;
  float: left;
  font-size: 24px;
}

.title{
  padding-top: 5px;
  padding-bottom: 5px;
  border-top: solid 1px white;
  border-bottom: solid 1px white;
}

@media screen and (max-width: 992px){
  .holder{
    width: 60%;
    margin-left: 20%;
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
