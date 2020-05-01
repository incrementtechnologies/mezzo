let beforeEnter = (to, from, next) => {
  next()
}
var devRoutes = []
let app = require('./app/index.js')
devRoutes = devRoutes.concat(app.default.routes)
for(let x = 0; x < devRoutes.length; x++){
  devRoutes[x]['beforeEnter'] = beforeEnter
}
let routes = [
  {
    path: '/',
    name: 'home',
    component: resolve => require(['src/components/Home.vue'], resolve),
    beforeEnter: beforeEnter
  }
]
// if(CONFIG.default.IS_DEV){
routes = routes.concat(devRoutes)
// }
export default{
  routes: routes
}
