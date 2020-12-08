import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import Jquery from 'jquery'
export default{
  APP_NAME: 'Mezzo Hotel',
  APP_TAGLINE: 'LUXURY HOTEL',
  APP_EMAIL: 'admin@mezzohotel.com',
  APP_MESSENGER: 'https://m.me/cafemezzobymezzohotel',
  APP_COPYRIGHT: 'Mezzo Hotel ' + new Date().getFullYear(),
  APP_DEVELOPER: 'Increment Technologies',
  APP_DEVELOPER_URL: 'http://increment.ltd',
  APP_PHONE_NUMBER: '0912345678',
  APP_HEADER_BACKGROUND: [{
    url: require('assets/img/mezzolobby.jpg')
  }],
  APP_HEADER_MOBILE_BACKGROUND: [{
    url: 'https://mezzohotel.com/img/mainm1.png'
  }],
  address: 'F. Cabahug, Pres. Quezon St, Cebu City, 6000 Cebu',
  api: 'https://mezzohotel.com/img/',
  host: 'https://mezzohotel.com/',
  booking_link: 'https://mezzohotel.com/managebooking.php',
  socialMedia: {
    facebook: 'https://www.facebook.com/mezzohotelcebu'
  },
  socialIcons: [{
    icon: faFacebook,
    url: 'https://www.facebook.com/mezzohotelcebu'
  }, {
    icon: faTwitter,
    url: 'https://twitter.com/hashtag/mezzohotel'
  }, {
    icon: faInstagram,
    url: 'https://www.instagram.com/mezzohotelcebu'
  }],
  delay: 15000,
  menus: [],
  packages: null,
  testimonials: [],
  rooms: [],
  restaurants: [],
  faq: [],
  gallery: [],
  addOns: [],
  announcements: [],
  blogs: [],
  activeMenu: '#top-view',
  load: {
    rooms: false,
    inquire: false,
    restaurants: false,
    testimonials: false,
    gallery: false,
    faq: false,
    footer: false
  },
  setLoad(div){
    switch(div){
      case '#faq':
        this.load.faq = true
        this.load.gallery = true
        this.load.testimonials = true
        this.load.restaurants = true
        this.load.inquire = true
        this.load.rooms = true
        break
      case '#gallery':
        this.load.gallery = true
        this.load.testimonials = true
        this.load.restaurants = true
        this.load.inquire = true
        this.load.rooms = true
        break
      case '#testimonials':
        this.load.testimonials = true
        this.load.restaurants = true
        this.load.inquire = true
        this.load.rooms = true
        break
      case '#restaurants':
        this.load.restaurants = true
        this.load.inquire = true
        this.load.rooms = true
        break
      case '#packages':
        this.load.inquire = true
        this.load.rooms = true
        break
      case '#rooms':
        this.load.rooms = true
        break
    }
  },
  getBlog(){
    this.blogs = []
    Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/11/public/values?alt=json', response => {
      let entries = response.feed.entry
      for (var i = 0; i < entries.length; i += 7) {
        if(i > 6){
          let object = {
            type: entries[i].content.$t,
            title: entries[i + 1].content.$t,
            image: entries[i].content.$t === 'internal_video' ? entries[i + 2].content.$t : this.host + 'img/' + entries[i + 2].content.$t ,
            date: entries[i + 3].content.$t,
            author: entries[i + 4].content.$t,
            introduction: entries[i + 5].content.$t,
            content: entries[i + 6].content.$t,
          }
          this.blogs.push(object)
        }
      }
    })
  },
  getBasic(){
    Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/3/public/values?alt=json', response => {
      let entries = response.feed.entry
      for (var i = 0; i < entries.length; i += 2) {
        if(i > 1){
          switch(entries[i].content.$t){
            case 'app_name':
              this.APP_NAME = entries[i + 1].content.$t
              break
            case 'app_tagline':
              this.APP_TAGLINE = entries[i + 1].content.$t
              break
            case 'app_email':
              this.APP_EMAIL = entries[i + 1].content.$t
              break
            case 'app_phone_number':
              this.APP_PHONE_NUMBER = entries[i + 1].content.$t
              break
            case 'address':
              this.address = entries[i + 1].content.$t
              break
            case 'app_header_background': {
              let image = entries[i + 1].content.$t
              let tempImages = image !== null ? image.split(',') : null
              let imagesArray = tempImages.map((item) => {
                return {
                  url: this.host + 'img/' + item
                }
              })
              this.APP_HEADER_BACKGROUND = imagesArray
              break
            }
            case 'app_header_mobile_background': {
              let image = entries[i + 1].content.$t
              let tempImages = image !== null ? image.split(',') : null
              let imagesArray = tempImages.map((item) => {
                return {
                  url: this.host + 'img/' + item
                }
              })
              this.APP_HEADER_MOBILE_BACKGROUND = imagesArray
              break
            }
          }
        }
      }
    })
  }
}