<template>
  <div>
    <div>
    <span class="page-holder">
      <logo class="hide-on-mobile"></logo>
    </span>
    </div>
    <div class="booking-body">
      <p>
        <button class="btn btn-warning" @click="redirect('/')">Home</button>
      </p>
      <beBookingForm></beBookingForm>
    </div>
    <MyFooter :property="'redirect'"></MyFooter>
  </div>

</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.booking-body{
  padding-left: 15%;
  padding-right: 15%;
  margin-bottom: 100px;
}

@media screen and (max-width: 480px) {
  .booking-body{
    padding-left: 20px;
    padding-right: 20px;
  }
}

.page-holder{
  width: 100%;
  float: left;
  min-height: 100px;
  overflow: hidden;
  background: $primary !important;
}

.btn-warning {
  margin-top: 10px;
}

#fb-root {
  display: none;
}
</style>
<script>
import Logo from 'src/components/generic/logo.vue';
import MyFooter from 'src/components/frame/footer.vue';
import beBookingForm from 'src/components/beForms/beBookingForm/beBookingForm.vue';
import ROUTER from 'router';
export default {
  components: {
    Logo,
    MyFooter,
    beBookingForm
  },
  methods: {
    redirect(params){
      ROUTER.push(params)
    },
  },
}
</script>
