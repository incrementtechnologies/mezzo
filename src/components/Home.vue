<template>
  <div id="top-view">
    <Header id="header-menu" ref="header"></Header>
    <!-- <HeaderSticky id="sticky-header-menu"></HeaderSticky> -->
    <span class="banner-bottom" @click="redirect('/press-room/page/Mezzo_Hotel_Health_and_Safety_Protocols')">
      Check our Health and Safety Protocol
      <span>
        <img src="../assets/img/TC-Winner-2021.gif" height="70px" width="auto">
        <img src="../assets/img/safe-travels.png" height="70px" width="auto">
      </span>
    </span>
    <booking></booking>
    <about-page></about-page>
    <Rooms></Rooms>
    <Packages ref="inquire"></Packages>
    <Restaurant v-if="common.load.restaurants === true"></Restaurant>
    <testimonials v-if="common.load.testimonials === true"></testimonials>
    <gallery></gallery>
    <faq></faq>
    <MyFooter :property="'scroll'"></MyFooter>
    <span class="return-to-top" @click="scrollTo()">
      <font-awesome-icon :icon="faChevronUp" style="font-size: 24px;" class="icon"></font-awesome-icon>
    </span>
    <image-view ref="imageView" :propStyle="{width: '700px'}" :data="common.gallery" :customId="'galleryViewer'"></image-view>
    <image-view ref="imageViewAnnouncements" :propStyle="{width: '700px'}" :data="common.announcements" v-if="common.announcements.length > 0" :customId="'announcementViewer'"></image-view>
    <privacy></privacy>
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

.banner-bottom{
  position: fixed;
  bottom: 0px;
  width: 30%;
  left: 35%;
  background: $primary;
  line-height: 70px;
  z-index: 100000;
  color: $white;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.banner-bottom:hover{
  cursor: pointer;
  background: $warning;
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


@media screen and (max-width: 992px){
  .banner-bottom{
    width: 100%;
    left: 0%;
    font-size: 16px;
  }
}
</style>
<script>
import Header from 'src/components/frame/header.vue'
// import HeaderSticky from 'src/components/frame/headerSticky.vue'
import MyFooter from 'src/components/frame/footer.vue'
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
import Privacy from 'src/components/pages/privacy.vue'
import AboutPage from 'src/components/pages/about.vue'
import ROUTER from 'router'
export default {
  name: 'HelloWorld',
  mounted(){
    this.retrieve()
    COMMON.getBasic()
    // window.document.body.onscroll = function() {
    // }
    window.addEventListener('scroll', this.onScroll)
    this.$analytics.fbq.event('ViewContent', {
      content_name: 'Home Page'
    })
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
    MyFooter,
    Restaurant,
    Rooms,
    Packages,
    Booking,
    Testimonials,
    Faq,
    Gallery,
    ImageView,
    Privacy,
    AboutPage
    // HeaderSticky
  },
  methods: {
    redirect(route){
      Jquery('html, body').animate({
        scrollTop: Jquery('#top-view').offset().top
      }, 500)
      ROUTER.push(route)
    },
    scrollTo () {
      Jquery('html, body').animate({
        scrollTop: Jquery('#top-view').offset().top
      }, 500)
    },
    loadPage(height, top){
      let dev = top / height
      console.log(height + '/' + top + '/' + dev)
      if(dev > 5.5){
        COMMON.setLoad('#faq')
      }else if(dev > 4.5){
        COMMON.setLoad('#gallery')
      }else if(dev > 3.5){
        COMMON.setLoad('#testimonials')
      }else if(dev > 2.5){
        COMMON.setLoad('#restaurants')
      }else if(dev > 1.5){
        COMMON.setLoad('#packages')
      }else if(dev > .5){
        COMMON.setLoad('#rooms')
      }
    },
    onScroll(){
      var height = Jquery(window).height()
      var scrollTop = Jquery(window).scrollTop()
      this.loadPage(height, scrollTop)
      var vScroll = parseInt((scrollTop / height) * 100)
      if(vScroll >= 20){
        Jquery('.menu').css({
          position: 'fixed',
          'z-index': 10000,
          top: '0%',
          bottom: 'auto'
        })
        Jquery('.view-on-scroll').css({
          display: 'block'
        })
      }else{
        Jquery('.menu').css({
          position: 'absolute',
          'z-index': 0,
          bottom: '0%',
          top: 'auto'
        })
        Jquery('.view-on-scroll').css({
          display: 'none'
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
    scrollToByParams(id){
      this.$refs.header.scrollTo(id)
    },
    onGroupBooking(mode, type = null){
      this.$refs.inquire.mode = mode
      this.$refs.inquire.activeStep = 1
      this.$refs.inquire.type = type
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
      COMMON.announcements = []
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
        for (var i = 0; i < entries.length; i += 5) {
          if(i > 4){
            let object = {
              message: entries[i].content.$t,
              name: entries[i + 1].content.$t,
              country: entries[i + 2].content.$t,
              position: entries[i + 3].content.$t,
              country_code: entries[i + 4].content.$t
            }
            COMMON.testimonials.push(object)
          }
        }
      })
      Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/5/public/values?alt=json', response => {
        let entries = response.feed.entry
        for (var i = 0; i < entries.length; i += 9) {
          if(i > 8){
            let inclusions = entries[i + 3].content.$t
            let tempInclusions = inclusions !== null ? inclusions.split(',') : null
            let image = entries[i + 7].content.$t
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
              priceType: entries[i + 5].content.$t,
              priceInclusions: entries[i + 6].content.$t,
              images: imagesArray,
              type: entries[i + 8].content.$t
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
        for (var i = 0; i < entries.length; i+= 2) {
          if(i > 1){
            let image = entries[i].content.$t
            let object = {
              url: COMMON.host + 'img/' + image,
              caption: entries[i + 1].content.$t
            }
            COMMON.gallery.push(object)
          }
        }
      })
      Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/9/public/values?alt=json', response => {
        let entries = response.feed.entry
        let j = 0;
        for (var i = 0; i < entries.length; i += 2) {
          if(i > 1){
            let object = {
              type: entries[i].content.$t,
              title: entries[i + 1].content.$t,
              id: j++,
              flag: false
            }
            COMMON.addOns.push(object)
          }
        }
      })

      Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/12/public/values?alt=json', response => {
        let entries = response.feed.entry
        for (var i = 0; i < entries.length; i += 4) {
          if(i > 3){
            let object = {
              type: entries[i].content.$t,
              text: entries[i + 1].content.$t,
              url: COMMON.host + 'img/' + entries[i + 2].content.$t,
              link: entries[i + 3].content.$t
            }
            COMMON.announcements.push(object)
            setTimeout(() => {
              this.$refs.imageViewAnnouncements.setImage(0)  
            }, 1000)
          }
        }
      })
    }
  }
}
</script>