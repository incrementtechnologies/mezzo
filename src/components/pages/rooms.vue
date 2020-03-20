<template>
  <div class="holder" id="rooms" v-if="activeItem !== null">
    <div class="item">
      <div class="item-content">
        <div class="image-holder" v-if="activeItem.images !== null">
          <span v-for="(imageItem, imageIndex) in activeItem.images" :key="imageIndex">
            <img :src="imageItem.url"  v-if="imageIndex === activeImage">
            <!-- <img :src="'http://localhost/php/mezzo_api/img/DSC_0365.jpg'"  v-if="imageIndex === activeImage"> -->
          </span>
          <span class="circle-icon">
            <span v-for="(imageItem, imageIndex) in activeItem.images" :key="imageIndex" class="image-menu-holder" @click="activeImage = imageIndex">
              <img :src="imageItem.url" :class="{'active-image': activeImage === imageIndex}">
            </span>
          </span>
        </div>
        <div class="details">
          <span class="item-menu">
            <label v-for="(counter, counterIndex) in common.rooms.length" :key="counterIndex" :class="{'bg-primary': active === counterIndex}" @click="setActive(counterIndex)">{{counter}}</label>
          </span>
          <h3 class="text-primary">
            {{activeItem.title}}
          </h3>
          <h5 class="text-primary">{{activeItem.description}}</h5>
          <ul v-if="activeItem.inclusions !== null">
            <li v-for="(iItem, iIndex) in activeItem.inclusions" :key="iIndex">
              <font-awesome-icon :icon="faCheck" class="text-warning check-icon"></font-awesome-icon>
              <label>{{iItem.title}}</label>
            </li>
          </ul>
          <h3><b class="text-warning price">{{activeItem.price}}</b> / Night</h3>
          <p>{{activeItem.priceInclusions}}</p>
          <button class="btn btn-warning">BOOK NOW</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

.text-primary{
  color: $primary !important;
}

.bg-primary{
  background: $primary !important;
}

.item, .item-content{
  width: 100%;
  float: left;
  height: 100%;
}

.item-menu{
  width: 100%;
  float: left;
}

.item-menu label:hover{
  cursor: pointer;
}

.item-menu label{
  border-radius: 50%;
  height: 50px;
  width: 50px;
  text-align: center;
  background: $warning;
  color: white;
  line-height: 50px;
  font-weight: 600;
  margin-right: 10px;
}

.holder{
  min-height: 100vh;
  width: 100%;
  float: left;
  background: white;
  position: relative;
}

.details{
  width: 40%;
  float: left;
  height: 100%;
  text-align: justify;
  padding: 50px;
  position: relative;
}

.image-holder{
  float: left;
  height: 100%;
  width: 60%;
  overflow: hidden;
  position: relative;
}

img{
  width: auto;
  height: 100vh;
}

.btn{
  height: 10vh !important;
  width: 60%;
  margin-top: 25px;
}

.check-icon{
  font-size: 32px;
  margin-right: 20px;
}

ul{
  margin-top: 25px;
}
ul li{
  margin-bottom: 5px;
}

h5{
  margin-top: 25px;
}

.circle-icon{
  position: absolute;
  right: 50px;
  bottom: 50px;
  z-index: 1000;
  color: white;
}

.image-menu-holder{
  width: 100px;
  height: 75px;
  overflow: hidden;
  margin-right: 10px;
}

.image-menu-holder img{
  max-height: 75px;
  max-width: 100px;
  opacity: 0.5;
}

.image-menu-holder img:hover{
  cursor: pointer;
  opacity: 1;
}

.image-menu-holder .active-image{
  opacity: 1;
}

.circle-item{
  margin-right: 5px;
}

.circle-item:hover{
  cursor: pointer;
}
@media (max-width: 992px) {
  .image-holder{
    height: 30vh;
    width: 100%;
  }
  .circle-icon{
    left: 10px;
    bottom: 10px;
  }
  .image-menu-holder{
    width: 75px;
    height: 50px;
  }

  .image-menu-holder img{
    max-width: 75px;
    max-height: 50px;
  }
  .details{
    min-height: 70vh;
    width: 100%;
    margin-top: 0px;
  }
}
</style>
<script>
import COMMON from 'src/common.js'
import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons'
export default {
  mounted(){
  },
  data(){
    return {
      common: COMMON,
      faCheck: faCheck,
      faCircle: faCircle,
      active: 0,
      activeImage: 0
    }
  },
  computed: {
    activeItem: function (){
      return COMMON.rooms.length > 0 ? COMMON.rooms[this.active] : null
    }
  },
  methods: {
    openExternal(url){
      window.open(url, '_BLANK')
    },
    setActive(index){
      this.active = index
      this.activeImage = 0
    }
  }
}
</script>
