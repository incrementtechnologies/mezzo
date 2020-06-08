<template>
  <div class="holder" id="faq">
    <!--<h1 class="text-center text-primary" style="margin-bottom: 25px;">Frequently asked questions</h1>-->
      <div class="search">  
        <font-awesome-icon :icon="faSearch" class="searchIcon"></font-awesome-icon>
        <input type="text" class="form-control bg-warning text-white" style="font-size: 24px;" v-model="searchValue" placeholder="Type your question" results="0"/>
      </div>
    <ul v-if="filteredQuestions.length > 0">
      <li v-for="(item, index) in (limitFlag ? 5 : filteredQuestions.length)" :key="index">
        <label class="title" @click="setSelectedIndex(index)">
          <b>{{filteredQuestions[index].question}}</b>
          <font-awesome-icon :icon="filteredQuestions[index].flag === true ? faChevronUp : faChevronDown" class="text-primary icon"></font-awesome-icon>
        </label>
        <p v-if="filteredQuestions[index].flag === true" v-html="filteredQuestions[index].answer">
        </p>
      </li>  
    </ul>
    <p class="text-center">
      <font-awesome-icon class="more-less-icon" :icon="limitFlag === true ? faChevronDown : faChevronUp" @click="setLimitFlag()"></font-awesome-icon>
    </p>
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/style/colors.scss";
.holder{
  min-height: 30vh;
  width: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  margin-top: 25px;
  margin-bottom: 25px;
}

.more-less-icon{
  margin-top: 25px;
  font-size: 32px;
  color: $warning;
}

.more-less-icon:hover{
  cursor: pointer;
  color: $primary;
}

.search{
  position: relative;
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
}

.searchIcon{
  position: absolute;
  left: 10px;
  top: 2.5vh;
  font-size: 3vh;
  color: $white;
}

.searchIcon:hover{
  cursor: pointer;
}

.text-primary{
  color: $primary !important;
}

.bg-warning{
  background: $warning !important;
  color: $white !important;
}

.form-control{
  border: 0px !important;
  width: 100% !important;
  border-radius: 5px !important;
  font-size: 100% !important;
  padding-left: 40px !important;
}
ul{
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 25px;
  float: left;
}
ul li{
  width: 100% !important;
  float: left;
  padding-left: 25px;
  padding-right: 25px;
  min-height: $height;
  /*border-radius: 5px;*/
  border-bottom: solid 1px #D3D3D3;
}

ul li:hover{
  background: $warning !important;
  color: white !important;
  border: solid 1px $warning;
  cursor: pointer;
}
.title{
  width: 100%;
  float: left;
  color: $primary;
  margin-bottom: 0px;
  padding-top: 15px;
  padding-bottom: 7px;
}

.icon{
  float: right;
}

.title:hover{
  cursor: pointer;
}
p{
  text-align: justify;
}

@media (max-width: 992px) {

  ul{
    width: 96% !important;
    margin-left: 2%;
    margin-right: 2%;
  }

  ul li{
    width: 100% !important;
    margin-right: 0%;
    margin-left: 0%;
  }
}
</style>
<script>
import COMMON from 'src/common.js'
import { faChevronUp, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'
export default {
  data () {
    return {
      common: COMMON,
      searchValue: null,
      faChevronUp: faChevronUp,
      faChevronDown: faChevronDown,
      faSearch: faSearch,
      selectedIndex: null,
      limitFlag: true
    }
  },
  computed: {
    filteredQuestions() {
      var filtered = COMMON.faq
      if(this.searchValue){
        filtered = filtered.filter(item => 
          item.question.toLowerCase().includes(this.searchValue.toLowerCase())
        )
      }
      return filtered
    }
  },
  methods: {
    setSelectedIndex(index){
      this.filteredQuestions[index].flag = !this.filteredQuestions[index].flag
      this.$analytics.fbq.event('ViewContent', {
        content_name: this.filteredQuestions[index].question
      })
    },
    setLimitFlag(){
      this.limitFlag = !this.limitFlag
      if(this.limitFlag === true){
        this.$parent.scrollToByParams('#faq')
      }
    }
  }
}
</script>
