<template>
  <div class="custom-container" id="packages" v-if="common.packages !== null">
    <div class="holder">
      <!-- Add ons -->
      <span v-if="activeStep === 0" class="step1">
        <span class="image-holder">
          <img :src="item.url" v-for="(item, index) in common.packages.images" :key="index">
        </span>
        <span class="step1-action">
          <label class="text-white" style="background: rgba(0,0,0,.5)">
            Are you planning an event?
          </label>
          <br>
          <button class="btn btn-warning" @click="activeStep = 1">MAKE AN INQUIRY</button>
        </span>
      </span>
      <div class="main-step" v-if="activeStep > 0">
        <span v-if="activeStep === 2">
          <span class="form-group custom-form-control">
            <label>Event Type</label>
            <select class="form-control" @change="setPackage()" v-model="selectedIndex">
              <option v-for="(item, index) in common.packages.types" :key="index" :value="index">{{item.title}}</option>
            </select>
          </span>
          <ul>
            <li v-for="(item, index) in filteredData" :key="index" @click="item.flag = !item.flag">
              <h5>
                <font-awesome-icon
                  :icon="faSquare"
                  :class="{'text-primary': item.flag === true, 'text-warning': item.flag === false}"
                ></font-awesome-icon>
                <label style="padding-left: 10px;">{{item.title}}</label>
              </h5>
              <p>{{item.description}}</p>
            </li>
          </ul>
          <span class="form-group" style="width: 100%; float: left; margin-top: 10px;">
            <label style="width: 100%; float: left;">Add </label>
            <label class="text-danger" style="width: 100%; float: left;" v-if="errorMessage !== null"><b>{{errorMessage}}</b></label>
            <span class="width: 100%; float: left;">
              <input type="tex" class="form-control" style="width: 40%;" placeholder="Title" v-model="title">
              <input type="tex" class="form-control" style="width: 40%" placeholder="Description" v-model="description">
              <button class="btn btn-primary" @click="newAddOn()">
                Add
              </button>
            </span>
          </span>
        </span>
        <span v-if="activeStep === 1">
          <h3 class="text-primary">Please fill in the necessary information</h3>
          <p v-if="errorMessage" class="text-danger">{{errorMessage}}</p>

          <span class="form-group form-control-half">
            <label style="width: 100%; float: left;">Complete Name <b class="text-danger">*</b></label>
            <input type="text" class="form-control" placeholder="Type full name" v-model="completeName">
          </span>

          <span class="form-group form-control-half">
            <label style="width: 100%; float: left;">E-mail <b class="text-danger">*</b></label>
            <input type="text" class="form-control" placeholder="Type e-mail address" v-model="email">
          </span>

          <span class="form-group form-control-half">
            <label style="width: 100%; float: left;">Contact Number <b class="text-danger">*</b></label>
            <input type="text" class="form-control" placeholder="Type contact number" v-model="contactNumber">
          </span>

          <span class="form-group form-control-half">
            <label style="width: 100%; float: left;">Organization / Business Name</label>
            <input type="text" class="form-control" placeholder="Optional" v-model="businessName">
          </span>

          <span class="form-group form-control-half" id="address">
            <label style="width: 100%; float: left;">Organization / Business Address</label>
            <input type="text" class="form-control" placeholder="Optional" v-model="address">
          </span>

          <span class="form-group form-control-half">
            <label style="width: 100%; float: left;">Number of Attendees <b class="text-danger">*</b></label>
            <input type="number" class="form-control" placeholder="Type total number of attendees" v-model="attendees">
          </span>

          <span class="form-group form-control-half">
            <label style="width: 100%; float: left;">Number of Rooms</label>
            <input type="number" class="form-control" placeholder="Type number of rooms needed and kindly add more details below" v-model="rooms">
          </span>

          <span class="form-group form-control-half">
            <label style="width: 100%; float: left;">Date <b class="text-danger">*</b></label>

            <date-picker
              type="datetime"
              :disabled-date="beforeToday"
              placeholder="Start Date"
              value-type="format"
              v-model="start"
              :default-value="new Date()"></date-picker>

            <date-picker
              type="datetime"
              :disabled-date="beforeToday"
              placeholder="End Date"
              value-type="format"
              v-model="end"
              :default-value="new Date()"></date-picker>
          </span>

          <span class="form-group" style="width: 100%; float: left;">
            <label>Additional information</label>
            <textarea rows="5" style="width: 100%; float: left; padding: 10px;" placeholder="Enter additional information" v-model="additionalInformation">
              
            </textarea>
          </span>
        </span>
        <span class="action">
          <button class="btn btn-primary" v-if="activeStep > 0" @click="activeStep--">
            Back
          </button>

          <button class="btn btn-primary pull-right" style="float: right;" @click="next()" v-if="activeStep === 1 && mode !== 'group'">
            Next
          </button>

          <button class="btn btn-primary pull-right" style="float: right;" @click="submit()" v-if="activeStep === 1 && mode === 'group'">
            Submit
          </button>

          <button class="btn btn-primary pull-right" style="float: right;" @click="submit()" v-if="activeStep === 2">
            Submit
          </button>
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.custom-container{
  width: 100%;
  min-height: 10vh;
  float: left;
  overflow: hidden;
  background: $white;
  position: relative;
}
.holder{
  width: 100%;
}

.step1{
  position: relative;
  width: 100%;
  float: left;
}

.step1 label{
  font-size: 42px;
  padding: 10px;
}

.custom-form-control{
  width: 20% !important;
  margin-right: 80% !important;
  float: left;
}
.image-holder{
  float: left;
  width: 100%;
  position: relative;
}

.image-holder img{
  height: auto;
  width: 25%;
  float: left;
}

.step1-action{
  position: absolute;
  top: 50%;
  text-align: center;
  left: 0;
  width: 100%;
}

.step1-action .btn{
  width: 20% !important;
}

.main-step{
  margin-top: 50px;
  width: 100%;
  float: left;
  margin-bottom: 50px;
  padding-left: 25px;
  padding-right: 25px;
}

ul{
  list-style: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
  float: left;
  margin-top: 25px;
}

ul li{
  min-height: 20px;
  width: 32%;
  margin-right: 1%;
  float: left;
  margin-bottom: 15px;
}

ul li:hover{
  cursor: pointer;
}
.text-primary{
  color: $primary !important;
}

.text-warning{
  color: $warning !important;
}

.form-control{
  float: left !important;
  margin-right: 1% !important;
  border: 1px $gray solid !important;
}
.action{
  width: 100%;
  float: left;
  margin-top: 25px;
}

.form-control-half{
  float: left;
  width: 32% !important;
  margin-right: 1% !important;
}

.mx-datepicker{
  width: 49% !important;
  margin-right: 1% !important;
  margin-left: 0% !important;
  margin-top: -16px !important;
}

.mx-input-wrapper, .mx-input-wrapper input{
  border: 1px solid $gray !important;
}
#address{
  margin-right: 33% !important;
}
@media (max-width: 992px) {
  .custom-container{
    left: 0%;
    width: 100%;
  }

  .image-holder img{
    height: auto;
    width: 50%;
    float: left;
  }

  .step1-action .btn{
    width: 90% !important;
    margin-left: 5%;
  }


  .step1-action{
    top: 30%;    
  }

  .custom-form-control{
    width: 100% !important;
  }

  ul li{
    width: 100%;
    margin-right: 0%;
  }


  .form-control-half{
    width: 100% !important;
    margin-right: 0% !important;
  }

  #address{
    margin-right: 0% !important;
  }

  .mx-datepicker svg{
    vertical-align: -1em !important;
  }
}

</style>
<script>
import COMMON from 'src/common.js'
import { faChevronLeft, faSquare } from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import Jquery from 'jquery'
export default {
 data(){
    return {
      common: COMMON,
      activeImage: 0,
      faChevronLeft: faChevronLeft,
      faSquare: faSquare,
      title: null,
      description: null,
      errorMessage: null,
      email: null,
      contactNumber: null,
      completeName: null,
      businessName: null,
      address: null,
      additionalInformation: null,
      start: null,
      end: null,
      attendees: 1,
      rooms: 1,
      activeStep: 0,
      selectedIndex: null,
      filteredData: []
    }
  },
  props: ['data', 'mode'],
  components: {
    DatePicker
  },
  methods: {
    newAddOn(){
      this.errorMessage = null
      if(this.title === null || this.title === ''){
        this.errorMessage = 'Title is required.'
        return
      }
      if(this.description === null || this.description === ''){
        this.errorMessage = 'Description is required.'
        return
      }
      let object = {
        description: this.description,
        title: this.title,
        flag: true,
        id: this.filteredData.length
      }
      this.filteredData.push(object)
      this.title = null
      this.description = null
    },
    setPackage(){
      if(this.selectedIndex === null){
        this.filteredData = []
        return
      }else{
        let selectedPackage = COMMON.packages.types[this.selectedIndex]
        this.filteredData = COMMON.addOns.filter((item) => {
          return item.type.includes(selectedPackage.title)
        })
      }
    },
    validateEmail () {
      let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/
      if (reg.test(this.email) === false) {
        return false
      } else {
        return true
      }
    },
    validate(){
      this.errorMessage = null
      if(this.email === null){
        this.errorMessage = 'Please fill in the required information.'
        return false
      }else if (this.email !== null && this.validateEmail() === false) {
        this.errorMessage = 'Invalid e-mail address.'
        return false
      }else if(this.contactNumber === null || this.contactNumber === '' || this.contactNumber.length < 7){
        this.errorMessage = 'Invalid contact number.'
        return false
      }else if(this.completeName === null || this.completeName === ''){
        this.errorMessage = 'Complete Name is required.'
        return false
      }else if(this.attendees < 1){
        this.errorMessage = 'Attendees must be greater than 0'
        return false
      }else if(this.rooms < 1){
        this.errorMessage = 'Rooms must be greater than 0'
        return false
      }else if(this.start === null || this.start === ''){
        this.errorMessage = 'Start date is required.'
        return false
      }else if(this.end === null || this.end === ''){
        this.errorMessage = 'End date is required.'
        return false
      }
      return true
    },
    next(){
      if(this.validate()){
        this.activeStep++
      }
    },
    submit(){
      if(this.validate()){
        this.create()
      }
    },
    beforeToday(date){
      return date < new Date()
    },
    initInput(){
      this.email = null
      this.completeName = null
      this.businessName = null
      this.address = null
      this.additionalInformation = null
      this.start = null
      this.end = null
      this.attendees = 1
      this.rooms = 1
      this.activeStep = 0
      this.selectedIndex = null
      this.filteredData = []
    },
    create () {
      // send to email
      let addons = ''
      let type = ''
      for (var i = 0; i < this.filteredData.length; i++) {
        let item = this.filteredData[i]
        if(item.flag === true){
          type = item.type
          addons += item.title + ', ' + item.description + '\n'
        }
      }
      console.log('hello')
      let data = 'email=' + this.email +
      '&complete_name=' + this.completeName +
      '&contact_number=' + this.contactNumber +
      '&business=' + this.businessName +
      '&type=' + (this.mode !== 'group' ? type : 'Group Bookings') +
      '&start=' + this.start +
      '&end=' + this.end +
      '&contact_number=' + this.contactNumber +
      '&attendees=' + this.attendees +
      '&rooms=' + this.rooms +
      '&additional_information=' + this.additionalInformation +
      '&addons=' + addons
      Jquery.ajaxSetup({
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      Jquery.get(this.common.host + 'php/gsheet.php?' + data, () => {
      })
      setTimeout(() => {
        this.initInput()
      }, 1000)
    }
  }
}
</script>
