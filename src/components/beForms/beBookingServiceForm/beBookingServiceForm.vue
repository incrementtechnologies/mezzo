<template>
  <!-- start Booking form script -->
  <div id='be-booking-form-service'></div>
  <!-- end Booking form script -->
</template>
<style scoped lang="scss">
@import "~assets/style/be-style.css";
</style>
<script>
export default {
  mounted() {
    this.loadTlScript(window)
  },
  methods: {
    loadTlScript(w) {
      !function(e,n){
        var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
        if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){a[c]=!0;var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
          !function n(i){if(0!==i.length){var a=l.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://"+i[0]+"/integration/loader.js",
              a.onerror=a.onload=function(n,i){return function(){e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())}}(a,(function(){n(i.slice(1,i.length))})),g.appendChild(a)}}(
              ["ph-ibe.hopenapi.com","ibe.hopenapi.com","ibe.behopenapi.com"])}
      }(w,[
        ['setContext', 'BE-INT-mezzohotel_2023-03-20.service', 'en'],
        ['embed', 'booking-form', {
          container: 'be-booking-form-service'
        }]
      ]);
    }
  }
}
</script>
