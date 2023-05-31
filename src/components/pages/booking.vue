<template>
  <div class="incre-container">
    <!-- <subscribe class="subscribe"></subscribe> -->
<!--    <div class="form-container">
      <span class="margin-div">
      </span>
      <form
        @submit="checkForm"
        >
        &lt;!&ndash;
        <input type="date" name="arrival_date" id="arrival_date" v-model="checkInDate" class="form-control">

        <input type="date" name="departure_date" id="departure_date" v-model="checkOutDate" class="form-control"> &ndash;&gt;
        &lt;!&ndash; <label for="arrival_date"></label> &ndash;&gt;
        <date-picker
          type="date"
          id="arrival"
          v-model="checkInDate"
          :disabled-date="beforeToday"
          placeholder="Check in"
          :value-type="'YYYY-MM-DD'"
          :format="'MMM D, YYYY'"
          :input-attr="{
            name: 'arrival_date',
            id: 'arrival_date'
          }"
          :default-value="new Date()"></date-picker>


          &lt;!&ndash; <label for="departure_date"></label> &ndash;&gt;
          <date-picker
          type="date"
          id="departure"
          :disabled-date="afterCheckInDate"
          placeholder="Check out"
          :value-type="'YYYY-MM-DD'"
          :format="'MMM D, YYYY'"
          v-model="checkOutDate"
          :input-attr="{
            name: 'departure_date',
            id: 'departure_date'
          }"
          :open="checkInDate && checkOutDate === null ? true : false"
          :default-value="checkInDate"></date-picker>


          <input type="text" name="promo_code" id="promo_code" v-model="couponCode" class="form-control" placeholder="Coupon Code">
          <input type="submit" value="BOOK A ROOM" class="btn btn-warning" />
      </form>
      <span class="text-center group-booking">
        <button class="btn btn-warning" id="group-booking" @click="onGroupBooking()">
          Group booking? Click here.
        </button>
      </span>
    </div>-->
    <div class="large-screen-image">
      <span class="image-holder-large">
        <div class="carousel slide" data-ride="carousel" id="imageCarousel">
          <div class="carousel-inner">
            <div class="carousel-item" v-for="(item, index) in common.APP_HEADER_BACKGROUND.length" :key="index" :class="{'active': index === 0}">
              <img :src="common.APP_HEADER_BACKGROUND[index].url">
            </div>
          </div>
        </div>
      </span>
    </div>

    <div class="mobile-screen-image">
      <span class="image-holder">
        <div class="carousel slide" data-ride="carousel" id="imageCarousel">
          <div class="carousel-inner">
            <div class="carousel-item" v-for="(item, index) in common.APP_HEADER_MOBILE_BACKGROUND.length" :key="index" :class="{'active': index === 0}">
              <img :src="common.APP_HEADER_MOBILE_BACKGROUND[index].url">
            </div>
          </div>
        </div>
      </span>
    </div>

    <div class="prevnext-icon">
      <label>
        <font-awesome-icon :icon="faChevronLeft" class="left" @click="prev()"></font-awesome-icon>
        <font-awesome-icon :icon="faChevronRight" class="right" @click="next()"></font-awesome-icon>
      </label>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

  .text-primary{
    color: $primary !important;
  }
  .incre-container{
    /*height: 73vh;
    float: left;*/
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .btn-white{
    background: rgba(255, 255, 255, 0.5);
    color: $primary !important;
    border-radius: 0px !important;
  }

  img{
    height: 100%;
    width: 100%;
    float: left;
  }
  .form-container{
    width: 100%;
    float: left;
    min-height: $height;
    background: rgba(255, 255, 255, 0.3);
    z-index: 1000;
    padding-top: 2vh;
    padding-bottom: 2vh;
    position: absolute;
    bottom: 0;
  }

  .form-control{
    margin-top: 2vh !important;
    margin-bottom: 1vh !important;
    width: 14% !important;
    float: left !important;
    margin-left: 1% !important;
    border-radius: 3px !important;
    font-size: 14px !important;
  }

  #grop-booking{
    width: 14% !important;
  }

  .btn{
    width: 20% !important;
    margin-top: 2vh !important;
    margin-left: 1% !important;
  }

  .btn-white{
    width: auto !important;
  }

  .margin-div{
    width: 16%;
    float: left;
    height: 10vh;
  }

  .group-booking{
    width: 100%;
    float: left;
    color: $primary;
    text-decoration: underline;
  }

  .group-booking:hover{
    cursor: pointer;
    color: $warning;
  }

  .large-screen-image{
    display: block;
    height: 100%;
    /*position: absolute;*/
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
  }

  .image-holder{
    position: relative;
    height: 100%;
    float: left;
    width: 100%;
    top: 10vh;
  }

  .image-holder-large{
    position: relative;
    height: 100%;
    float: left;
    width: 100%;
  }

  .carousel-indicators .active{
    color: $warning;
  }

  .carousel-indicators{
    margin-top: 5px;
    position: relative;
  }

  .circle-icon-inActive:hover{
    cursor: pointer;
  }

  .prevnext-icon{
    position: absolute;
    top: 50%;
    z-index: 1001;
    width: 100%;
    height: 50px;
    display: block;
  }

  .prevnext-icon label{
    width: 100%;
    height: 50px;
    top: 0px;
  }

  .prevnext-icon .left{
    float: left;
    font-size: 50px;
    margin-left: 25px;
    color: $white;
  }

  .prevnext-icon .right{
    float: right;
    margin-right: 25px;
    font-size: 50px;
    color: $white;
  }

  .prevnext-icon .right:hover, .prevnext-icon .left:hover{
    cursor: pointer;
    color: $warning;
  }

  .mobile-screen-image{
    display: none;
  }
@media screen and (max-width: 1024px){
  .carousel{
    margin-top: $height;
    height: 100% !important;
  }
  img{
    height: 100%;
    width: auto;
    margin-left: -200px;
    float: left;
  }
}
@media screen and (max-width: 992px){
  img{
    height: 100%;
    width: 100%;
    margin-left: 0px;
    float: left;
  }

  .carousel{
    margin-top: auto !important;
    height: auto !important;
  }

  /*.incre-container{
    height: 93vh;
  }*/

  .subscribe{
    display: none;
  }

  .form-control{
    width: 48% !important;
    height: 45px !important;
    min-height: 45px !important;
    margin-top: 0px !important;
  }

  .btn{
    width: 48% !important;
    height: 45px !important;
    min-height: 45px !important;
    margin-top: 0px !important;
  }

  .margin-div{
    width: 0px;
  }

  #group-booking{
    width: 96% !important;
    margin-top: 0px !important;
  }

  .large-screen-image, .prevnext-icon{
    display: none;
  }


  .mobile-screen-image{
    display: block;
  }

  .form-container{
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

@media screen and (max-width: 400px){
  img{
    height: 100%;
    width: 100%;
    float: left;
  }

  /*.incre-container{
    height: 93vh;
  }*/

  .large-screen-image, .prevnext-icon{
    display: none;
  }

  .form-control{
    width: 48% !important;
    height: 45px !important;
    min-height: 45px !important;
    margin-top: 0px !important;
  }

  .btn{
    width: 48% !important;
    height: 45px !important;
    min-height: 45px !important;
    margin-top: 0px !important;
  }

  .mobile-screen-image{
    display: block;
  }


  .form-container{
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
<script>
// import DatePicker from 'vue2-datepicker';
import COMMON from 'src/common.js'
// import 'vue2-datepicker/index.css'
// import Subscribe from 'src/components/generic/subscribe.vue'
import Jquery from 'jquery'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Packages from 'src/components/pages/inquire.vue'
export default {
  components: {
    // DatePicker,
  },
  mounted(){
    Jquery("#imageCarousel").carousel({interval: COMMON.delay});
  },
  data(){
    return{
      common: COMMON,
      checkInDate: null,
      checkOutDate: null,
      couponCode: null,
      adult: '',
      children: '',
      activeImage: 0,
      faChevronRight: faChevronRight,
      faChevronLeft: faChevronLeft
    }
  },
  methods: {
    setActive(command){
      Jquery("#imageCarousel").carousel(command);
    },
    prev(){
      this.$analytics.fbq.event('ViewContent', {
        content_name: 'View Banner Image'
      })
      this.setActive('prev')
    },
    next(){
      this.$analytics.fbq.event('ViewContent', {
        content_name: 'View Banner Image'
      })
      this.setActive('next')
    },
    beforeToday(date){
      return date < new Date()
    },
    afterCheckInDate(date){
      return date < new Date(this.checkInDate)
    },
    openExternal(url){
      this.$analytics.fbq.event('InitialCheckout', {
        content_name: 'Direct to booking'
      })
      window.open(url, '_BLANK')
    },
    onGroupBooking(){
      COMMON.setLoad('#packages')
      this.$analytics.fbq.event('InitialCheckout', {
        content_name: 'Group booking'
      })
      setTimeout(() => {
        this.$parent.onGroupBooking('room', 'rooms')
      }, 100)
    },
    checkForm(e){
      console.log(e)
      if(this.checkInDate && this.checkOutDate){
        Packages.methods.inquireRoom(null, this.checkInDate, this.checkOutDate);
        //return
      }
      if(this.checkInDate === null){
        //
      }
      if(this.checkOutDate === null){
        //
      }
      e.preventDefault()
    }
  }
}
</script>
