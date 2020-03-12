<template>
  <div>
    <div class="form-container">
      <h2 class="text-primary">Want to more promos?</h2>
      <p class="text-primary">Subscribe Now!</p>
      <input type="email" class="form-control" placeholder="Enter your email">
      <button class="btn btn-primary">SUBSCRIBE NOW</button>
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

h2{
  margin-top: 25px;
}
h2, p{
  margin-left: 2%;
}

.form-control{
  height: 50px !important;
  width: 64% !important;
  float: left !important;
  margin-right: 2%;
  margin-left: 2%;
  mnargin-bottom: 25px;
}

.btn{
  width: 30% !important;
  float: left !important;
  height: 50px !important;
  margin-right: 2% !important;
  margin-bottom: 25px;
}

@media screen and (max-width: 992px){
  .form-container{
    width: 96%;
    margin-left: 2%;
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
export default {
  mounted(){
  },
  data(){
    return{
      common: COMMON,
      checkInDate: null,
      checkOutDate: null,
      adult: '',
      children: ''
    }
  },
  components: {
  },
  methods: {
  }
}
</script>
