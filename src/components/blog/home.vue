<template>
  <div id="top-view">
    <!-- <Header id="header-menu" ref="header"></Header> -->
    <span class="page-holder">
      <logo class="hide-on-mobile"></logo>
      <span class="page-details text-center">
        <p class="text-white display-4">Press Room</p>
      </span>
    </span>
    <beSearchFormInner></beSearchFormInner>
    <div class="blog-tiles">
      <p>
        <button class="btn btn-warning" @click="redirect('/')">Home</button>
      </p>
      <span
        class="blog-item"
        v-for="(item, index) in common.blogs"
        :key="index"
        @click="checkRoute(item)"
      >
        <span class="image-holder" v-if="item.type !== 'internal_video'">
          <img :src="item.image" />
        </span>
        <span class="image-holder" v-if="item.type === 'internal_video'">
          <span v-html="item.image"> </span>
        </span>
        <span class="details">
          <h3>
            {{ item.title }}
          </h3>
          Published by <b>{{ item.author }}</b> on {{ item.date }}
          <br />
          <label v-html="item.introduction"></label>
        </span>
      </span>
    </div>
    <MyFooter :property="'redirect'"></MyFooter>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

.text-primary {
  color: $primary !important;
}

.bg-primary {
}

.action-link:hover {
  cursor: pointer;
  color: $warning;
}

.page-holder {
  width: 100%;
  float: left;
  min-height: 100px;
  overflow: hidden;
  background: $primary !important;
}

.page-details {
  float: left;
  width: 100%;
}

p {
  margin-top: 20px;
}

.blog-tiles {
  width: 70%;
  float: left;
  min-height: 200px;
  margin-bottom: 100px;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 0px;
}

.blog-item {
  width: 100%;
  float: left;
  min-height: 100px;
  overflow: hidden;
  margin-bottom: 25px;
}

.blog-item:hover {
  cursor: pointer;
  border-bottom: solid 1px $warning;
  img {
    opacity: 0.5;
    background: #000;
  }
}

.image-holder {
  height: 300px;
  width: 35%;
  float: left;
  overflow: hidden;
}

.image-holder img {
  height: auto;
  width: 100%;
  float: left;
}

.blog-item .details {
  padding-left: 25px;
  padding-bottom: 25px;
  padding-right: 25px;
  float: left;
  width: 65%;
  height: 300px;
  overflow: hidden;
  text-align: justify;
}

.details label {
  width: 100%;
  margin-top: 25px;
}

@media screen and (max-width: 992px) {
  img {
    height:auto !important;
    width: 100% !important;
    float: left;
  }

  .blog-tiles {
    width: 90% !important;
    margin-left: 5% !important;
    margin-right: 5% !important;
  }

  .image-holder {
    width: 100% !important;
  }

  .blog-item .details {
    padding-left: 0px !important;
    padding-right: 0px !important;
    width: 100% !important;
    margin-top: 25px !important;
  }
}
</style>
<script>
// import Header from 'src/components/frame/header.vue'
import COMMON from "src/common.js";
import Logo from "src/components/generic/logo.vue";
import ROUTER from "router";
import MyFooter from "src/components/frame/footer.vue";
import Jquery from "jquery";
import beSearchFormInner from "src/components/beForms/beSearchFormInner/beSearchFormInner.vue";
export default {
  mounted() {
    this.retrieve();
  },
  data() {
    return {
      common: COMMON,
    };
  },
  components: {
    // Header,
    Logo,
    MyFooter,
    beSearchFormInner
  },
  methods: {
    redirect(route) {
      Jquery("html, body").animate(
        {
          scrollTop: Jquery("#top-view").offset().top,
        },
        500
      );
      ROUTER.push(route);
    },
    retrieve() {
      COMMON.getBlog();
      COMMON.getBasic();
    },
    checkRoute(item) {
      if (item.type === "external") {
        this.$analytics.fbq.event("ViewContent", {
          content_name: item.title,
        });
        window.open(item.content);
      } else {
        this.redirect("/press-room/page/" + item.title.split(" ").join("_"));
      }
    },
  },
};
</script>
