<template>
  <div class="holder" id="testimonials">
    <h1 class="text-center increment-title text-primary">Reviews</h1>
    <div class="platform-container">
      <div class="text-center message-holder" v-for="(item, index) in common.testimonials" :key="index">
        <h1>
          <font-awesome-icon icon="qoute-left" class=""></font-awesome-icon>
        </h1>
        <p><i>{{item.message}}</i></p>
        <h6 class="text-primary"><b>{{item.name}}</b></h6>
        <label class="gray"><b>{{item.position}}</b></label>
        <label class="gray">{{item.country}}</label>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/style/colors.scss";
.holder{
  height: 100vh;
  width: 100%;
  float: left;
}

.text-primary{
  color: $primary !important;
}
.platform-container{
  width: 100%;
  float: left;
}
.increment-title{
  margin-top: 100px;
}
.message-holder{
  float: left;
  height: auto;
  border-radius: 20px;
  border: solid 1px $primary;
  width: 40%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 50px;
}
.message-holder h1{
  color: $primary;
  margin-top: -25px;
}
.message-holder p{
  padding: 0px 10px;
}
.message-holder label{
  width: 100%;
  float: left;
}
.gray{
  color: gray;
}
@media (max-width: 992px) {
  .platform-container{
    margin-top: 50px;
  }
  .message-holder{
    width: 90%;
  }
  .increment-title{
    margin-top: 50px;
  }
}
</style>
<script>
import COMMON from 'src/common.js'

export default {
  data () {
    return {
      common: COMMON
    }
  }
}
</script>
