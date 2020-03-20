<template>
  <div class="holder" id="packages" v-if="common.packages.length > 1">
    <div class="previous" v-if="previous !== null" @click="previousMethod()" :style="{
      width: next !== null ? '11%' : '10%'
    }">
      <span class="details">
        <button class="btn btn-warning" v-if="previous.action === 'inquire_now'" style="margin-top: 37vh;">PREVIOS</button>
      </span>
      <img :src="previous.image">
    </div>
    <div class="item" v-for="(item, index) in 3" :key="index" :style="{
      width: previous == null || next === null ? '30%' : '26%'
    }">
      <span class="details">
        <label class="title">{{common.packages[activeStep + index].title}}</label>
        <button class="btn btn-warning" v-if="common.packages[activeStep + index].action === 'inquire_now'">INQUIRE NOW</button>
      </span>
      <img :src="common.packages[activeStep + index].image">
    </div>
    <div class="next" v-if="next !== null" @click="nextMethod()" :style="{
      width: previous !== null ? '11%' : '10%'
    }">
      <span class="details">
        <button class="btn btn-warning" v-if="next.action === 'inquire_now'" style="margin-top: 37vh;">NEXT</button>
      </span>
      <img :src="next.image">
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

@media (max-width: 992px) {
  .item{
    width: 90%;
  }
}

</style>
<script>
import COMMON from 'src/common.js'
export default {
  mounted(){
    this.next = this.size > this.numberOfViews ? COMMON.packages[this.numberOfViews] : null
  },
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
  methods: {
    openExternal(url){
      window.open(url, '_BLANK')
    },
    nextMethod(){
      let total = this.activeStep + this.numberOfViews
      if(total < this.size){
        this.activeStep++
        this.previous = COMMON.packages[this.activeStep - 1]
        this.next = (this.activeStep + this.numberOfViews) < this.size ? COMMON.packages[this.activeStep + this.numberOfViews] : null
      }else{
        this.next = null
      }
    },
    previousMethod(){
      if(this.activeStep > 0){
        this.activeStep--
      }
      if(this.activeStep === 0){
        this.next = this.size > this.numberOfViews ? COMMON.packages[this.numberOfViews] : null
        this.previous = null
      }else{
        this.previous = COMMON.packages[this.activeStep - 1]
        this.next = (this.activeStep + this.numberOfViews) < this.size ? COMMON.packages[this.activeStep + this.numberOfViews] : null
      }
    }
  }
}
</script>
