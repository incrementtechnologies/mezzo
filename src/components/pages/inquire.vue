<template>
  <div class="custom-container" v-if="data !== null">
    <div class="holder">
      <!-- Add ons -->
      <span v-if="activeStep === 0">
        <h3 class="text-primary">Choose addon services</h3>
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
        <span class="form-group">
          <label style="width: 100%; float: left;">Add other addons</label>
          <label class="text-danger" style="width: 100%; float: left;" v-if="errorMessage !== null"><b>{{errorMessage}}</b></label>
          <span class="">
            <input type="tex" class="form-control" style="width: 20%;" placeholder="Title" v-model="title">
            <input type="tex" class="form-control" style="width: 40%" placeholder="Description" v-model="description">
            <button class="btn btn-primary" @click="newAddOn()">
              Add
            </button>
          </span>
        </span>
      </span>
      <span v-if="activeStep === 1">
        <h3 class="text-primary">Please type necessary information</h3>
        <span class="form-group form-control-half">
          <label style="width: 100%; float: left;">E-mail <b class="text-danger">*</b></label>
          <input type="text" class="form-control" placeholder="Type e-mail address">
        </span>
        <span class="form-group form-control-half">
          <label style="width: 100%; float: left;">Complete name <b class="text-danger">*</b></label>
          <input type="text" class="form-control" placeholder="Type full name">
        </span>

        <span class="form-group form-control-half">
          <label style="width: 100%; float: left;">Organization / Business Name <b class="text-danger">*</b></label>
          <input type="text" class="form-control" placeholder="Type busness name">
        </span>

       <span class="form-group form-control-half">
          <label style="width: 100%; float: left;">Organization / Business Address <b class="text-danger">*</b></label>
          <input type="text" class="form-control" placeholder="Type address">
        </span>

        <span class="form-group form-control-half">
          <label style="width: 100%; float: left;">Contact number <b class="text-danger">*</b></label>
          <input type="text" class="form-control" placeholder="Type contact number">
        </span>
        <span class="form-group form-control-half">
          <label style="width: 100%; float: left;">Date <b class="text-danger">*</b></label>

          <date-picker
            type="date"
            :disabled-date="beforeToday"
            placeholder="Start Date"
            value-type="format"
            v-model="start"
            :default-value="new Date()"></date-picker>

          <date-picker
            type="date"
            :disabled-date="beforeToday"
            placeholder="End Date"
            value-type="format"
            v-model="start"
            :default-value="new Date()"></date-picker>
        </span>
        <span class="form-group">
          <label>Additional information</label>
          <textarea rows="5" style="width: 100%; float: left; padding: 10px;" placeholder="Enter additional information">
            
          </textarea>
        </span>
      </span>
      <span class="action">
        <button class="btn btn-primary" v-if="activeStep > 0" @click="activeStep--">
          Back
        </button>

        <button class="btn btn-primary pull-right" style="float: right;" @click="activeStep++" v-if="activeStep === 0">
          Next
        </button>

        <button class="btn btn-primary pull-right" style="float: right;" @click="submit()" v-if="activeStep === 1">
          Submit
        </button>
      </span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.custom-container{
  width: 100%;
  min-height: 100vh;
  float: left;
  position: fixed;
  top: 0;
  left: 20%;
  width: 80%;
  z-index: 1000;
  overflow: auto;
  background: $white;
}
.holder{
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  padding: 25px;
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
  min-height: 100px;
  width: 32%;
  margin-right: 1%;
  float: left;
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
  width: 49% !important;
  margin-right: 1% !important;
}

.mx-datepicker{
  width: 49% !important;
  margin-right: 1% !important;
  margin-left: 0% !important;
  margin-top: -12px !important;
}

.mx-input-wrapper, .mx-input-wrapper input{
  border: 1px solid $gray !important;
}
@media (max-width: 992px) {
  .custom-container{
    left: 0%;
    width: 100%;
  }
}

</style>
<script>
import COMMON from 'src/common.js'
import { faChevronLeft, faSquare } from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
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
      start: null,
      end: null,
      activeStep: 0
    }
  },
  props: ['data'],
  components: {
    DatePicker
  },
  computed: {
    filteredData: function(){
      let addOns = COMMON.addOns
      if(this.data !== null){
        return addOns.filter(item => 
          item.type.toLowerCase().includes(this.data.title.toLowerCase())
        )
      }else{
        return []
      }
    }
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
    submit(){
      //
    }
  }
}
</script>
