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
import COMMON from 'src/common.js'
export default {
  name: 'HelloWorld',
  mounted(){
    this.retrieve()
  },
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
    },
    retrieve(){
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
        for (var i = 0; i < entries.length; i += 3) {
          if(i > 2){
            let object = {
              title: entries[i].content.$t,
              image: entries[i + 1].content.$t,
              action: entries[i + 2].content.$t
            }
            COMMON.packages.push(object)
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
        for (var i = 0; i < entries.length; i += 6) {
          if(i > 5){
            let inclusions = entries[i + 2].content.$t
            let tempInclusions = inclusions !== null ? inclusions.split(',') : null
            let image = entries[i + 5].content.$t
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
              title: entries[i].content.$t,
              description: entries[i + 1].content.$t,
              inclusions: inclusionsArray,
              price: entries[i + 3].content.$t,
              priceInclusions: entries[i + 4].content.$t,
              images: imagesArray
            }
            COMMON.rooms.push(object)
          }
        }
      })
      Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/6/public/values?alt=json', response => {
        let entries = response.feed.entry
        for (var i = 0; i < entries.length; i += 4) {
          if(i > 3){
            let inclusions = entries[i + 2].content.$t
            let tempInclusions = inclusions !== null ? inclusions.split(',') : null
            let image = entries[i + 3].content.$t
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
              title: entries[i].content.$t,
              description: entries[i + 1].content.$t,
              inclusions: inclusionsArray,
              images: imagesArray
            }
            COMMON.restaurants.push(object)
          }
        }
      })
    }
  }
}
</script>
