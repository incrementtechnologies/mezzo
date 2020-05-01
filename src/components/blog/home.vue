<template>
  <div>
    <!-- <Header id="header-menu" ref="header"></Header> -->
    <span class="page-holder">
      <logo class="hide-on-mobile"></logo>
      <span class="page-details text-center">
        <p class="text-white display-4">
          Welcome to Mezzo Hotel Press Room
        </p>
      </span>
    </span>
    <div class="blog-tiles">
      <span class="blog-item" v-for="(item, index) in common.blogs" :key="index" @click="redirect('/content-viewer/' + item.title.split(' ').join('_'))">
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
    <Footer :property="'redirect'"></Footer>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

.text-primary{
  color: $primary !important;
}

.bg-primary{
}

.page-holder{
  width: 100%;
  float: left;
  height: 300px;
  overflow: hidden;
  background: $primary !important;
}

.page-details{
  float: left;
  height: 300px;
  width: 100%;
}

p{
  margin-top: 25px;
}

.blog-tiles{
  width: 90%;
  float: left;
  min-height: 200px;
  margin-bottom: 100px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 25px;
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
  height: 300px;
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
}
</style>
<script>
// import Header from 'src/components/frame/header.vue'
import COMMON from 'src/common.js'
import Logo from 'src/components/generic/logo.vue'
import ROUTER from 'router'
import Footer from 'src/components/frame/footer.vue'
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
    Footer
  },
  methods: {
    redirect(route){
      ROUTER.push(route)
    },
    retrieve(){
      COMMON.getBlog()
      COMMON.getBasic()
    }
  }
}
</script>
