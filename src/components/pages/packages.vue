<template>
  <div class="holder" id="packages" v-if="common.packages.length > 1">
    
    <span class="previous" @click="previousMethod()">
      <font-awesome-icon :icon="faAngleLeft" class="prevIcon"></font-awesome-icon>
    </span>
    <span class="next" @click="nextMethod()">  
      <font-awesome-icon :icon="faAngleRight" class="nextIcon"></font-awesome-icon>
    </span>

    <div class="item" v-for="(item, index) in 4" :key="index">
      <span class="details">
        <label class="title">{{common.packages[activeStep + index].title}}</label>
        <button class="btn btn-warning" v-if="common.packages[activeStep + index].action === 'inquire_now'">MAKE AN INQUIRY</button>
      </span>
      <img :src="common.packages[activeStep + index].image">
    </div>

    
    

    <!--<div class="previous" v-if="previousPackBtn" @click="previousMethod()" :style="{
      width: nextPackBtn ? '11%' : '10%'
    }">
      <span class="details">
        <button class="btn btn-warning" v-if="currentPrevPackBtn.action === 'inquire_now'"><font-awesome-icon :icon="faAngleLeft"></font-awesome-icon></button>
      </span>
      <img :src="currentPrevPackBtn.image">
    </div>
    
    <div class="item" v-for="(item, index) in 3" :key="index" :style="{
      width: !nextPackBtn || !previousPackBtn ? '30%' : '26%'
    }">
      <span class="details">
        <label class="title">{{common.packages[activeStep + index].title}}</label>
        <button class="btn btn-warning" v-if="common.packages[activeStep + index].action === 'inquire_now'">MAKE AN INQUIRY</button>
      </span>
      <img :src="common.packages[activeStep + index].image">
    </div>

    <div class="next" v-if="nextPackBtn" @click="nextMethod()" :style="{
      width: previousPackBtn ? '11%' : '10%'
    }">
      <span class="details">
        <button class="btn btn-warning" v-if="currentNextPackBtn.action === 'inquire_now'"><font-awesome-icon :icon="faAngleRight"></font-awesome-icon></button>
      </span>
      <img :src="currentNextPackBtn.image">
    </div>-->  
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
  /*width: 26%;*/
  width: 25%;
  float: left;
  min-height: 70vh;
  position: relative;
  overflow: hidden;
}

.previous, .next{
  position: absolute;
  z-index: 2000;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  background-color: rgba(0,0,0,0);
  border: solid 2px white;
  top: 8.5vh;
}

.previous{
  left: 25px;
}

.next{
  right: 25px;
}

.prevIcon, .nextIcon{
  position: relative;
  color: white;
  top: 2.2vh;
  font-size: 3vh;
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
  width: 100%;
  color: white;
  /*font-style: italic;*/
}

.details:hover{
  cursor: pointer;
  background: rgba(0, 0, 51, 0.5);
}

.next:hover, .previous:hover{
  cursor: pointer;
  background: $warning;
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
}

.next button, .previous button{
  margin-top: 37vh;
  font-size: 30px;
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
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
export default {
 data(){
    return {
      common: COMMON,
      activeStep: 0,
      numberOfViews: 3,
      size: COMMON.packages.length,
      previous: null,
      next: null,
      faAngleLeft: faAngleLeft,
      faAngleRight: faAngleRight
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
    }
  }
}
</script>
