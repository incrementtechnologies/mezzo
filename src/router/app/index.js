import Home from 'src/components/Home.vue'
import Blogs from 'src/components/blog/home.vue'
import BlogViewer from 'src/components/blog/Viewer.vue'
import Inquiry from 'src/components/pages/chatbotEnquiry.vue'
import NotFound from 'src/components/error/404.vue'
export default{
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/press-room',
    name: 'pressRoom',
    component: Blogs
  }, {
    path: '/press-room/page/:title',
    name: 'ContentViewer',
    component: BlogViewer
  }, {
    path: '/inquiry/:type',
    name: 'inquiry',
    component: Inquiry
  }, {
    path: '*',
    name: 'notFound',
    component: NotFound
  }]
}

