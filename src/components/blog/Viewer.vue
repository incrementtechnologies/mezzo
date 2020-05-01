<template>
  <div>
    <!-- <Header id="header-menu" ref="header"></Header> -->
    <span class="page-holder">
      <logo class="hide-on-mobile"></logo>
    </span>
    <span v-if="selected !== null">
      <div class="blog-tiles">
        <p>
          <button class="btn btn-warning" @click="redirect('/')">Home</button>
          <button class="btn btn-warning" @click="redirect('/press-room')" style="margin-left: 10px; margin-right: 10px;">Blog</button>
          {{selected.title}}
        </p>
        <span class="blog-item">
          <span class="image-holder">
            <img :src="selected.image">
          </span>
          <span class="details">
            <h3 style="margin-top: 25px;">
              {{selected.title}}
            </h3>
            Published by <b>{{selected.author}}</b> on {{selected.date}}
            <br>
            <label v-html="selected.content"></label>
          </span>
        </span>
      </div>
    </span>
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
  height: 300px;
  width: 100%;
}

p{
  margin-top: 25px;
}

.blog-tiles{
  width: 70%;
  float: left;
  min-height: 200px;
  margin-bottom: 100px;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 25px;
}

.blog-item{
  width: 100%;
  float: left;
  min-height: 100px;
  overflow: hidden;
  margin-bottom: 25px;
}

.image-holder{
  min-height: 100px;
  width: 100%;
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
  padding-bottom: 50px;
  padding-right: 25px;
  float: left;
  width: 100%;
  min-height: 50px;
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
    margin-right: 5%;
    margin-left: 5%;
  }

  .blog-item .details{
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
<script>
// import Header from 'src/components/frame/header.vue'
import COMMON from 'src/common.js'
import Logo from 'src/components/generic/logo.vue'
import MyFooter from 'src/components/frame/footer.vue'
import ROUTER from 'router'
export default {
  mounted(){
    COMMON.getBasic()
    COMMON.getBlog()
  },
  computed: {
    selected(){
      let result = COMMON.blogs
      if(COMMON.blogs.length > 0){
        result = COMMON.blogs.filter(item => 
          item.title.includes(this.$route.params.title.split('_').join(' '))
        )
      }
      return result ? result[0] : null
    }
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
    redirect(params){
      ROUTER.push(params)
    }
  }
}
</script>
