<template>
  <div class="incre-container">
    <subscribe class="subscribe"></subscribe>
    <div class="form-container">
      <span class="margin-div">
      </span>
      <form 
        @submit="checkForm"
        :action="common.booking_link"
        id="check-form"
        method="post">
        <!-- 
        <input type="date" name="arrival_date" id="arrival_date" v-model="checkInDate" class="form-control">

        <input type="date" name="departure_date" id="departure_date" v-model="checkOutDate" class="form-control"> -->
        <!-- <label for="arrival_date"></label> -->
        <date-picker
          type="date"
          v-model="checkInDate"
          :disabled-date="beforeToday"
          placeholder="Check in"
          value-type="format"
          :input-attr="{
            name: 'arrival_date',
            id: 'arrival_date'
          }"
          :default-value="new Date()"></date-picker>


          <!-- <label for="departure_date"></label> -->
          <date-picker
          type="date"
          :disabled-date="beforeToday"
          placeholder="Check out"
          value-type="format"
          v-model="checkOutDate"
          :input-attr="{
            name: 'departure_date',
            id: 'departure_date'
          }"
          :default-value="new Date()"></date-picker>


          <input type="text" name="coupon_code" id="coupon_code" v-model="couponCode" class="form-control" placeholder="Coupon Code">
          <input type="submit" value="BOOK A ROOM" class="btn btn-warning" />
      </form>
      <span class="text-center group-booking">
        <button class="btn btn-white" id="group-booking" @click="onGroupBooking()">
          Group booking? Click here.
        </button>
      </span>
    </div>
    <img :src="common.APP_HEADER_BACKGROUND">
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

  .text-primary{
    color: $primary !important;
  }
  .incre-container{
    min-height: 73vh;
    float: left;
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
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
  }
  .form-container{
    width: 100%;
    float: left;
    min-height: $height;
    background: rgba(255, 255, 255, 0.5);
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

@media screen and (max-width: 992px){
  .subscribe{
    display: none;
  }

  img{
    width: auto;
    height: 100%;
    position: relative;
    left: -400px !important;
  }

  .form-control{
    width: 48% !important;
  }

  .btn{
    width: 48% !important;
  }

  .margin-div{
    width: 0px;
  }

  #group-booking{
    width: 96% !important;
  }
}

@media screen and (max-width: 400px){
  img{
    width: auto;
    height: 100%;
    position: relative;
    left: -800px !important;
  }
}
</style>
<script>
import DatePicker from 'vue2-datepicker'
import COMMON from 'src/common.js'
import 'vue2-datepicker/index.css'
import Subscribe from 'src/components/generic/subscribe.vue'
export default {
  mounted(){
  },
  data(){
    return{
      common: COMMON,
      checkInDate: null,
      checkOutDate: null,
      couponCode: null,
      adult: '',
      children: ''
    }
  },
  components: {
    DatePicker,
    Subscribe
  },
  methods: {
    beforeToday(date){
      return date < new Date()
    },
    openExternal(url){
      window.open(url, '_BLANK')
    },
    onGroupBooking(){
      this.$parent.onGroupBooking()
    },
    checkForm(e){
      console.log(e)
      if(this.checkInDate && this.checkOutDate){
        return
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
