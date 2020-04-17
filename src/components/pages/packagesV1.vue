<template>
  <div class="holder" id="packages" v-if="common.packages.length > 1">
    <h3>
      Do you have upcoming events?
    </h3>
    <button class="btn btn-warning">MAKE AN INQUIRY NOW</button>
    <inquire :data="selected"></inquire>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.holder{
  min-height: 100vh;
  width: 100%;
  float: left;
  overflow: hidden;
  background: white;
  position: relative;
}

h3{
  position: relative;
  mar: 50%;
}

@media (max-width: 992px) {
  .holder{
    height: 70vh;
    width: 100%;
  }
}

</style>
<script>
import COMMON from 'src/common.js'
import Inquire from 'src/components/pages/inquire.vue'
export default {
  mounted(){
    this.initMobileView()
    setInterval(() => {
        this.activeStep++
        if (this.activeStep + this.numberOfViews > COMMON.packages.length){
        this.activeStep = 0
      }
    }, 6000)
  },
  data(){
    return {
      common: COMMON,
      activeStep: 0,
      selected: null
    }
  },
  components: {
    Inquire
  },
  methods: {
    openExternal(url){
      window.open(url, '_BLANK')
    }
  }
}
</script>
