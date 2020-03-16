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
  }, {
    title: 'Testimonials',
    redirect: '#testimonials'
  }, {
    title: 'FAQ',
    redirect: '#faq'
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
  }, {
    title: 'Business Meetings',
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
  }],
  faq: [{
    question: 'How can I book Mezzo Hotel?',
    answer: 'Mezzo Hotel offers various booking options. You can contact via phone (032) 231 0777, email at info@mezzohotel.com or send us a message through our Official Facebook Page. The easiest and quickest way is to book through our website.'
  }, {
    question: 'Where are you located?',
    answer: 'We have located along F. Cabahug corner Pres. Quezon Street, Mabolo Cebu City.'
  }, {
    question: 'At what time is check-in and check out?',
    answer: 'Standard check-in time is at 2 PM and checkout is noon Early check-in and late check-out are honored but subject for availability. A minimal fee will be applied.'
  }, {
    question: 'Do you offer handicapped rooms?',
    answer: 'Yes, Mezzo Hotel has handicapped rooms available. We also have a handicap lift for accessibility and convenience.'
  }, {
    question: 'Is parking available at the hotel?',
    answer: 'Mezzo Hotel has sufficient parking spaces as we offer the biggest function, we have around 100 parking spaces for our hotel guests.'
  }, {
    question: 'Do you have a spa?',
    answer: 'Yes, we do have in-room massage services or on-premise treatments from 12 PM to 2 AM.'
  }, {
    question: 'What are the sizes of the rooms?',
    answer: 'Our varied room sizes start at 28sqm for our Superior Rooms up to 38 sqm for our Premier Suite Rooms. We also have a 56sqm Barkada Room which is good for 10 people.'
  }, {
    question: 'Do you offer non-smoking rooms?',
    answer: 'All our rooms are non-smoking and we charge a fine of P10,000 per occasion as we have an allotted smoking area in the basement of the hotel. '
  }, {
    question: 'What should I do, if I lost or forgot something in my room?',
    answer: 'All you have to do is reach us so we could check from our lost and found items for endorsements.'
  }, {
    question: 'What other facilities do you have?',
    answer: 'Our guests get a better relaxation with full access to our swimming pool, gym, and high-speed internet WiFi. We also serve wide options of delectable dishes in our Cafe Mezzo and drinks in our Piscine Bar.'
  }, {
    question: 'What time is your pool service?',
    answer: 'Our swimming pool is open from 7 AM to 9 PM.'
  }, {
    question: 'What time is your gym?',
    answer: 'Our fitness gym is open from 6 AM to 9 PM.'
  }, {
    question: 'Do you accept walk-in guests at your restaurant?',
    answer: 'Yes, you can enjoy delectable meals or refreshing drinks at Cafe Mezzo. You may also reserve a table and contact us anytime via phone (032) 231 0777, email at info@mezzohotel.com or send us a message through our Official Facebook Page.'
  }, {
    question: 'What time is the service hours of your Restaurant?',
    answer: 'Cafe Mezzo opens at 6 AM and closes at 10 PM; the last call of order is 9:30 PM.'
  }, {
    question: 'Do you have a bar?',
    answer: 'Yes, we have a Piscine Bar that operates from 2 PM to 10 PM.'
  }, {
    question: 'What is the capacity of your function rooms?',
    answer: 'We take pride as one of the hotels that can accommodate a function of 1000 persons.'
  }, {
    question: 'What banquet packages do you offer?',
    answer: 'We offer an array of packages from Wedding to Debuts; you may contact our Events Coordinator via +639177001599 for the specifics of your requirements.'
  }, {
    question: 'Do you offer child rates?',
    answer: 'Yes, Mezzo Hotel offers family-friendly rates. For rooms, a maximum of two (2) Children ages 0-11 years old are free to stay in the room with the accompanying paying adults.  For Buffet Rates, Children from 0-4 years old are free of charge while those from 5-10 years old pay half the price; 11 years older shall already be paying the full rate.'
  }, {
    question: 'Do you offer hotel shuttles or airport transfers?',
    answer: 'We offer pickup and drop off services to and from the airport. We have available service for a sedan (maximum of 3 persons) and a van (maximum of 9 persons). We also have rates for tours and city trips.'
  }]
}