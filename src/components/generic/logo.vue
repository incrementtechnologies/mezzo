<template>
  <div>
    <div class="holder">
      <img :src="common.api + 'logo.png'">
      <!-- <span class="details">
        <label class="title"><b>{{common.APP_NAME}}</b></label> 
      </span>
      <span class="details">
        <label class="tagline">{{common.APP_TAGLINE}}</label> 
      </span> -->
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.holder{
  width: 100%;
  float: left;
  text-align: center;
}

img{
  width: auto;
  height: 20vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.details{
  width: 100%;
  float: left;
  text-align: center;
}

label{
  color: white;
  font-size: 24px;
}

.title{
  padding-top: 5px;
  padding-bottom: 5px;
  border-top: solid 1px white;
  border-bottom: solid 1px white;
}

.tagline{
  font-size: 18px;
}

@media screen and (max-width: 992px){
  img{
    width: 30%;
    height: auto;
  }

  label{
    width: 30%;
    font-size: 12px;
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
