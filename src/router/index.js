import Vue from 'vue'
import Router from 'vue-router'
import modules from './module.js'
Vue.use(Router)
export default new Router({
  routes: modules.routes
})
