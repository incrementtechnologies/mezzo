<template>
  <footer>
    <div class="footer">
      <logo style="width: 100%; float: left; margin-bottom: 50px;"></logo>
      <ul>
        <li>
          <span>Phone</span>
          <span>{{common.APP_PHONE_NUMBER}}</span>
        </li>

        <li>
          <span>Address</span>
          <span>{{common.address}}</span>
        </li>

        <li>
          <span>Email</span>
          <span>{{common.APP_EMAIL}}</span>
        </li>
      </ul>
      <span class="copyright">
        <label>Copyright @{{common.COPYRIGHT}}. All rights reserved. This site was made by <b @click="openExternal(common.APP_DEVELOPER_URL)">{{common.APP_DEVELOPER}}</b></label>
      </span>
    </div>
  </footer>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
footer {
  width:100%;
  height: 75vh;
  float: left;
  overflow-y: hidden;
  background: $primary;
  border-top: solid 5px $warning;
  position: relative;
}
.footer{
  width: 100%;
  float: left;
  min-height: 50px;
  overflow-y: hidden;
}

ul{
  list-style: none;
  width: 100%;
  float: left;
  color: white;
  margin: 0px;
  padding: 0px;
}

ul li{
  width: 33%;
  float: left;
  text-align: center;
}

ul li span{
  width: 100%;
  float: left;
}

.copyright{
  width: 100%;
  float: left;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  margin-top: 45px;
  color: #6f6f6f !important;
  bottom: 25px;
  left: 0;
  position: absolute;
}
@media screen and (max-width: 992px){
  .footer-widget{
    width: 100%;
    text-align: center;
    margin-right: 0%;
    padding: 0px;
  }
  ul{
    width: 96%;
    margin-right: 2%;
    margin-left: 2%;
  }
  ul li {
    width: 100%;
  }
}
</style>
<script>
import COMMON from 'src/common.js'
import Logo from 'src/components/generic/logo.vue'
export default {
  mounted(){
  },
  data(){
    return{
      common: COMMON
    }
  },
  components: {
    Logo
  },
  methods: {
    openExternal(url){
      window.open(url, '_BLANK')
    }
  }
}
</script>
