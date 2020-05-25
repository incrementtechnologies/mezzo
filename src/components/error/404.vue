<template>
  <div id="top-view">
    <!-- <Header id="header-menu" ref="header"></Header> -->
    <span class="page-holder">
      <logo class="hide-on-mobile"></logo>
      <span class="page-details text-center">
        <p class="text-white display-4">
          Error 404
        </p>
      </span>
    </span>
    <div class="blog-tiles">
      <div class="content">
        <h1 class="text-center text-danger">
          <font-awesome-icon :icon="faSadTear" class="plus-icon"></font-awesome-icon>
        </h1>
        <h1 class="text-center">
          Page not found.
        </h1>
      </div>
    </div>
    <MyFooter :property="'redirect'"></MyFooter>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

.text-primary{
  color: $primary !important;
}

.bg-primary{
}


.action-link:hover{
  cursor: pointer;
  color: $warning;
}

.page-holder{
  width: 100%;
  float: left;
  min-height: 100px;
  overflow: hidden;
  background: $primary !important;
}

.page-details{
  float: left;
  width: 100%;
}

p{
  margin-top: 20px;
}

.blog-tiles{
  width: 90%;
  float: left;
  min-height: 60vh;
  margin-bottom: 100px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 0px;
  display: table;
}

.blog-tiles .content{
  display: table-cell;
  vertical-align: middle;
}

.blog-item{
  width: 100%;
  float: left;
  min-height: 100px;
  overflow: hidden;
  margin-bottom: 25px;
}

.plus-icon{
  font-size: 100px;
}

@media screen and (max-width: 992px){
  img{
    height: 100%;
    width: 100%;
    float: left;
  }

  .blog-tiles{
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
}
</style>
<script>
// import Header from 'src/components/frame/header.vue'
import COMMON from 'src/common.js'
import Logo from 'src/components/generic/logo.vue'
import ROUTER from 'router'
import MyFooter from 'src/components/frame/footer.vue'
import Jquery from 'jquery'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
export default {
  mounted(){
    this.retrieve()
  },
  data(){
    return{
      common: COMMON,
      faSadTear: faSadTear
    }
  },
  components: {
    // Header,
    Logo,
    MyFooter
  },
  methods: {
    redirect(route){
      Jquery('html, body').animate({
        scrollTop: Jquery('#top-view').offset().top
      }, 500)
      ROUTER.push(route)
    },
    retrieve(){
      COMMON.getBasic()
    }
  }
}
</script>
