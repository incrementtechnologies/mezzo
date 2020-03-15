import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
export default{
  APP_NAME: 'Mezzo Hotel',
  APP_TAGLINE: 'LUXURY HOTEL',
  APP_EMAIL: 'admin@mezzohotel.com',
  APP_COPYRIGHT: '@Mezzo Hotel ' + new Date().getFullYear(),
  APP_DEVELOPER: 'Increment Technologies',
  APP_DEVELOPER_URL: 'http://increment.ltd',
  APP_PHONE_NUMBER: '0912345678',
  address: 'F. Cabahug, Pres. Quezon St, Cebu City, 6000 Cebu',
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
  menus: [{
    title: 'Home',
    redirect: '#home'
  }, {
    title: 'Rooms',
    redirect: '#rooms'
  }, {
    title: 'Packages',
    redirect: '#packages'
  }, {
    title: 'Restaurant',
    redirect: '#restaurants'
  }],
  packages: [{
    title: 'Kiddie Party',
    image: require('assets/img/mezzolobby.jpg'),
    action: 'inquire_now'
  }, {
    title: 'Wedding',
    image: require('assets/img/mezzolobby.jpg'),
    action: 'inquire_now'
  }, {
    title: 'Student Party',
    image: require('assets/img/mezzolobby.jpg'),
    action: 'inquire_now'
  }, {
    title: 'Conference',
    image: require('assets/img/mezzolobby.jpg'),
    action: 'inquire_now'
  }],
  testimonials: [{
    message: 'Increment has been a great help in optimizing my company\'s business processes. The team is very responsive and dynamic. Kudos!',
    name: 'Apple Seed',
    country: 'Philippines',
    position: 'President and CEO, Apple'
  }, {
    message: 'They are amazing.',
    name: 'Steve Beda',
    country: 'Australia',
    position: 'Vice President in Technology, Microsoft'
  }, {
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'John Cruz',
    country: 'Singapore',
    position: 'Chief Finance Officer, Hewlett-Packard Inc.'
  },{
    message: 'They are amazing.',
    name: 'Steve Beda',
    country: 'Australia',
    position: 'Vice President in Technology, Microsoft'
  }, {
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'John Cruz',
    country: 'Singapore',
    position: 'Chief Finance Officer, Hewlett-Packard Inc.'
  },{
    message: 'Increment has been a great help in optimizing my company\'s business processes. The team is very responsive and dynamic. Kudos!',
    name: 'Apple Seed',
    country: 'Philippines',
    position: 'President and CEO, Apple'
  }, {
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'John Cruz',
    country: 'Singapore',
    position: 'Chief Finance Officer, Hewlett-Packard Inc.'
  },{
    message: 'Increment has been a great help in optimizing my company\'s business processes. The team is very responsive and dynamic. Kudos!',
    name: 'Apple Seed',
    country: 'Philippines',
    position: 'President and CEO, Apple'
  },{
    message: 'They are amazing.',
    name: 'Steve Beda',
    country: 'Australia',
    position: 'Vice President in Technology, Microsoft'
  }],
  rooms: [{
    title: 'Deluxe Room',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    inclusions: [{
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
    }, {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
    }, {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
    }],
    price: 'PHP 2, 858.31',
    priceInclusions: 'PHP 2, 858.31 incl. Tax & Fee',
    images: [{
      url: require('assets/img/mezzolobby.jpg')
    }, {
      url: require('assets/img/mezzolobby.jpg')
    }, {
      url: require('assets/img/mezzolobby.jpg')
    }]
  }, {
    title: 'Junior Suite',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    inclusions: [{
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
    }, {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
    }, {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
    }],
    price: 'PHP 3, 000.31',
    priceInclusions: 'PHP 2, 858.31 incl. Tax & Fee',
    images: [{
      url: require('assets/img/mezzolobby.jpg')
    }, {
      url: require('assets/img/mezzolobby.jpg')
    }, {
      url: require('assets/img/mezzolobby.jpg')
    }]
  }],
  restaurants: [{
    title: 'TASTE OF EXCELLENCE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    inclusions: [{
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
    }, {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
    }, {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
    }],
    images: [{
      url: require('assets/img/mezzolobby.jpg')
    }, {
      url: require('assets/img/mezzolobby.jpg')
    }, {
      url: require('assets/img/mezzolobby.jpg')
    }]
  }, {
    title: 'TASTE OF LUXURY',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    inclusions: [{
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
    }, {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
    }, {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing '
    }],
    images: [{
      url: require('assets/img/mezzolobby.jpg')
    }, {
      url: require('assets/img/mezzolobby.jpg')
    }, {
      url: require('assets/img/mezzolobby.jpg')
    }]
  }]
}