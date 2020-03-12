<template>
  <div class="header" id="home">
    <logo></logo>
    <div class="menu">
      <ul>
        <li>
          <font-awesome-icon v-for="(item, index) in common.socialIcons" :key="index" :icon="item.icon" @click="openExternal(item.url)" class="social-icons"></font-awesome-icon>
        </li>
        <li v-for="(item, index) in common.menus" :key="index" class="basic-menu" @click="scrollTo(item.redirect)">{{item.title}}</li>
      </ul>
      <button class="btn btn-warning">Book Your Room Now</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.header{
  width: 100%;
  float: left;
  height: 40vh;
  overflow-y: hidden;
  background: $primary;
  border-bottom: solid 5px $warning;
  position: relative;
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
  width: 80%;
}

ul li{
  float: left;
  text-transform: UPPERCASE;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 50px;
}

.basic-menu:hover{
  cursor: pointer;
  text-decoration: underline;
  color: $warning;
}

.btn{
  width: 20% !important;
  height: 60px !important;
  color: white !important;
}

.social-icons{
  margin: 5px;
  font-size: 200%;
}

.social-icons:hover{
  cursor: pointer;
  color: $warning;
}

.right-menu{
  background: $warning;
  float: right;
}
</style>
<script>
import COMMON from 'src/common.js'
import Jquery from 'jquery'
import Logo from 'src/components/generic/logo.vue'
export default {
  mounted(){
  },
  data(){
    return {
      common: COMMON
    }
  },
  components: {
    Logo
  },
  methods: {
    scrollTo (div) {
      Jquery('html, body').animate({
        scrollTop: Jquery(div).offset().top
      }, 500)
    },
    openExternal(url){
      window.open(url, '_BLANK')
    }
  }
}
</script>
