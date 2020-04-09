<template>
  <div class="holder" id="faq">
    <h1 class="text-center text-primary" style="margin-bottom: 25px;"><i>Frequently asked questions</i></h1>
    <input type="text" class="form-control bg-warning text-white" style="font-size: 24px;" v-model="searchValue" placeholder="Search question" />
    <ul>
      <li v-for="(item, index) in filteredQuestions" :key="index">
        <label class="title" @click="setSelectedIndex(index)">
          <b>{{item.question}}</b>
          <font-awesome-icon :icon="item.flag === true ? faChevronUp : faChevronDown" class="text-primary icon"></font-awesome-icon>
    <!-- <h1 class="text-center text-primary"><i>Frequently asked questions</i></h1>
    <input type="text" class="form-control"  v-model="searchValue" placeholder="Search question" />

    <ul v-for="(item, index) in common.faq" :key="index">
      <li v-if="item.question.indexOf(searchValue) != -1 || searchValue == null">
        <label class="title" @click="setSelectedIndex(index)">
          {{item.question}}
          <font-awesome-icon :icon="selectedIndex === index ? faChevronUp : faChevronDown" class="text-primary icon"></font-awesome-icon> -->
        </label>
        <p v-if="item.flag === true">
          {{item.answer}}
        </p>
      </li>  
    </ul>

  </div>
</template>
<style lang="scss" scoped>
@import "~assets/style/colors.scss";
.holder{
  min-height: 100vh;
  width: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  margin-bottom: 50px;
}

.text-primary{
  color: $primary !important;
}

.form-control{
  height: 10vh !important;
  border: 0px !important;
  width: 90% !important;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 5px !important;
}
ul{
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 25px;
}
ul li{
  width: 49%;
  margin-right: 1%;
  float: left;
  padding-left: 25px;
  padding-right: 25px;
  min-height: 50px;
  border-radius: 5px;
  border: solid 1px $primary;
  margin-top: 10px;
}

ul li:hover{
  background: $warning !important;
  color: white !important;
  border: solid 1px $warning;
  cursor: pointer;
}
.title{
  line-height: 50px;
  width: 100%;
  float: left;
  color: $primary;
  padding-top: 10px;
}

.icon{
  float: right;
  font-size: 32px;
  margin-top: 10px;
}

p{
  text-align: justify;
}
@media (max-width: 992px) {
  ul li{
    width: 100%;
    margin-right: 0%;
  }
}
</style>
<script>
import COMMON from 'src/common.js'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
export default {
  data () {
    return {
      common: COMMON,
      searchValue: null,
      faChevronUp: faChevronUp,
      faChevronDown: faChevronDown,
      selectedIndex: null
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
    }
  }
}
</script>
