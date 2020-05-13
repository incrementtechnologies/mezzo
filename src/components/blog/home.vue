<template>
  <div id="top-view">
    <!-- <Header id="header-menu" ref="header"></Header> -->
    <span class="page-holder">
      <logo class="hide-on-mobile"></logo>
      <span class="page-details text-center">
        <p class="text-white display-4">
          Press Room
        </p>
      </span>
    </span>
    <div class="blog-tiles">
      <p>
        <button class="btn btn-warning" @click="redirect('/')">Home</button>
      </p>
      <span class="blog-item" v-for="(item, index) in common.blogs" :key="index" @click="checkRoute(item)">
        <span class="image-holder">
          <img :src="item.image">
        </span>
        <span class="details">
          <h3>
            {{item.title}}
          </h3>
          Published by <b>{{item.author}}</b> on {{item.date}}
          <br>
          <label v-html="item.introduction"></label>
        </span>
      </span>
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
  min-height: 300px;
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
  min-height: 200px;
  margin-bottom: 100px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 0px;
}

.blog-item{
  width: 100%;
  float: left;
  min-height: 100px;
  overflow: hidden;
  margin-bottom: 25px;
}

.blog-item:hover{
  cursor: pointer;
  border-bottom: solid 1px $warning;
  img{
    opacity: 0.5;
    background: #000;
  }
}

.image-holder{
  min-height: 100px;
  width: 40%;
  float: left;
  overflow: hidden;
}

.image-holder img{
  height: auto;
  width: 100%;
  float: left;
}

.blog-item .details{
  padding-left: 25px;
  padding-bottom: 25px;
  padding-right: 25px;
  float: left;
  width: 60%;
  height: 300px;
  overflow: hidden;
  text-align: justify;
}

.details label{
  width: 100%;
  margin-top: 25px;
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

  .image-holder{
    width: 100%;
  }

  .blog-item .details{
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
    margin-top: 25px;
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
export default {
  mounted(){
    this.retrieve()
  },
  data(){
    return{
      common: COMMON
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
      COMMON.getBlog()
      COMMON.getBasic()
    },
    checkRoute(item){
      if(item.type === 'external'){
        window.open(item.content)
      }else{
        this.redirect('/press-room/viewer/' + item.title.split(' ').join('_'))
      }
    }
  }
}
</script>
