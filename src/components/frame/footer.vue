<template>
  <footer>
    <div class="footer">
      <logo class="logo"></logo>
      <ul>
        <li>
          <!-- <span>Phone</span> -->
          <b>
            <a :href="'tel:' + common.APP_PHONE_NUMBER" style="color: #fff;" @click="contact('Click phone number')">
              <font-awesome-icon :icon="faPhoneAlt" class="social-icons"></font-awesome-icon>
              {{common.APP_PHONE_NUMBER}}
            </a>
          </b>
        </li>

        <li>
          <!-- <span>Address</span> -->
          <span @click="showModal()" class="action-link">
            <b>
              <font-awesome-icon :icon="faMapMarker" class="social-icons"></font-awesome-icon>
              {{common.address}}
            </b>
          </span>
        </li>

        <li>
          <!-- <span>E-mail</span> -->
          <span>
            <b>
              <a :href="'mailto:' + common.APP_EMAIL + '?Subject=INQUIRE'" target="_top" style="color: #fff;" @click="contact('Click email')">
                <font-awesome-icon :icon="faEnvelope" class="social-icons"></font-awesome-icon>
                {{common.APP_EMAIL}}
              </a>
            </b>
          </span>
        </li>
      </ul>
      <span class="menus">
        <span class="menu-holder" v-for="(item, index) in menus" :key="index">
          <span class="title">{{item.title}}</span>
          <span class="item action-link" v-for="(sItem, sIndex) in item.subMenu" :key="sIndex" @click="redirect(sItem)">
            {{sItem.title}}
          </span>
        </span>
        <span class="menu-holder subscribe">
          <subscribe></subscribe>
        </span>
      </span>
      <span class="footer-content">
        <Certificate></Certificate>
      </span>
      <span class="copyright">
        <label>
          <font-awesome-icon :icon="faCopyright" class="social-icons"></font-awesome-icon>
          {{common.APP_COPYRIGHT}}. All rights reserved. <!-- This site was made by <b @click="openExternal(common.APP_DEVELOPER_URL)">{{common.APP_DEVELOPER}}</b> -->
        </label>
      </span>
    </div>
    <GoogleMapModal ref="mapModal" :place_data="places" :propStyle="propStyle"></GoogleMapModal>
  </footer>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
footer {
  width:100%;
  min-height: 75vh;
  float: left;
  overflow-y: hidden;
  background: $primary;
  border-top: solid 5px $warning;
  position: relative;
}
.footer{
  width: 100%;
  float: left;
  min-height: 50px;
  overflow-y: hidden;
}

ul{
  list-style: none;
  width: 100%;
  float: left;
  color: white;
  margin: 0px;
  padding: 0px;
}

ul li{
  width: 33%;
  float: left;
  text-align: center;
}

ul li span{
  width: 100%;
  float: left;
}

.copyright{
  width: 100%;
  float: left;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  color: #6f6f6f !important;
  bottom: 25px;
  left: 0;
  position: relative;
  margin-top: 200px;
}

b:hover, a:hover{
  color: $warning !important;
}

.action-link:hover{
  cursor: pointer;
  text-decoration: underline;
  color: $warning;
}

.logo{
  width: 100%;
  float: left;
  margin-bottom: 50px;
}

.menus{
  width: 80%;
  float: left;
  color: $white;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 50px;
}


.footer-content{
  width: 80%;
  float: left;
  color: $white;
  margin-left: 10%;
  margin-right: 10%;
}

.menu-holder{
  float: left;
  width: 25%;
}

.subscribe{
  width: 50%;
}

.menu-holder span{
  width: 100%;
  float: left;
}

.menu-holder .title{
  font-weight: bold;
}


@media screen and (max-width: 992px){
  .footer-widget{
    width: 100%;
    text-align: center;
    margin-right: 0%;
    padding: 0px;
  }
  ul{
    width: 96%;
    margin-right: 2%;
    margin-left: 2%;
  }
  ul li {
    width: 100%;
    margin-top: 25px;
  }

  .logo{
    margin-bottom: 0px;
  }


  .menus{
    margin-top: 25px;
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
  }
  .menu-holder{
    width: 100%;
  }

  .menu-holder span{
    text-align: center;
    margin-top: 25px;
  }
  .copyright{
  }
  .subscribe{
    width: 100%;
    margin-top: 50px;
  }
  .certificate{
    width: 100%;
    margin-top: 50px;
  }
}
</style>
<script>
import COMMON from 'src/common.js'
import ROUTER from 'src/router'
import Logo from 'src/components/generic/logo.vue'
import Certificate from 'src/components/generic/certificate.vue'
import Subscribe from 'src/components/generic/subscribeStandard.vue'
import { faCopyright, faEnvelope, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import GoogleMapModal from 'src/components/increment/generic/map/ModalGeneric.vue'
import Jquery from 'jquery'
export default {
  mounted(){
  },
  data(){
    return{
      common: COMMON,
      faCopyright: faCopyright,
      faEnvelope: faEnvelope,
      faMapMarker: faMapMarker,
      faPhoneAlt: faPhoneAlt,
      places: [{
        longitude: 123.913968,
        latitude: 10.321886,
        route: 'Mezzo Hotel',
        locality: 'F. Cabahug, Pres. Quezon St, Cebu City, 6000 Cebu',
        country: 'Philippines'
      }],
      propStyle: {
        'margin-top': '10vh !important;'
      },
      menus: [{
        title: 'Mezzo',
        subMenu: [{
          title: 'Home',
          type: 'scroll',
          route: '#top-view'
        }]
      }, {
        title: 'Links',
        subMenu: [{
          title: 'Privacy Notice',
          type: 'redirect',
          route: '/privacy-policy'
        }, {
          title: 'Inquiry Form',
          type: 'inquire',
          route: '#packages'
        }, {
          title: 'Press Room',
          type: 'redirect',
          route: '/press-room'
        }]
      }]
    }
  },
  components: {
    Logo,
    GoogleMapModal,
    Subscribe,
    Certificate
  },
  props: ['property'],
  methods: {
    openExternal(url){
      window.open(url, '_BLANK')
    },
    showModal(){
      this.$analytics.fbq.event('FindLocation', {
        content_name: 'Checking location'
      })
      this.$refs.mapModal.showModal()
    },
    contact(params){
      this.$analytics.fbq.event('Contact', {
        content_name: params
      })
    },
    redirect(item){
      switch(item.type){
        case 'scroll':
          if(this.property === 'scroll'){
            this.$parent.scrollToByParams(item.route)
          }else{
            ROUTER.push('/')
          }
          break
        case 'modal':
          if(this.property === 'scroll'){
            Jquery(item.route).modal('show')
          }else{
            ROUTER.push('/')
          }
          break
        case 'inquire':
          this.$analytics.fbq.event('ViewContent', {
            content_name: 'General Inquiry'
          })
          this.$parent.onGroupBooking('others', 'General Inquiry')
          break
        case 'redirect':
          // this.$parent.scrollToByParams('#top-view')
          window.scrollTo(0, 0)
          ROUTER.push(item.route)
          // ROUTER.go('/')
          break
      }
    }
  }
}
</script>
