import Home from 'src/components/Home.vue'
import Blogs from 'src/components/blog/home.vue'
import BlogViewer from 'src/components/blog/Viewer.vue'
export default{
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  }, {
    path: '/content-viewer/:title',
    name: 'ContentViewer',
    component: BlogViewer
  }]
}

