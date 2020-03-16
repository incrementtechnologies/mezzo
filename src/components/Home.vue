<template>
  <div>
    <Header></Header>
    <booking></booking>
    <Rooms></Rooms>
    <Packages></Packages>
    <Restaurant></Restaurant>
    <testimonials></testimonials>
    <faq></faq>
    <Footer></Footer>
    <span class="return-to-top" @click="scrollTo()">
      <font-awesome-icon :icon="faChevronUp" style="font-size: 24px;" class="icon"></font-awesome-icon>
    </span>
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/style/colors.scss";
.return-to-top{
  position: fixed;
  bottom: 10px;
  left: 10px;
  background: $primary;
  color: white;
  height: 50px;
  width: 50px;
  border-radius: 5px;
  line-height: 50px;
  text-align: center;
  z-index: 2000;
}
.icon{
  padding-top: 5px;
}
.return-to-top:hover{
  cursor: pointer;
  color: $warning;
  .icon{
    padding-top: 0px;
  }
}
</style>
<script>
import Header from 'src/components/frame/header.vue'
import Footer from 'src/components/frame/footer.vue'
import Restaurant from 'src/components/pages/restaurant.vue'
import Rooms from 'src/components/pages/rooms.vue'
import Packages from 'src/components/pages/packages.vue'
import Booking from 'src/components/pages/booking.vue'
import Testimonials from 'src/components/pages/testimonials.vue'
import Faq from 'src/components/pages/faq.vue'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Jquery from 'jquery'
export default {
  name: 'HelloWorld',
  data(){
    return {
      faChevronUp: faChevronUp
    }
  },
  props: {
    msg: String
  },
  components: {
    Header,
    Footer,
    Restaurant,
    Rooms,
    Packages,
    Booking,
    Testimonials,
    Faq
  },
  methods: {
    scrollTo () {
      Jquery('html, body').animate({
        scrollTop: Jquery('#home').offset().top
      }, 500)
    }
  }
}
</script>
