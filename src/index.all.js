import Vue from 'vue/dist/vue.js'
import Mounter from './config/dom-listener'

// Vendor
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

const SocialSharing = require('vue-social-sharing')
Vue.use(SocialSharing)

import VModal from 'vue-js-modal'
Vue.use(VModal)

// Components
import SearchBar from './vue/SearchBar.vue'
import LocaleDropdown from './vue/LocaleDropdown.vue'
import Syllabus from './vue/Syllabus.vue'

Vue.component('search-bar', SearchBar)
Vue.component('locale-dropdown', LocaleDropdown)
Vue.component('syllabus', Syllabus)

Vue.use(VueAwesomeSwiper, {
  preventClicks: false,
  preventClicksPropagation: false,
  autoHeight: true,
  slidesPerView: 1.25,
  freeMode: true,
  freeModeMomentumRatio: 0.5,
  freeModeMomentumVelocityRatio: 0.75,
  spaceBetween: 20
})

Mounter()
