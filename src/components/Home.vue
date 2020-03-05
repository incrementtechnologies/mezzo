<template>
  <div>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from 'src/components/frame/header.vue'
import Body from 'src/components/frame/body.vue'
import Footer from 'src/components/frame/footer.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Header,
    Body,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
