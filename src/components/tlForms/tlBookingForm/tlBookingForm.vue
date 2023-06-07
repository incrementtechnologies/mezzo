<template>
  <!-- start TL Booking form script -->
  <div id='tl-booking-form'></div>
  <!-- end TL Booking form script -->
</template>
<style scoped lang="scss">
@import "~assets/style/travelline-style.css";
#fb-root {
  display: none;
}
</style>
<script>
export default {
  mounted() {
    this.loadTlScript(window)
  },
  methods: {
    loadTlScript(w) {
      var q = [
        ['setContext', 'TL-INT-mezzohotel_2023-03-20', 'en'],
        ['embed', 'booking-form', {
          container: 'tl-booking-form'
        }]
      ];
      var h=["ph-ibe.tlintegration-as.com","ibe.tlintegration-as.com","ibe.tlintegrationfb-as.com"];
      var t = w.travelline = (w.travelline || {}),
          ti = t.integration = (t.integration || {});
      ti.__cq = ti.__cq? ti.__cq.concat(q) : q;
      function e(s,f) {return function() {w.TL||(c.removeChild(s),f())}}
      if (!ti.__loader) {
        ti.__loader = true;
        var d=w.document,c=d.getElementsByTagName("head")[0]||d.getElementsByTagName("body")[0];
        (function l(h) {
          if (0===h.length) return; var s=d.createElement("script");
          s.type="text/javascript";s.async=!0;s.src="https://"+h[0]+"/integration/loader.js";
          s.onerror=s.onload=e(s,function(){l(h.slice(1,h.length))});c.appendChild(s)
        })(h);
      }
    }
  }
}
</script>
