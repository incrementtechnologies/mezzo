<template>
  <div id="top-view">
    <Header id="header-menu" ref="header"></Header>
    <!-- <HeaderSticky id="sticky-header-menu"></HeaderSticky> -->
    <booking></booking>
    <Rooms></Rooms>
    <Packages :mode="mode" ref="inquire"></Packages>
    <Restaurant></Restaurant>
    <testimonials></testimonials>
    <gallery></gallery>
    <faq></faq>
    <Footer></Footer>
    <span class="return-to-top" @click="scrollTo()">
      <font-awesome-icon :icon="faChevronUp" style="font-size: 24px;" class="icon"></font-awesome-icon>
    </span>
    <image-view ref="imageView" :propStyle="{width: '800px'}" :data="common.gallery"></image-view>
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/style/colors.scss";
#top-view{
  position: relative;
}
.return-to-top{
  position: fixed;
  bottom: 10px;
  left: 10px;
  background: $warning;
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
  color: $primary;
  .icon{
    padding-top: 0px;
  }
}
#header-menu{
  display: block;
}
#sticky-header-menu{
  display: none;
}
</style>
<script>
import Header from 'src/components/frame/header.vue'
// import HeaderSticky from 'src/components/frame/headerSticky.vue'
import Footer from 'src/components/frame/footer.vue'
import Restaurant from 'src/components/pages/restaurant.vue'
import Rooms from 'src/components/pages/rooms.vue'
import Packages from 'src/components/pages/inquire.vue'
import Booking from 'src/components/pages/booking.vue'
import Testimonials from 'src/components/pages/testimonials.vue'
import Faq from 'src/components/pages/faq.vue'
import Gallery from 'src/components/pages/gallery.vue'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Jquery from 'jquery'
import COMMON from 'src/common.js'
import ImageView from 'src/components/increment/generic/modal/ImageCarousel.vue'
export default {
  name: 'HelloWorld',
  mounted(){
    this.retrieve()
    // window.document.body.onscroll = function() {
    // }
    window.addEventListener('scroll', this.onScroll)
  },
  data(){
    return {
      faChevronUp: faChevronUp,
      scrollValue: 0,
      common: COMMON,
      mode: 'package'
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
    Faq,
    Gallery,
    ImageView
    // HeaderSticky
  },
  methods: {
    scrollTo () {
      Jquery('html, body').animate({
        scrollTop: Jquery('#top-view').offset().top
      }, 500)
    },
    onScroll(){
      var height = Jquery(window).height()
      var scrollTop = Jquery(window).scrollTop()
      var vScroll = parseInt((scrollTop / height) * 100)
      if(vScroll >= 20){
        Jquery('.menu').css({
          position: 'fixed',
          'z-index': 10000,
          top: '0%',
          bottom: 'auto'
        })
      }else{
        Jquery('.menu').css({
          position: 'absolute',
          'z-index': 0,
          bottom: '0%',
          top: 'auto'
        })
      }
      this.setActiveOnScroll()
    },
    setActiveOnScroll(){
      if(this.common.menus.length > 0){
        this.common.menus.map((item) => {
          var elementTop = Jquery(item.redirect).offset().top
          var elementBottom = elementTop + Jquery(item.redirect).outerHeight()
          var scrollTop = Jquery(window).scrollTop()
          var height = Jquery(window).height()
          var margin = parseInt(height * 0.1)
          if(scrollTop >= (elementTop - margin) && scrollTop <= (elementBottom - margin)){
            this.common.activeMenu = item.redirect
          }else if(scrollTop <= 0){
            this.common.activeMenu = '#top-view'
          }
        })
      }
    },
    onGroupBooking(){
      this.mode = 'group'
      this.$refs.inquire.activeStep = 1
      this.$refs.header.scrollTo('#packages')
    },
    showImage(index){
      this.$refs.imageView.setImage(index)
    },
    retrieve(){
      COMMON.faq = []
      COMMON.menus = []
      COMMON.packages = null
      COMMON.testimonials = []
      COMMON.rooms = []
      COMMON.restaurants = []
      COMMON.gallery = []
      COMMON.addOns = []
      Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/1/public/values?alt=json', response => {
        let entries = response.feed.entry
        for (var i = 0; i < entries.length; i += 2) {
          if(i > 1){
            let object = {
              question: entries[i].content.$t,
              answer: entries[i + 1].content.$t,
              flag: false
            }
            COMMON.faq.push(object)
          }
        }
      })
      Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/2/public/values?alt=json', response => {
        let entries = response.feed.entry
        for (var i = 0; i < entries.length; i += 2) {
          if(i > 1){
            let object = {
              title: entries[i].content.$t,
              redirect: entries[i + 1].content.$t
            }
            COMMON.menus.push(object)
          }
        }
      })
      Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/3/public/values?alt=json', response => {
        let entries = response.feed.entry
        for (var i = 0; i < entries.length; i += 2) {
          if(i > 1){
            switch(entries[i].content.$t){
              case 'app_name':
                COMMON.APP_NAME = entries[i + 1].content.$t
                break
              case 'app_tagline':
                COMMON.APP_TAGLINE = entries[i + 1].content.$t
                break
              case 'app_email':
                COMMON.APP_EMAIL = entries[i + 1].content.$t
                break
              case 'app_phone_number':
                COMMON.APP_PHONE_NUMBER = entries[i + 1].content.$t
                break
              case 'address':
                COMMON.address = entries[i + 1].content.$t
                break
              case 'app_hearder_background':
                COMMON.APP_HEADER_BACKGROUND = entries[i + 1].content.$t
                break
            }
          }
        }
      })
      Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/4/public/values?alt=json', response => {
        let entries = response.feed.entry
        for (var i = 0; i < entries.length; i += 2) {
          if(i > 1){
            let types = entries[i].content.$t
            let tempTypes = types !== null ? types.split(',') : null
            let image = entries[i + 1].content.$t
            let tempImages = image !== null ? image.split(',') : null
            let imagesArray = tempImages.map((item) => {
              return {
                url: COMMON.host + 'img/' + item
              }
            })
            let typesArray = tempTypes.map(item => {
              return {
                title: item
              }
            })
            let object = {
              types: typesArray,
              images: imagesArray
            }
            COMMON.packages = object
          }
        }
      })
      Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/8/public/values?alt=json', response => {
        let entries = response.feed.entry
        for (var i = 0; i < entries.length; i += 4) {
          if(i > 3){
            let object = {
              message: entries[i].content.$t,
              name: entries[i + 1].content.$t,
              country: entries[i + 2].content.$t,
              position: entries[i + 3].content.$t
            }
            COMMON.testimonials.push(object)
          }
        }
      })
      Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/5/public/values?alt=json', response => {
        let entries = response.feed.entry
        for (var i = 0; i < entries.length; i += 7) {
          if(i > 6){
            let inclusions = entries[i + 3].content.$t
            let tempInclusions = inclusions !== null ? inclusions.split(',') : null
            let image = entries[i + 6].content.$t
            let tempImages = image !== null ? image.split(',') : null
            let imagesArray = tempImages.map((item) => {
              return {
                url: COMMON.host + 'img/' + item
              }
            })
            let inclusionsArray = tempInclusions.map(item => {
              return {
                title: item
              }
            })
            let object = {
              abbreviation: entries[i].content.$t,
              title: entries[i + 1].content.$t,
              description: entries[i + 2].content.$t,
              inclusions: inclusionsArray,
              price: entries[i + 4].content.$t,
              priceInclusions: entries[i + 5].content.$t,
              images: imagesArray
            }
            COMMON.rooms.push(object)
          }
        }
      })
      Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/6/public/values?alt=json', response => {
        let entries = response.feed.entry
        for (var i = 0; i < entries.length; i += 5) {
          if(i > 4){
            let inclusions = entries[i + 3].content.$t
            let tempInclusions = inclusions !== null ? inclusions.split(',') : null
            let image = entries[i + 4].content.$t
            let tempImages = image !== null ? image.split(',') : null
            let imagesArray = tempImages.map((item) => {
              return {
                url: COMMON.host + 'img/' + item
              }
            })
            let inclusionsArray = tempInclusions.map(item => {
              return {
                title: item
              }
            })
            let object = {
              abbreviation: entries[i].content.$t,
              title: entries[i + 1].content.$t,
              description: entries[i + 2].content.$t,
              inclusions: inclusionsArray,
              images: imagesArray
            }
            COMMON.restaurants.push(object)
          }
        }
      })
      Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/7/public/values?alt=json', response => {
        let entries = response.feed.entry
        for (var i = 0; i < entries.length; i++) {
          if(i > 1){
            let image = entries[i].content.$t
            let object = {
              url: COMMON.host + 'img/' + image
            }
            COMMON.gallery.push(object)
          }
        }
      })
      Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/9/public/values?alt=json', response => {
        let entries = response.feed.entry
        let j = 0;
        for (var i = 0; i < entries.length; i += 3) {
          if(i > 2){
            let object = {
              type: entries[i].content.$t,
              title: entries[i + 1].content.$t,
              description: entries[i + 2].content.$t,
              id: j++,
              flag: false
            }
            COMMON.addOns.push(object)
          }
        }
      })
    }
  }
}
</script>