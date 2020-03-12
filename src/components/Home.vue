<template>
  <div>
    <Header></Header>
    <booking></booking>
    <Body></Body>
    <Rooms></Rooms>
    <Packages></Packages>
    <Restaurant></Restaurant>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from 'src/components/frame/header.vue'
import Body from 'src/components/frame/body.vue'
import Footer from 'src/components/frame/footer.vue'
import Restaurant from 'src/components/pages/restaurant.vue'
import Rooms from 'src/components/pages/rooms.vue'
import Packages from 'src/components/pages/packages.vue'
import Booking from 'src/components/pages/booking.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Header,
    Body,
    Footer,
    Restaurant,
    Rooms,
    Packages
    Booking
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
