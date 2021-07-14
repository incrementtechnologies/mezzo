<template>
  <div class="header" id="home">
    <img :src="common.api + 'logo.png'" style="height: 6vh; width: auto; left: 10px; top: 2vh" class="mobile-menu-icon">
    <logo class="hide-on-mobile"></logo>
    <font-awesome-icon :icon="flag === false ? faBars : faTimes" class="mobile-menu-icon" @click="toggle()"></font-awesome-icon>
    <ul class="mobile-menu">
      <li v-for="(item, index) in common.menus" :key="index" :class="{'active-menu': common.activeMenu === item.redirect}" @click="scrollTo(item.redirect)" data-toggle="collapse" data-target="#myNavbar">
        <a data-toggle="collapse" data-target="#myNavbar">{{item.title}}</a>
      </li>
    </ul>
    <!-- <ul class="mobile-social-icon">
      <li v-for="(item, index) in common.socialIcons" :key="index" @click="openExternal(item.url)">
        <font-awesome-icon :icon="item.icon" class="social-icons"></font-awesome-icon>
      </li>
    </ul> -->
    <div class="menu">
      <ul>
        <li class="view-on-scroll" @click="scrollTo('#top-view')">
          <img :src="common.api + 'logo.png'" style="height: 6vh; width: auto; left: 10px; top: 2vh"> 
        </li>
        <li v-for="(item, index) in common.menus" :key="index" class="basic-menu" @click="scrollTo(item.redirect)" :class="{'active-menu': common.activeMenu === item.redirect}">{{item.title}}</li>
      </ul>
      <span class="social-icons-holder">
        <font-awesome-icon :icon="item.icon" class="social-icons" v-for="(item, index) in common.socialIcons" :key="index" @click="openExternalSites(item.url)"></font-awesome-icon>
      </span>
      <button class="btn btn-warning" @click="openExternal(common.booking_link, false)">BOOK A ROOM</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.header{
  width: 100%;
  float: left;
  min-height: 27vh;
  background: $primary;
  border-bottom: solid 5px $warning;
  position: relative;
}

.mobile-menu-icon{
  display: none;
}

.mobile-menu{
  position: absolute;
  height: 100vh;
  z-index: 9000;
  top: 0;
  left: 0;
  display: none;
  background: rgba(0, 0, 51, 0.9);
  width: 100%;
  min-height: 50px;
}

.mobile-menu li{
  width: 100%;
  float: left;
}

.menu{
  position: absolute;
  width: 100%;
  left: 0%;
  background: $primary;
  height: $height;
  top: auto;
  bottom: 0%;
}

ul{
  margin: 0px;
  padding: 0px;
  color: white;
  list-style: none;
  float: left;
  width: 70%;
}

ul li{
  float: left;
  text-transform: UPPERCASE;
  padding-left: 20px;
  padding-right: 20px;
  line-height: $height;
}

.basic-menu:hover{
  cursor: pointer;
  background: $warning;
  color: $white;
}

.active-menu{
  background: $warning;
  color: $white; 
}

.btn{
  width: 20% !important;
  color: white !important;
}

.social-icons-holder{
  width: 10%;
  float: left;
  margin-top: 1vh;
}

.social-icons{
  margin: 5px;
  font-size: 3.5vh;
  color: #fff;
  float: right;
}

.social-icons:hover{
  cursor: pointer;
  color: $warning;
}

.right-menu{
  background: $warning;
  float: right;
}

.mobile-social-icon{
  width: 50px;
  min-height: 50px;
  position: fixed;
  left: 10px;
  top: 40vh;
  z-index: 8000;
  overflow-y: hidden;
  padding-top: 0px;
  display: none;
  background: white;
}

.mobile-social-icon li{
  width: 100%;
  float: left;
  height: 50px;
  color: $primary;
  padding-left: 0px;
  margin-left: 0px;
  text-align: center;
  padding-right: 0px;
}

.hide-on-mobile{
  display: block;
}

.view-on-scroll{
  display: none;
}

.view-on-scroll:hover{
  cursor: pointer;
}


@media screen and (max-width: 1024px){
  .header{
    min-height: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
  }
  .navbar-header{
    display: block;
  }
  .menu{
    display: none;
  }

  .btn{
    width: 90% !important;
    margin-left: 5%;
    display: none;
  }
  ul{
    padding-top: 60px;
  }
  .mobile-menu-icon{
    display: block;
    color: white;
    font-size: 5vh;
    position: absolute;
    right: 25px;
    top: 2vh;
    z-index: 10000;
  }

  .social-icons{
    margin: 0px;
    margin-top: 10px;
    color: $primary;
    float: none;
  }

  .mobile-social-icon{
    display: block;
  }

  .hide-on-mobile{
    display: none;
  }
}

@media screen and (max-width: 992px){
  .header{
    min-height: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
  }
  .navbar-header{
    display: block;
  }
  .menu{
    display: none;
  }

  .btn{
    width: 90% !important;
    margin-left: 5%;
    display: none;
  }
  ul{
    padding-top: 60px;
  }
  .mobile-menu-icon{
    display: block;
    color: white;
    font-size: 5vh;
    position: absolute;
    right: 25px;
    top: 2vh;
    z-index: 10000;
  }

  .social-icons{
    margin: 0px;
    margin-top: 10px;
    color: $primary;
    float: none;
  }

  .mobile-social-icon{
    display: block;
  }

  .hide-on-mobile{
    display: none;
  }
}
</style>
<script>
import COMMON from 'src/common.js'
import ROUTER from 'router'
import Jquery from 'jquery'
import Logo from 'src/components/generic/logo.vue'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Packages from 'src/components/pages/inquire.vue'
export default {
  mounted(){
    // window.document.body.onscroll = function() {
    //   var height = Jquery(window).height()
    //   var scrollTop = Jquery(window).scrollTop()
    //   var vScroll = parseInt((scrollTop / height) * 100)
    //   if(vScroll > 40){
    //     Jquery('.menu').css({position: 'absolute', 'z-index': 0})
    //   }else{
    //     Jquery('.menu').css({position: 'fixed', 'z-index': 10000})
    //   }
    // }
  },
  data(){
    return {
      common: COMMON,
      faBars: faBars,
      faTimes: faTimes,
      flag: false
    }
  },
  components: {
    Logo
  },
  methods: {
    redirect(route){
      ROUTER.push(route)
    },
    scrollTo (div) {
      this.$analytics.fbq.event('ViewContent', {
        content_name: div
      })
      COMMON.setLoad(div)
      this.common.activeMenu = div
      setTimeout(() => {
        if(div.charAt(0) === '/'){
          this.redirect(div)
        }else{
          var height = Jquery(window).height()
          Jquery('html, body').animate({
            scrollTop: Jquery(div).offset().top - parseInt(height * 0.07)
          }, 400)
        }
      }, 100)
      this.flag = false
      Jquery('.mobile-menu').css({display: 'none'})
    },
    openExternal(url, flag){
      if(flag == false){
        Packages.methods.inquireRoom(null);
      }else{
        this.$analytics.fbq.event('InitialCheckout', {
          content_name: 'Direct Booking'
        })
        window.open(url, '_BLANK')
      }
    },
    openExternalSites(url){
      this.$analytics.fbq.event('ViewContent', {
        content_name: url
      })
      window.open(url, '_BLANK')
    },
    toggle(){
      if(this.flag === false){
        this.flag = true
        Jquery('.mobile-menu').css({display: 'block'})
      }else{
        this.flag = false
        Jquery('.mobile-menu').css({display: 'none'})
      }
    }
  }
}
</script>
