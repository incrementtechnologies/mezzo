<template>
  <div v-if="selected !== null && selected !== undefined">
    <!-- <Header id="header-menu" ref="header"></Header> -->
    <span class="page-holder">
      <logo class="hide-on-mobile"></logo>
    </span>
    <tlSearchFormInner></tlSearchFormInner>
    <span>
      <div class="blog-tiles">
        <p>
          <button class="btn btn-warning" @click="redirect('/')">Home</button>
          <button class="btn btn-warning" @click="redirect('/press-room')" style="margin-left: 10px; margin-right: 10px;">Press Room</button>
          {{selected.title}}
        </p>
        <span class="blog-item">
          <span class="image-holder" v-if="selected.type === 'internal'">
            <img :src="selected.image">
          </span>
          <span class="video-holder" v-if="selected.type === 'internal_video'" v-html="selected.image">
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
  <span class="loading text-center" v-else-if="loading === true">
    <font-awesome-icon :icon="faCircleNotch" class="fa-spin"></font-awesome-icon>
  </span>
  <NotFound v-else></NotFound>
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
  margin-top: 20px;
}

.blog-tiles{
  width: 70%;
  float: left;
  min-height: 200px;
  margin-bottom: 100px;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 0px;
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
  text-align: center;
}

.yt-video{
  width:  100vw;
  height: 60vw; /* 90*9/16 */
}

.video-holder{
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 60vh;
  overflow: hidden;
}

.video-holder iframe, .video-holder object, .video-holder embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.image-holder img{
  height: 100%;
  width: auto;
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

.loading{
  font-size: 75px;
  width: 100%;
  color: $warning;
  text-align: center;
  height: 100vh;
  float: left;
}

.fa-spin{
  animation-duration: 0.50s;
  margin-top: 40vh;
}

@media screen and (max-width: 992px){
  img{
    height: 100% !important;
    width: 100% !important;
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
import NotFound from 'src/components/error/404.vue'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import ROUTER from 'router'
import Jquery from 'jquery'
import Config from 'src/config.js'
import tlSearchFormInner from "src/components/tlForms/tlSearchFormInner/tlSearchFormInner.vue";
export default {
  mounted(){
    COMMON.getBasic()
    this.getBlog()
  },
  data(){
    return{
      common: COMMON,
      loading: false,
      faCircleNotch: faCircleNotch,
      selected: null
    }
  },
  components: {
    // Header,
    Logo,
    MyFooter,
    NotFound,
    tlSearchFormInner
  },
  methods: {
    redirect(params){
      ROUTER.push(params)
    },
    async getBlog(){
      this.loading = true
      this.$analytics.fbq.event('ViewContent', {
        content_name: this.$route.params.title.split('_').join(' ')
      })
      const { GoogleSpreadsheet } = require('google-spreadsheet')
      const doc = new GoogleSpreadsheet(Config.googleSheetId)
      await doc.useServiceAccountAuth({
        client_email: Config.google.client_email,
        private_key: Config.google.private_key,
      })
      await doc.loadInfo()
      const blogs = doc.sheetsByIndex[10]
      let blogsRows = await blogs.getRows()
      for (var i = 0; i < blogsRows.length; i++) {
        let item = blogsRows[i]
        let object = {
          type: item.type,
          title: item.title,
          image: item.type === 'internal_video' ? item.featured_image : this.common.host + 'img/' + item.featured_image,
          date: item.date,
          author: item.author,
          introduction: item.introduction,
          content: item.content,
        }
        if(object.title.includes(this.$route.params.title.split('_').join(' '))){
          this.selected = object
          this.loading = false
          break
        }
      }
      if(this.selected == null){
        this.loading = false  
      }
      // Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/11/public/values?alt=json', response => {
      //   let entries = response.feed.entry
      //   for (var i = 0; i < entries.length; i += 7) {
      //     if(i > 6){
      //       let object = {
      //         type: entries[i].content.$t,
      //         title: entries[i + 1].content.$t,
      //         image: entries[i].content.$t === 'internal_video'? entries[i + 2].content.$t : this.common.host + 'img/' + entries[i + 2].content.$t,
      //         date: entries[i + 3].content.$t,
      //         author: entries[i + 4].content.$t,
      //         introduction: entries[i + 5].content.$t,
      //         content: entries[i + 6].content.$t,
      //       }
      //       if(object.title.includes(this.$route.params.title.split('_').join(' '))){
      //         this.selected = object
      //         this.loading = false
      //         break  
      //       }
      //     }
      //   }
      //   this.loading = false
      // })
    },
    manageSearch(){
      let result = COMMON.blogs
      if(COMMON.blogs.length > 0){
        result = COMMON.blogs.filter(item => 
          item.title.includes(this.$route.params.title.split('_').join(' '))
        )
      }
      this.selected = result ? result[0] : null
      this.loading = false
    }
  }
}
</script>
