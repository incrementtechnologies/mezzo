<template>
  <footer>
    <div class="footer">
      <logo class="logo"></logo>
      <ul>
        <li>
          <!-- <span>Phone</span> -->
          <b>
            <a :href="'tel:' + common.APP_PHONE_NUMBER" style="color: #fff;">
              <font-awesome-icon :icon="faPhoneAlt" class="social-icons"></font-awesome-icon>
              {{common.APP_PHONE_NUMBER}}
            </a>
          </b>
        </li>

        <li>
          <!-- <span>Address</span> -->
          <span @click="$refs.mapModal.showModal()" class="action-link">
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
              <a :href="'mailto:' + common.APP_EMAIL + '?Subject=INQUIRE'" target="_top" style="color: #fff;">
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
      </span>
      <span class="copyright">
        <label>
          <font-awesome-icon :icon="faCopyright" class="social-icons"></font-awesome-icon>
          {{common.APP_COPYRIGHT}}. All rights reserved. This site was made by <b @click="openExternal(common.APP_DEVELOPER_URL)">{{common.APP_DEVELOPER}}</b>
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
  margin-top: 45px;
  color: #6f6f6f !important;
  bottom: 25px;
  left: 0;
  position: absolute;
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

.menu-holder{
  float: left;
  width: 25%;
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
    margin-bottom: 200px;
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
}
</style>
<script>
import COMMON from 'src/common.js'
import Logo from 'src/components/generic/logo.vue'
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
        title: 'About Mezzo',
        subMenu: [{
          title: 'Home',
          type: 'scroll',
          route: '#top-view'
        }]
      }, {
        title: 'Links',
        subMenu: [{
          title: 'Privacy Notice',
          type: 'modal',
          route: '#privacyModal'
        }]
      }]
    }
  },
  components: {
    Logo,
    GoogleMapModal
  },
  methods: {
    openExternal(url){
      window.open(url, '_BLANK')
    },
    redirect(item){
      switch(item.type){
        case 'scroll':
          this.$parent.scrollTo()
          break
        case 'modal':
          Jquery(item.route).modal('show')
          break
      }
    }
  }
}
</script>
