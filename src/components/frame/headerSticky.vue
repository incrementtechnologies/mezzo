<template>
  <div class="header" id="home">
    <img :src="common.api + 'logo.png'" style="height: 6vh; width: auto; left: 10px; top: 2vh" class="mobile-menu-icon">
    <font-awesome-icon :icon="flag === false ? faBars : faTimes" class="mobile-menu-icon" @click="toggle()"></font-awesome-icon>
    <ul class="mobile-menu">
      <li v-for="(item, index) in common.menus" :key="index">
        <a @click="scrollTo(item.redirect)" data-toggle="collapse" data-target="#myNavbar">{{item.title}}</a>
      </li>
    </ul>
    <ul class="mobile-social-icon">
      <li v-for="(item, index) in common.socialIcons" :key="index" @click="openExternal(item.url)">
        <font-awesome-icon :icon="item.icon" class="social-icons"></font-awesome-icon>
      </li>
    </ul>
    <div class="menu">
      <ul>
        <li>
          <img :src="common.api + 'logo.png'" style="height: 6vh; width: auto;">
        </li>
        <!-- <li>
          <font-awesome-icon v-for="(item, index) in common.socialIcons" :key="index" :icon="item.icon" @click="openExternal(item.url)" class="social-icons"></font-awesome-icon>
        </li> -->
        <li v-for="(item, index) in common.menus" :key="index" class="basic-menu" @click="scrollTo(item.redirect)">{{item.title}}</li>
      </ul>

      <span class="social-icons-holder">
        <font-awesome-icon :icon="item.icon" class="social-icons" v-for="(item, index) in common.socialIcons" :key="index" @click="openExternal(item.url)"></font-awesome-icon>
      </span>
      <button class="btn btn-warning" @click="redirect('/booking')">Book Your Room Now</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.header{
  width: 100%;
  float: left;
  height: 10vh;
  background: $primary;
  border-bottom: solid 5px $warning;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
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
}

.mobile-menu li{
  width: 100%;
  float: left;
}

.menu{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
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
  line-height: 10vh;
}

.basic-menu:hover{
  cursor: pointer;
  text-decoration: underline;
  color: $warning;
}

.btn{
  width: 20% !important;
  height: 10vh !important;
  color: white !important;
}

.social-icons-holder{
  width: 10%;
  float: left;
  margin-top: 2vh;
}

.social-icons{
  margin: 5px;
  font-size: 5vh;
  font-size: 200%;
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
  background: white;
  display: none;
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

@media screen and (max-width: 992px){
  .header{
    min-height: 10vh;
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
    font-size: 32px;
    position: absolute;
    right: 25px;
    top: 25px;
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
}
</style>
<script>
import COMMON from 'src/common.js'
import ROUTER from 'router'
import Jquery from 'jquery'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
export default {
  mounted(){
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
  },
  methods: {
    redirect(route){
      ROUTER.push(route)
    },
    scrollTo (div) {
      var height = Jquery(window).height()
      Jquery('html, body').animate({
        scrollTop: Jquery(div).offset().top - parseInt(height * 0.1)
      }, 500)
      this.flag = false
      Jquery('.mobile-menu').css({display: 'none'})
    },
    openExternal(url){
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
