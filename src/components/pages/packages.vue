<template>
  <div class="holder" id="packages" v-if="common.packages.length > 1">
    <div class="previous" v-if="previousPackBtn" @click="previousMethod()" :style="{
      width: nextPackBtn ? '11%' : '10%'
    }">
      <span class="details">
        <button class="btn btn-warning" v-if="currentPrevPackBtn.action === 'inquire_now'">PREV</button>
      </span>
      <img :src="currentPrevPackBtn.image">
    </div>
    
    <div class="item" v-for="(item, index) in 3" :key="index" :style="{
      width: !nextPackBtn || !previousPackBtn ? '30%' : '26%'
    }">
      <span class="details">
        <label class="title">{{common.packages[activeStep + index].title}}</label>
        <button class="btn btn-warning" v-if="common.packages[activeStep + index].action === 'inquire_now'" @click="inquireNow(activeStep + index)">INQUIRE NOW</button>
      </span>
      <img :src="common.packages[activeStep + index].image">
    </div>

    <div class="next" v-if="nextPackBtn" @click="nextMethod()" :style="{
      width: previousPackBtn ? '11%' : '10%'
    }">
      <span class="details">
        <button class="btn btn-warning" v-if="currentNextPackBtn.action === 'inquire_now'">NEXT</button>
      </span>
      <img :src="currentNextPackBtn.image">
    </div>  
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.holder{
  height: 70vh;
  width: 100%;
  float: left;
  overflow: hidden;
  background: white;
  position: relative;
}

.item{
  width: 26%;
  float: left;
  min-height: 70vh;
  position: relative;
  overflow: hidden;
}
.previous, .next{
  float: left;
  min-height: 70vh;
  position: relative;
  overflow: hidden;
  width: 10%;
}

.details{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  text-align: center;
  overflow: hidden;
}

.details .title{
  margin-top: 50%;
  font-size: 42px;
  font-style: italic;
}

.details:hover{
  cursor: pointer;
  background: rgba(0, 0, 51, 0.5);
}

.details .title{
  width: 100%;
  color: white;
}

img{
  position: absolute;
  top: 0;
  height: auto;
  width: 100%;
  z-index: 0;
}

.btn{
  width: 60% !important;
  height: 10vh !important;
}

.next button, .previous button{
  margin-top: 37vh;
}

@media (max-width: 992px) {
  .holder{
    height: 70vh;
  }
  img{
    position: absolute;
    height: 100%;
    width: auto;
  }
  .item span label{
    padding-top: 8vh;
  }
  .btn{
    position: relative;
    width: 75% !important;
    height: 10vh !important;
    font-size: 12px;
    padding: 2.5px;
  }
  .next button, .previous button{
    font-size: 10px !important;
    margin-top: 30vh;
    width: 90% !important;
    padding: 0 !important;
    height: 7vh !important;
  }
  
}

</style>
<script>
import COMMON from 'src/common.js'
export default {
 data(){
    return {
      common: COMMON,
      activeStep: 0,
      numberOfViews: 3,
      size: COMMON.packages.length,
      previous: null,
      next: null
    }
  },
  computed: {
    nextPackBtn: function (){
      if(this.activeStep + this.numberOfViews < COMMON.packages.length){
        return true
      }
      else
        return false
    },
    previousPackBtn: function (){
      if(this.activeStep > 0){
        return true
      }
      else
        return false
    },
    currentPrevPackBtn: function (){
      return COMMON.packages[this.activeStep - 1]
    },
    currentNextPackBtn: function (){
      return COMMON.packages[this.activeStep + this.numberOfViews]
    }
  },
  methods: {
    openExternal(url){
      window.open(url, '_BLANK')
    },
    nextMethod(){
      this.activeStep++
    },
    previousMethod(){
      this.activeStep--
    },
    inquireNow(index){  
      console.log('Inquire on '+COMMON.packages[index].title)
    }
  }
}
</script>
