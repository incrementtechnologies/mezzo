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
      <tlBookingForm></tlBookingForm>
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
import tlBookingForm from 'src/components/tlForms/tlBookingForm/tlBookingForm.vue';
import ROUTER from 'router';
export default {
  components: {
    Logo,
    MyFooter,
    tlBookingForm
  },
  methods: {
    redirect(params){
      ROUTER.push(params)
    },
  },
}
</script>
