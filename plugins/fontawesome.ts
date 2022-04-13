import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faBars
} from "@fortawesome/free-solid-svg-icons"

// import {
//   faChartBar
// } from "@fortawesome/free-regular-svg-icons"

import {
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
  faVuejs
} from "@fortawesome/free-brands-svg-icons"

library.add(
  faBars,
  faYoutube,
  faTwitch,
  faTwitter,
  faInstagram,
  faVuejs
)

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('fa', FontAwesomeIcon)
})