import Home from 'src/components/Home.vue'
import Blogs from 'src/components/blog/home.vue'
import BlogViewer from 'src/components/blog/Viewer.vue'
import Inquiry from 'src/components/pages/chatbotEnquiry.vue'
import bookingInquiry from 'src/components/pages/bookingInquiry.vue'
import EasterEnquiry from 'src/components/pages/EasterEnquiry.vue'
import anniversaryEnquiry from 'src/components/pages/anniversaryEnquiry.vue'
import NotFound from 'src/components/error/404.vue'
import privacyPolicy from 'src/components/pages/privacyPolicy.vue'
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
    path: '/easter/inquiry',
    name: 'easterInquiry',
    component: EasterEnquiry
  }, {
    path: '*',
    name: 'notFound',
    component: NotFound
  }, {
    path: '/privacy-policy',
    name: 'privacyPolicy',
    component: privacyPolicy
  }, {
    path: '/e-voucher',
    name: 'anniversaryEnquiry',
    component: anniversaryEnquiry
  }, {
    path: '/booking-inquiry',
    name: 'BookingInquiry',
    component: bookingInquiry
  }]
}

