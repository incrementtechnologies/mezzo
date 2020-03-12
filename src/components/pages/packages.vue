<template>
  <div class="holder" id="packages">
    <div class="item" v-for="(item, index) in common.packages" :key="index">
      <span class="details">
        <label class="title">{{item.title}}</label>
        <button class="btn btn-warning" v-if="item.action === 'inquire_now'">INQUIRE NOW</button>
      </span>
      <img :src="item.image">
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.holder{
  height: 70vh;
  width: 100%;
  float: left;
  overflow: hidden;
  background: white;
  position: relative;
}

.item{
  width: 25%;
  float: left;
  height: 70vh;
  position: relative;
}

.details{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  text-align: center;
}

.details .title{
  margin-top: 50%;
  font-size: 42px;
  font-style: italic;
}

.details:hover{
  cursor: pointer;
  background: rgba(0, 0, 51, 0.5);
}

.details .title{
  width: 100%;
  color: white;
}

img{
  position: absolute;
  top: 0;
  height: 100%;
  width: auto;
  z-index: 0;
}

.btn{
  width: 60% !important;
  height: 10vh !important;
}

</style>
<script>
import COMMON from 'src/common.js'
export default {
  mounted(){
  },
  data(){
    return {
      common: COMMON
    }
  },
  methods: {
    openExternal(url){
      window.open(url, '_BLANK')
    }
  }
}
</script>
