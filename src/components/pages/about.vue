<template>
  <div class="holder" id="about" >
    <div class="item">
      <div class="item-content">
        <div class="image-holder">
          <img :src="common.host + 'img/main2.png'">
        </div>
        <div class="details">
          <div class="content">
            <div class="text-holder">
              <h1 class="text-primary text-center">
                About our Hotel
              </h1>
              <p>
                Located right in the heart of the island of Cebu, 4-star Mezzo Hotel sets its very own  standard of luxury and minimalism by offering a haven for comfort and relaxation. At Mezzo, we have dedicated ourselves to provide excellent service, delightful cuisines, and a fully-customized experience -- nothing short of true Filipino hospitality.
              </p>
              <p>
                Some of our amenities include 151 guest rooms, 35 serviced units, luxurious function rooms that could seat up to a thousand guests, tailor-made packages suited to your liking, whilst being conveniently located minutes away from Cebu’s business district, premier shopping centers, and main tourist attractions -- making Mezzo Hotel the ideal choice for your event’s needs.
              </p>
              <p>
                As you explore Cebu’s rich culture and heritage, may you fall in love and find yourself coming back to a new place to call home. Come make memories with us.
              </p>
              <p>
                Equipped with Cebuano warmth, Mezzo Hotel welcomes you to the Queen City of the South.
              </p>
              <!-- <p class="text-center">
                <font-awesome-icon :icon="item.icon" class="social-icons" v-for="(item, index) in common.socialIcons" :key="index" @click="openExternal(item.url)"></font-awesome-icon>  
              </p> -->
            </div>
          </div>
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
  overflow: hidden;
  height: 93vh;
}

.holder{
  min-height: 93vh;
  width: 100%;
  float: left;
  background: white;
  position: relative;
}

.details{
  width: 50%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  display: table;
}

.details .content{
  display: table-cell;
  vertical-align: middle;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  text-align: justify;
  width: 100%;
  height: 100%;
}

.image-holder{
  float: left;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
}

img{
  width: auto;
  height: 100%;
}

.social-icons{
  font-size: 24px;
  margin-right: 10px;
  color: $warning;
}

.social-icons:hover{
  color: $primary;
  cursor: pointer;
}

.text-holder{
  background: rgba(255, 255, 255, 0.9);
  padding: 25px;
}

@media (max-width: 992px) {
  .image-holder{
    min-height: 30vh;
    overflow-y: hidden;
    width: 100%;
  }


  .image-holder{
    width: 100%;
  }

  img{
    width: 100%;
    height: auto;
  }

  .details{
    min-height: 70vh;
    width: 100%;
    margin-top: 0px;
    padding-left: 25px;
    padding-right: 25px;
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
      faCircle: faCircle
    }
  },
  methods: {
    openExternal(url){
      window.open(url, '_BLANK')
    }
  }
}
</script>
