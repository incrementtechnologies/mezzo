<template>
  <div>
    <div class="form-container" v-if="successFlag === false">
      <h4 class="text-primary">Want to know more about our latest offers?</h4>
      <label class="text-danger" style="width: 100%; padding-left: 10px;" v-if="errorMessage !== null"><b>Opps! {{errorMessage}}</b></label>
      <input type="email" class="form-control" placeholder="Enter your email" v-model="email">
      <button class="btn btn-primary" @click="subscribe()">SUBSCRIBE</button>
    </div>
    <div class="form-container" v-else>
      <h2 class="text-primary" style="margin-bottom: 25px;">Thank you for subscribing!</h2>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.text-primary{
  color: $primary !important;
}

.form-container{
  width: 40%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 1000;
  position: absolute;
  bottom: 16vh;
  margin-left: 30%;
}

h4{
  margin-top: 25px;
}
h4, p{
  margin-left: 2%;
}

.form-control{
  height: 50px !important;
  width: 54% !important;
  float: left !important;
  margin-right: 2%;
  margin-left: 2%;
  mnargin-bottom: 25px;
}

.btn{
  width: 40% !important;
  float: left !important;
  height: 50px !important;
  margin-right: 2% !important;
  margin-bottom: 25px;
}

@media screen and (max-width: 992px){
  .form-container{
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
  }

  .btn{
    margin-top: 25px;
  }
  .btn, .form-control{
    width: 100% !important;
    margin-left: 0% !important;
    margin-right: 0% !important;
  }
}
</style>
<script>
import COMMON from 'src/common.js'
import Jquery from 'jquery'
export default {
  mounted(){
  },
  data(){
    return{
      common: COMMON,
      email: null,
      errorMessage: null,
      successFlag: false
    }
  },
  components: {
  },
  methods: {
    validateEmail(email){
      let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/
      let reqWhiteSpace = /\s/
      if(reqWhiteSpace.test(email)){
        return false
      }
      if(reg.test(email) === false){
        return false
      }else{
        return true
      }
    },
    subscribe(){
      if(this.email === null || this.email === ''){
        this.errorMessage = 'Email address is required.'
        return
      }
      if(this.validateEmail(this.email) === false){
        this.errorMessage = 'Invalid email address'
        return
      }
      Jquery.ajaxSetup({
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      Jquery.get(this.common.host + 'php/mailchimp.php?email=' + this.email, () => {
        this.email = null
        this.errorMessage = null
        this.successFlag = true
      });
    }
  }
}
</script>
