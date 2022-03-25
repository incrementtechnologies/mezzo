<template>
  <div v-if="content !== null && content !== undefined">
    <span class="page-holder"> <Logo /></span>
    <span>
      <div class="blog-tiles">
        <button class="btn btn-warning" @click="redirect('/')">Home</button>
        <span class="blog-item">
          <label v-html="content"></label>
        </span>
      </div>
    </span>
    <MyFooter :property="'redirect'"></MyFooter>
  </div>
  <span class="loading text-center" v-else-if="loading === true">
    <font-awesome-icon
      :icon="faCircleNotch"
      class="fa-spin"
    ></font-awesome-icon>
  </span>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.fa-spin {
  animation-duration: 0.5s;
  margin-top: 40vh;
}

.loading {
  font-size: 75px;
  width: 100%;
  color: $warning;
  text-align: center;
  height: 100vh;
  float: left;
}

.page-holder {
  width: 100%;
  float: left;
  min-height: 100px;
  overflow: hidden;
  background: $primary !important;
}

button {
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

@media screen and (max-width: 992px) {
  .blog-tiles {
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
  }
}
</style>
<script>
import Logo from "src/components/generic/logo.vue";
import MyFooter from "src/components/frame/footer.vue";
import ROUTER from "router";
import Config from "src/config.js";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
export default {
  mounted() {
    this.getContent();
    window.scrollTo(0, 0);
  },
  components: {
    Logo,
    MyFooter,
  },
  data() {
    return {
      content: null,
      loading: true,
      faCircleNotch: faCircleNotch,
    };
  },
  methods: {
    async getContent() {
      const { GoogleSpreadsheet } = require("google-spreadsheet");
      const doc = new GoogleSpreadsheet(Config.googleSheetId);
      await doc.useServiceAccountAuth({
        client_email: Config.google.client_email,
        private_key: Config.google.private_key,
      });
      await doc.loadInfo();
      const blogs = doc.sheetsByIndex[14];
      let blogsRows = await blogs.getRows();
      this.content = blogsRows[0].content;
    },
    redirect(params) {
      ROUTER.push(params);
    },
  },
};
</script>
