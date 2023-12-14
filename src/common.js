import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import Jquery from 'jquery'
import Config from 'src/config.js'
export default{
  APP_NAME: 'Mezzo Hotel',
  APP_TAGLINE: 'LUXURY HOTEL',
  APP_EMAIL: 'info@mezzohotel.com',
  APP_MESSENGER: 'https://m.me/cafemezzobymezzohotel',
  APP_COPYRIGHT: 'Mezzo Hotel ' + new Date().getFullYear(),
  APP_DEVELOPER: 'Increment Technologies',
  APP_DEVELOPER_URL: 'http://increment.ltd',
  APP_PHONE_NUMBER: '0912345678',
  APP_HEADER_BACKGROUND: [{
    url: 'https://mezzowebsitefiles.s3.ap-southeast-1.amazonaws.com/mezzolobby.76a4fb8d.jpg'
  }],
  APP_HEADER_MOBILE_BACKGROUND: [{
    url: 'https://mezzowebsitefiles.s3.ap-southeast-1.amazonaws.com/mainm1.png'
  }],
  address: 'F. Cabahug, Pres. Quezon St, Cebu City, 6000 Cebu',
  api: 'https://mezzowebsitefiles.s3.ap-southeast-1.amazonaws.com/',
  certificate: 'https://mezzowebsitefiles.s3.ap-southeast-1.amazonaws.com/mezzo_iso_light.jpg',
  host: 'https://migration.mezzohotel.com/',
  booking_link: 'https://migration.mezzohotel.com/managebooking.php',
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
    protocol: false,
    footer: false
  },
  setLoad(div){
    switch(div){
      case '/press-room/page/Mezzo_Hotel_Health_and_Safety_Protocols':
        this.load.protocol = true
        this.load.faq = true
        this.load.gallery = true
        this.load.testimonials = true
        this.load.restaurants = true
        this.load.inquire = true
        this.load.rooms = true
        break
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
  async getBlog(){
    this.blogs = []
    const { GoogleSpreadsheet } = require('google-spreadsheet')
    const doc = new GoogleSpreadsheet(Config.googleSheetId)
    await doc.useServiceAccountAuth({
      client_email: Config.google.client_email,
      private_key: Config.google.private_key,
    })
    await doc.loadInfo()
    const blogs = doc.sheetsByIndex[10]
    let blogsRows = await blogs.getRows()
    this.blogs = blogsRows.map((item, index) => {
      return {
        type: item.type,
        title: item.title,
        image: item.type === 'internal_video' ? item.featured_image : this.api + item.featured_image,
        date: item.date,
        author: item.author,
        introduction: item.introduction,
        content: item.content,
      }
    })
    // Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/11/public/values?alt=json', response => {
    //   let entries = response.feed.entry
    //   for (var i = 0; i < entries.length; i += 7) {
    //     if(i > 6){
    //       let object = {
    //         type: entries[i].content.$t,
    //         title: entries[i + 1].content.$t,
    //         image: entries[i].content.$t === 'internal_video' ? entries[i + 2].content.$t : this.api + entries[i + 2].content.$t ,
    //         date: entries[i + 3].content.$t,
    //         author: entries[i + 4].content.$t,
    //         introduction: entries[i + 5].content.$t,
    //         content: entries[i + 6].content.$t,
    //       }
    //       this.blogs.push(object)
    //     }
    //   }
    // })
  },
  async getBasic(){
    const { GoogleSpreadsheet } = require('google-spreadsheet')
    const doc = new GoogleSpreadsheet(Config.googleSheetId)
    await doc.useServiceAccountAuth({
      client_email: Config.google.client_email,
      private_key: Config.google.private_key,
    })
    await doc.loadInfo()
    const configurations = doc.sheetsByIndex[2]
    let configurationsRows = await configurations.getRows()
    configurationsRows.map((item) => {
      switch(item.variable){
        case 'app_name':
          this.APP_NAME = item.value
          break
        case 'app_tagline':
          this.APP_TAGLINE = item.value
          break
        case 'app_email':
          this.APP_EMAIL = item.value
          break
        case 'app_phone_number':
          this.APP_PHONE_NUMBER = item.value
          break
        case 'app_header_background': {
          let image = item.value
          let tempImages = image !== null ? image.split(',') : null
          let imagesArray = tempImages.map((item) => {
            return {
              url: this.api + item
            }
          })
          this.APP_HEADER_BACKGROUND = imagesArray
          break
        }
        case 'app_header_mobile_background': {
          let image = item.value
          let tempImages = image !== null ? image.split(',') : null
          let imagesArray = tempImages.map((item) => {
            return {
              url: this.api + + item
            }
          })
          this.APP_HEADER_MOBILE_BACKGROUND = imagesArray
          break
        }
      }
    })
    // Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/3/public/values?alt=json', response => {
    //   let entries = response.feed.entry
    //   for (var i = 0; i < entries.length; i += 2) {
    //     if(i > 1){
    //       switch(entries[i].content.$t){
    //         case 'app_name':
    //           this.APP_NAME = entries[i + 1].content.$t
    //           break
    //         case 'app_tagline':
    //           this.APP_TAGLINE = entries[i + 1].content.$t
    //           break
    //         case 'app_email':
    //           this.APP_EMAIL = entries[i + 1].content.$t
    //           break
    //         case 'app_phone_number':
    //           this.APP_PHONE_NUMBER = entries[i + 1].content.$t
    //           break
    //         case 'address':
    //           this.address = entries[i + 1].content.$t
    //           break
    //         case 'app_header_background': {
    //           let image = entries[i + 1].content.$t
    //           let tempImages = image !== null ? image.split(',') : null
    //           let imagesArray = tempImages.map((item) => {
    //             return {
    //               url: this.api + + item
    //             }
    //           })
    //           this.APP_HEADER_BACKGROUND = imagesArray
    //           break
    //         }
    //         case 'app_header_mobile_background': {
    //           let image = entries[i + 1].content.$t
    //           let tempImages = image !== null ? image.split(',') : null
    //           let imagesArray = tempImages.map((item) => {
    //             return {
    //               url: this.api + item
    //             }
    //           })
    //           this.APP_HEADER_MOBILE_BACKGROUND = imagesArray
    //           break
    //         }
    //       }
    //     }
    //   }
    // })
  }
}