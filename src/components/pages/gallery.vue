<template>
  <div v-if="common.gallery.length > 1" class="custom-container">
    <div class="holder" id="gallery">
      <span v-for="(item, index) in common.gallery" :key="index" class="item" @click="showImage(item.url)">
        <img :src="item.url">
        <div class="hover-holder">
          <font-awesome-icon :icon="faPlusCircle" class="plus-icon"></font-awesome-icon>
        </div>
      </span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

.custom-container{
  width: 100%;
  min-height: 70vh;
  float: left;
  position: relative;
}
.holder{
  min-height: 70vh;
  width: 90%;
  float: left;
  overflow: hidden;
  background: white;
  position: relative;
  margin-left: 5%;
  margin-right: 5%;
}

.item{
  width: 25%;
  float: left;
  position: relative;
}

img{
  height: auto;
  width: 100%;
}

.hover-holder{
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: $white;
  text-align: center;
  vertical-align: middle;
}

.plus-icon{
  font-size: 36px;
  position: relative;
  top: calc(50% - 18px);
}
.item:hover{
  .hover-holder{
    display: block;
    cursor: pointer;
  }
}
@media (max-width: 992px) {
  .item{
    width: 50%;
  }
}

</style>
<script>
import COMMON from 'src/common.js'
import { faAngleLeft, faAngleRight, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
export default {
 data(){
    return {
      common: COMMON,
      activeImage: 0,
      faAngleLeft: faAngleLeft,
      faAngleRight: faAngleRight,
      faPlusCircle: faPlusCircle
    }
  },
  components: {
  },
  methods: {
    showImage(url){
      this.$parent.showImage(url)
    }
  }
}
</script>
