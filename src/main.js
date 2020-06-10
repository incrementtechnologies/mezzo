import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueFacebookPixel from 'vue-analytics-facebook-pixel'
 
library.add(faUserSecret)
library.add(faFontAwesome)

Vue.use(VueFacebookPixel)

Vue.analytics.fbq.init('510542799813313', {
  em: 'kennettecanales@gmail.com'
})
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
