<template>
  <div class="holder" id="testimonials">
    <h1 class="text-center increment-title text-primary"><i>Reviews</i></h1>
    <div class="platform-container">
      <div v-for="(item, index) in common.testimonials" :key="index">
        <span v-if="index >= reviewsBatchFrom && index <= reviewsBatchThru && activeIcon == activeIcon" v-bind:class="{'text-center message-holder':((index + 1) % 3 != 1), 'text-center message-holder1':((index + 1) % 3 == 1)}">
          <h1><font-awesome-icon :icon="faQuoteLeft" class="text-warning qoute-left-icon"></font-awesome-icon></h1>
          <p><i>{{item.message}}</i></p>
          <label class="gray"><b>{{item.name}}</b></label>
          <label v-show = "item.position != quote" class="gray">{{item.position}}</label>
          <label v-show = "item.country != quote" class="gray">{{item.country}}</label>
        </span>
        <span v-else class="text-center message-holder">
          <h1><font-awesome-icon :icon="faQuoteLeft" class="text-warning qoute-left-icon"></font-awesome-icon></h1>
          <p><i>{{item.message}}</i></p>
          <label class="text-primary"><b>{{item.name}}</b></label>
          <label v-show = "item.position != quote" class="gray">{{item.position}}</label>
          <label v-show = "item.country != quote" class="gray">{{item.country}}</label>
        </span>
      </div>
    </div>
    <div class="text-center dot-circle">
      <font-awesome-icon :icon="faCircle" v-for="(item, iconIndex) in dotCirleCount" :key="iconIndex" :class="{'circle-icon-active': activeIcon===iconIndex}" @click="setActive(iconIndex)" class="circle-icon-inActive"></font-awesome-icon>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/style/colors.scss";
.holder{
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
  float: left;
}

.text-primary{
  color: $primary !important;
}
.platform-container{
  width: 100%;
  float: left;
  margin-top: 30px;
}
.increment-title{
  margin-top: 50px;
  font-family: Romanesco;
}
.circle-icon-inActive{
  margin-left: 5px;
  margin-right: 5px;
}
.circle-icon-active{
  color: $warning;
}
.circle-icon-inActive:hover{
  cursor: pointer;
}
.message-holder, .message-holder1{
  float: left;
  min-height: 35vh;
  border-radius: 20px;
  border: solid 1px $primary;
  width: 40%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 50px;
}
.message-holder{
  margin-top: 230px;
}
.message-holder1{
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
  background-color: $primary;
} 
.message-holder h1,.message-holder1 h1{
  color: $warning;
  margin-top: 25px;
}
.message-holder1 p{
  color: $white;
}
.message-holder p,.message-holder1 p{
  padding: 0px 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 14px;
}
.message-holder label,.message-holder1 label{
  width: 100%;
  margin-bottom: 0px;
  font-size: 12px;
}
.dot-circle{
  margin-top: 600px;
}

.gray{
  color: $warning;
}
@media (max-width: 992px) {
  .platform-container{
    margin-top: 50px;
  }
  .message-holder1, .message-holder{
    width: 90%;
    min-height: 20vh;
    margin-bottom: 10px;
  }
  .message-holder1{
    position: relative;
    margin-left: 5%;
    margin-right: 5%;
  }
  .message-holder{
    margin-top: 10px;
  }
  .increment-title{
    margin-top: 50px;
  }
}
</style>
<script>
import COMMON from 'src/common.js'
import { faQuoteLeft, faCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  data () {
    return {
      common: COMMON,
      faQuoteLeft: faQuoteLeft,
      faCircle: faCircle,
      activeIcon: 0,
      reviewsBatchFrom: 0,
      reviewsBatchThru: 2,
      quote: '\''
    }
  },
  computed: {
    dotCirleCount: function (){
      //console.log("roundup"+Math.ceil(COMMON.testimonials.length/3));
      return Math.ceil(COMMON.testimonials.length/3)
    }
  },
  methods: {
    openExternal(url){
      window.open(url, '_BLANK')
    },
    setActive(index){
      this.activeIcon = index
      var i = 0
      for (var x = -1; x < index; x++) {
        //console.log(i);
        this.reviewsBatchFrom = i
        this.reviewsBatchThru = this.reviewsBatchFrom + 2
        i+=3
      }
    }
  }
}
</script>
