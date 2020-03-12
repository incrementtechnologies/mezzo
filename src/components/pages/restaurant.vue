<template>
  <div class="holder" id="restaurants" v-if="activeItem !== null">
    <div class="item">
      <div class="item-content">
        <div class="details">
          <h3>{{activeItem.title}}</h3>
          <h5>{{activeItem.description}}</h5>
          <ul v-if="activeItem.inclusions !== null">
            <li v-for="(iItem, iIndex) in activeItem.inclusions" :key="iIndex">
              <font-awesome-icon :icon="faCheck" class="text-warning check-icon"></font-awesome-icon>
              <label>{{iItem.title}}</label>
            </li>
          </ul>
          <button class="btn btn-warning">INQUIRE NOW</button>
          <span class="item-menu">
            <label v-for="(counter, counterIndex) in common.restaurants.length" :key="counterIndex" :class="{'bg-warning': active === counterIndex}" @click="setActive(counterIndex)">{{counter}}</label>
          </span>
        </div>
        <div class="image-holder" v-if="activeItem.images !== null">
          <span v-for="(imageItem, imageIndex) in activeItem.images" :key="imageIndex">
            <img :src="imageItem.url"  v-if="imageIndex === activeImage">
          </span>
          <span class="circle-icon">
            <font-awesome-icon :icon="faCircle" v-for="(iconItem, iconIndex) in activeItem.images.length" :key="iconIndex" class="circle-item" :class="{'text-warning': activeImage === iconIndex}" @click="activeImage = iconIndex"></font-awesome-icon>
          </span>
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

.item, .item-content{
  width: 100%;
  float: left;
  height: 100%;
}

.item-menu{
  position: absolute;
  bottom: 50px;
  left: 50px;
  z-index: 1000;
}

.item-menu label:hover{
  cursor: pointer;
}

.item-menu label{
  border-radius: 50%;
  height: 50px;
  width: 50px;
  text-align: center;
  background: white;
  color: $primary;
  line-height: 50px;
  font-weight: 600;
  margin-right: 10px;
}
.holder{
  height: 100vh;
  width: 100%;
  float: left;
  background: $primary;
  position: relative;
}

.details{
  width: 40%;
  float: left;
  height: 100%;
  text-align: justify;
  padding: 50px;
  color: white;
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
  height: 100%;
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
  margin-bottom: 25px;
}

h5{
  margin-top: 25px;
}

.circle-icon{
  position: absolute;
  left: 50px;
  bottom: 50px;
  z-index: 1000;
  color: white;
}

.circle-item{
  margin-right: 5px;
}

.circle-item:hover{
  cursor: pointer;
}
</style>
<script>
import COMMON from 'src/common.js'
import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons'
export default {
  mounted(){
    // setInterval(() => {
    //   if(this.active < COMMON.restaurants.length){
    //     this.active++
    //     this.activeImage = 0
    //     if(this.activeImage < this.activeItem.images.length){
    //       this.activeImage++
    //     }else{
    //       this.activeImage = 0
    //     }
    //   }else{
    //     this.active = 0
    //     this.activeImage = 0
    //   }
    // }, 5000)
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
      return COMMON.restaurants[this.active]
    }
  },
  methods: {
    openExternal(url){
      window.open(url, '_BLANK')
    },
    setActive(index){
      console.log(index)
      this.active = index
    }
  }
}
</script>
