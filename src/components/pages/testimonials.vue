<template>
  <div class="holder" id="testimonials">
    <!--<h1 class="text-center increment-title text-primary">Reviews</h1>-->
    <div class="platform-container">      
      <div id="testimonialsCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item" v-for="(item, carouselIndex) in dotCirleCount" :key="carouselIndex" :class="{'active': carouselIndex===0}">
            <div v-for="(item, index) in common.testimonials" :key="index">
              <span v-if="index >= carouselIndex * 3 && index <= (carouselIndex * 3) + 2" v-bind:class="{'text-center message-holder':((index + 1) % 3 != 1), 'text-center message-holder1':((index + 1) % 3 == 1)}">
                <font-awesome-icon :icon="faQuoteLeft" class="text-warning qoute-left-icon"></font-awesome-icon>
                <p><i>{{item.message}}</i></p>
                <label class="gray"><b>{{item.name}}</b></label>
                <label v-show = "item.position != quote" class="gray">{{item.position}}</label>
                <label v-show = "item.country != quote" class="gray" style="margin-bottom: 25px;">
                  <img :src="'https://www.countryflags.io/' + item.country_code + '/flat/24.png'">
                  {{item.country}}
                </label>
              </span>
            </div>
          </div>
        </div>

        <div class="text-center carousel-indicators">
          <font-awesome-icon :icon="faCircle" v-for="(item, iconIndex) in dotCirleCount" :key="iconIndex" :class="{'active': iconIndex===0}" @click="setActive(iconIndex)" class="circle-icon-inActive"></font-awesome-icon>
        </div>
      </div>
    
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/style/colors.scss";
.holder{
  min-height: 20vh;
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
  margin-top: 6vh;
}

.circle-icon-inActive{
  margin-left: 5px;
  margin-right: 5px;
}
.carousel-indicators .active{
  color: $warning;
}

.carousel-indicators{
  margin-top: 5px;
  margin-bottom: 25px;
  position: relative;
}

.circle-icon-inActive:hover{
  cursor: pointer;
}
.message-holder, .message-holder1{
  float: left;
  min-height: 15vh;
  border-radius: 20px;
  border: solid 1px $primary;
  width: 40%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 30px;
}

.message-holder1{
  margin-left: 30%;
  margin-right: 30%;
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


.gray{
  color: $warning;
}

.qoute-left-icon{
  font-size: 20px;
  margin-top: 25px;
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
import Jquery from 'jquery'

export default {
  mounted(){
    Jquery("#testimonialsCarousel").carousel({interval: 6000});
  },
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
      return Math.ceil(COMMON.testimonials.length/3)
    }
  },
  methods: {
    openExternal(url){
      window.open(url, '_BLANK')
    },
    setActive(index){
      Jquery("#testimonialsCarousel").carousel(index);
    }
  }
}
</script>
