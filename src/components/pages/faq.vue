<template>
  <div class="holder" id="faq">
    <!--<h1 class="text-center text-primary" style="margin-bottom: 25px;">Frequently asked questions</h1>-->
      <div class="search">  
        <font-awesome-icon :icon="faSearch" class="searchIcon"></font-awesome-icon>
        <input type="text" class="form-control bg-warning text-white" style="font-size: 24px;" v-model="searchValue" placeholder="Type your question" results="0"/>
      </div>
    <ul>
      <li v-for="(item, index) in filteredQuestions" :key="index">
        <label class="title" @click="setSelectedIndex(index)">
          <b>{{item.question}}</b>
          <font-awesome-icon :icon="item.flag === true ? faChevronUp : faChevronDown" class="text-primary icon"></font-awesome-icon>
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
  margin-top: 10px;
  margin-bottom: 50px;
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
  top: 2vh;
  font-size: calc($height / 2);
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
  padding-left: 30px !important;
}
ul{
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 25px;
}
ul li{
  width: 100% !important;
  float: left;
  padding-left: 25px;
  padding-right: 25px;
  min-height: 40px;
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
  line-height: 40px;
  width: 100%;
  float: left;
  color: $primary;
  margin-bottom: 0px;
}

.icon{
  float: right;
  margin-top: 12px;
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
