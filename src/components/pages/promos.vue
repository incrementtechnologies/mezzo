<template>
  <div>
    <span class="page-holder"> <Logo /></span>
    <span>
      <div class="blog-tiles">
        <button class="btn btn-warning" @click="redirect('/')">Home</button>
        <span class="blog-item">
          <span class="details">
            <h3 style="margin-top: 25px">PROMOS</h3>
            Published by <b>Mezzo Hotel</b> on November 17,2021
            <br />
            <label>
              We hope the Christmas season brings you joy and hope, and the
              chance to make beautiful memories with loved ones.<br /><br />Here
              are some ideas to help bring in the holiday cheer:
            </label>
            <p><img :src="'https://mezzohotel.com/img/christmas.png'" /></p>
            <p><img :src="'https://mezzohotel.com/img/cmas_2.png'" /></p>
            <p><img :src="'https://mezzohotel.com/img/cmas_3.png'" /></p>
            <label
              >Whether you’re looking to have a grand feast, an annual catch-up,
              or a simple staycation, you can always
              <b style="color: #000033">#MakeitMezzo</b>.<br /><br />Experience
              a safe, relaxing, and luxurious holiday only at Mezzo Hotel.<br /><br />For
              reservations and enquiries, call:
              <a href="tel:(032) 231-0777">(032) 231-0777</a> or email us at
              <a href="mailto:info@mezzohotel.com">info@mezzohotel.com</a
              >.<br /><br /><b>Merry Christmas!</b></label
            >
          </span>
        </span>
      </div>
    </span>
    <MyFooter :property="'redirect'"></MyFooter>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

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

img {
  height: 700px !important;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 700px !important;
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

p {
  text-align: center;
}

.blog-item {
  width: 100%;
  float: left;
  min-height: 100px;
  overflow: hidden;
  margin-bottom: 25px;
}

.blog-item .details {
  padding-left: 25px;
  padding-bottom: 50px;
  padding-right: 25px;
  float: left;
  width: 100%;
  min-height: 50px;
  text-align: justify;
}

.details label {
  width: 100%;
  margin-top: 25px;
}

@media screen and (max-width: 992px) {
  .blog-tiles {
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
  }

  .blog-item .details {
    padding-left: 0px;
    padding-right: 0px;
  }
}

@media screen and (max-width: 800px) {
  img {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
<script>
import Logo from "src/components/generic/logo.vue";
import MyFooter from "src/components/frame/footer.vue";
import ROUTER from "router";
export default {
  components: {
    Logo,
    MyFooter,
  },
  methods: {
    redirect(params) {
      ROUTER.push(params);
    },
  },
};
</script>
