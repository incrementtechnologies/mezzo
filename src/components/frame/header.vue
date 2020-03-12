<template>
  <div class="header" id="home">
    <div class="header-section">
      <span class="logo">
        <a class="navbar-brand" v-on:click="scrollTo('#home')">
          <img class="header-logo" src="@/assets/logomofficial.png" />
          <label class="header-appname">{{common.APP_NAME}}</label>
          <label class="header-slogan">LUXURY HOTEL</label>
        </a>
      </span>
      <span class="menu">
        <span class="navbar-menu-toggler-md">
          <i class="fa fa-bars" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onclick="void(0)"></i>
        </span>
        <ul class="header-primary-menu">
          <li class="nav-item" v-on:click="scrollTo('#home')"><a class="nav-link">HOME</a></li>
          <li class="nav-item" v-on:click="scrollTo('#rooms')"><a class="nav-link">ROOMS</a></li>
          <li class="nav-item" v-on:click="scrollTo('#packages')"><a class="nav-link">PACKAGES</a></li>
          <li class="nav-item" v-on:click="scrollTo('#restaurant')"><a class="nav-link">RESTAURANT</a></li>
        </ul>
      <span>
        <label class="header-book">Book Your Room Now!</label>
      </span>
      </span>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-on:click="scrollTo('#body')" data-toggle="collapse" data-target="#navbarSupportedContent"><a class="nav-link">Restaurant</a></li>
        <li class="nav-item" v-on:click="scrollTo('#home')" data-toggle="collapse" data-target="#navbarSupportedContent"><a class="nav-link">Home</a></li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.header{
  width: 100%;
  height: 280px;
  float: left;
  min-height: 100px;
  overflow-y: hidden;
  background: #000033;
}
.header-section{
  overflow-y: hidden;
  width: 90%;
  font-size: 12px;
  color: #fff;
  margin: 5px auto 5px auto;
  height: 100%;
}
.header-book{
  float: right;
  height: 28px;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  left: 0;
  right: 0;
  margin-top: 150px;
}
.header-label{
  float: right;
  font-size: 25px;
}
.navbar-menu-toggler-md{
  width: 100%;
  text-align: right;
  float: left;
  display: none;
}
.menu .header-primary-menu{
  width: 45%;
  float: left;
  min-height: 30px;
  list-style: none;
  padding: 0px;
  margin-bottom: 0px !important;
}
.btn-white{
  background: #fff;
  color: #00bff3 !important;
}
.fa-bars{
  border: solid 1px #fff;
  font-size: 20px !important;
  padding: 10px 8px 10px 8px !important;
  color: #fff !important;
}

.fa-bars:hover{
  cursor: pointer;
}
.header-slogan{
  position: absolute;
  height: 28px;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  left: 0;
  right: 0;
  margin-top: 40px;
}
.header-appname{
  position: absolute;
  height: 42px;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  left: 0;
  right: 0;
}
.nav-item{
  height: 28px;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  left: 0;
  right: 0;
}
.menu .header-primary-menu .nav-item{
  float: left;
  margin-top: 150px;
}

.header-primary-menu .nav-item .nav-link{
  padding: .5rem;
}
.header-primary-menu .nav-item a{
  /*color: #fff;
  font-family: MuseoRounded700, sans-serif;*/
}
.header-logo{
  width: 15%;
}
.header-primary-menu .nav-item .nav-link:hover{
  cursor: pointer;
  text-decoration: underline;
}
.navbar-toggler{
  background: inherit !important;
  border-radius: 0px !important;
  border: solid 1px #fff;
  font-size: 20px !important;
  padding: 10px 8px 10px 8px !important;
  color: #fff !important;
}
.navbar-toggler:hover{
  color: #00bff3 !important;
  background: #fff !important;
}

.navbar-collapse .show{
  display: none !important;
}

@media screen and (max-width: 992px){
  .header-section{
    width: 90% !important;
    margin: 0 5% 0 5% !important;
  }
  .header-section{
    width: 80%;
    margin-top: 10px;
  }
  .header-section  .menu{
    width: 20%;
    margin-top: 15px;
  }
  .menu .top-menu, .menu .header-primary-menu{
    display: none;
  }

  .navbar{
    width: 90% !important;
    margin: 0 5% 0 5% !important;
    padding: 0 !important;
  }
  .navbar-collapse {
    width: 100% !important;
    position: absolute !important;
    z-index: 100000 !important;
    float: left;
    border-bottom: solid 1px #00bff3;
  }
  .navbar-nav{
    background: #fff !important;
    margin: 0 !important;
  }
  .navbar-nav .nav-link{
    width: 100% !important;
    padding: 17px 30px 17px 30px !important;
  }

  .navbar-nav .nav-link:hover{
    background: #00bff3;
    color: #fff;
  }

  .navbar-nav .nav-link{
    color: #00bff3;
  }
  .navbar-menu-toggler-md{
    width: 100%;
    text-align: right;
    float: left;
    display: block ;
  }
}

</style>
<script>
import COMMON from 'src/common.js'
import Jquery from 'jquery'
export default {
  mounted(){
  },
  data(){
    return {
      common: COMMON
    }
  },
  methods: {
    scrollTo (div) {
      Jquery('html, body').animate({
        scrollTop: Jquery(div).offset().top
      }, 1000)
    }
  }
}
</script>
