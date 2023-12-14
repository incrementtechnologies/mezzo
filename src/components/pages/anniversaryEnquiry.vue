<template>
  <div class="custom-container" id="packages" v-if="common.packages !== null">
    <span class="page-holder">
      <logo class="hide-on-mobile"></logo>
    </span>
    <div class="holder">
      <div class="main-step" v-if="activeStep > 0">
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

          <span class="form-group form-control-half" v-if="mode !== 'others'">
            <label style="width: 100%; float: left;">Number of Vouchers to Buy <b class="text-danger">*</b></label>
            <input type="number" class="form-control" placeholder="Type total number of vouchers to buy" v-model="vouchers">
          </span>

          <span class="form-group form-control-half">
            <label style="width: 100%; float: left;">Mode of Payment<b class="text-danger">*</b></label>
            <select v-model="selected" class="form-control">
              <option disabled value="">Please select one</option>
              <option>Cash</option>
              <option>Credit Cards</option>
              <option>Bank Tranfers</option>
              <option>Direct Deposit</option>
              <option>Prepaid Cards</option>
            </select>
          </span>

          <span class="form-group" style="width: 100%; float: left;">
            <label>Additional information</label>
            <textarea rows="5" style="width: 100%; float: left; padding: 10px;" placeholder="Enter additional information" v-model="additionalInformation">
            </textarea>
          </span>
        </span>
        <span class="text-center incre-holder" v-if="activeStep === 2">
          <h1 class="text-primary" style="margin-top: 25px;">Thanks for making it Mezzo!</h1>
          <h3 style="margin-top: 75px;">We have received your booking inquiry, allow our Reservations to send you the confirmation number within 24 hours. For urgent requests, you may call us at (032) 231-0777 or 0917-139-7204.</h3>
        </span>
        <span class="action" v-if="activeStep === 1">
          <button class="btn btn-primary pull-right" style="float: right;" @click="submit()">
            Submit
          </button>
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

.dropdown-menu{
  padding: 0px !important;
}
.dropdown-item{
  height: 50px !important;
  line-height: 50px !important;
}
.dropdown-item:hover{
  cursor: pointer;
  background: $primary !important;
  color: $white !important;
}

.custom-container{
  width: 100%;
  min-height: 10vh;
  float: left;
  overflow: hidden;
  background: $white;
  position: relative;
  margin-bottom: 200px;
}

.page-holder{
  width: 100%;
  float: left;
  min-height: 100px;
  overflow: hidden;
  background: $primary !important;
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
}

</style>
<script>
import COMMON from 'src/common.js'
import { faChevronLeft, faSquare } from '@fortawesome/free-solid-svg-icons'
import Logo from 'src/components/generic/logo.vue'
import Jquery from 'jquery'
import Config from 'src/config.js'
export default {
 mounted(){
  this.type = this.$route.params.type === 'other' ? 'others' : this.$route.params.type
  this.mode = this.$route.params.type != null ? this.$route.params.type.toLowerCase() : ''
  this.mode = this.mode === 'other' ? 'others' : this.mode
  this.setPackage()
  this.retrieve()
 },
 data(){
    return {
      common: COMMON,
      activeImage: 0,
      faChevronLeft: faChevronLeft,
      faSquare: faSquare,
      title: null,
      errorMessage: null,
      email: null,
      contactNumber: null,
      completeName: null,
      address: null,
      selected: '',
      additionalInformation: null,
      start: null,
      end: null,
      vouchers: 1,
      rooms: 0,
      activeStep: 2,
      selectedIndex: null,
      filteredData: [],
      type: 'Anniversary E-Vouchers',
      mode: 'Anniversary E-Vouchers',
      doc: null
    }
  },
  props: ['data'],
  components: {
    Logo
  },
  methods: {
    async retrieve(){
      const { GoogleSpreadsheet } = require('google-spreadsheet')
      this.doc = new GoogleSpreadsheet(Config.googleSheetId)
      await this.doc.useServiceAccountAuth({
        client_email: Config.google.client_email,
        private_key: Config.google.private_key,
      })
      await this.doc.loadInfo()
      const packagesSheet = this.doc.sheetsByIndex[3]
      let packagesRows = await packagesSheet.getRows()
      for (var i = 0; i < packagesRows.length; i++) {
        let item = packagesRows[i]
        let types = item.types
        let tempTypes = types !== null ? types.split(',') : null
        let image = item.images
        let tempImages = image !== null ? image.split(',') : null
        let imagesArray = tempImages.map((item) => {
          return {
            url: COMMON.api + item
          }
        })
        let typesArray = tempTypes.map(itemI => {
          return {
            title: itemI
          }
        })
        let object = {
          types: typesArray,
          images: imagesArray
        }
        COMMON.packages = object
      }
    },
    newAddOn(){
      this.errorMessage = null
      if(this.title === null || this.title === ''){
        this.errorMessage = 'Title is required.'
        return
      }
      let object = {
        title: this.title,
        flag: true,
        id: this.filteredData.length
      }
      this.filteredData.push(object)
      this.title = null
    },
    setPackage(){
      if(this.selectedIndex === null){
        this.filteredData = []
        return
      }else{
        let selectedPackage = COMMON.packages.types[this.selectedIndex]
        this.type = COMMON.packages.types[this.selectedIndex].title
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
      }else if(this.vouchers < 1){
        this.errorMessage = 'Vouchers must be greater than 0'
        return false
      } else if(this.selected === null || this.selected === ''){
        this.errorMessage = 'Please select one mode of payment'
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
    afterStart(date){
      return date <= new Date(this.start)
    },
    initInput(){
      this.email = null
      this.completeName = null
      this.address = null
      this.address = null
      this.selected = null
      this.additionalInformation = null
      this.start = null
      this.end = null
      this.vouchers = 1
      this.rooms = 0
      this.activeStep = 0
      this.selectedIndex = null
      this.filteredData = []
      this.contactNumber = null
      this.type = this.$route.params.type
      this.mode = this.$route.params.type != null ? this.$route.params.type.toLowerCase() : ''
      this.setPackage()
    },
    create () {
      // send to email
      this.$analytics.fbq.event('Contact', {
        content_name: this.email + ' is contacting'
      })
      console.log('hello')
      let data = 'email=' + this.email +
      '&complete_name=' + this.completeName +
      '&contact_number=' + this.contactNumber +
      '&business=' + null +
      '&type=E-Vouchers' +
      '&start=' + null +
      '&end=' + null +
      '&attendees=' + this.vouchers +
      '&rooms=' + null +
      '&additional_information=' + this.additionalInformation +
      '&addons=' + this.selected
      Jquery.ajaxSetup({
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      Jquery.get(this.common.host + 'php/gsheet.php?' + data, () => {
      })
      setTimeout(() => {
        this.initInput()
        this.activeStep = 2
      }, 1000)
    }
  }
}
</script>
