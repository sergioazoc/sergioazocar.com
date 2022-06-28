import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

import {
  faBars,
  faTerminal
} from "@fortawesome/free-solid-svg-icons"

// import {
//   faChartBar
// } from "@fortawesome/free-regular-svg-icons"

import {
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
  faVuejs,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"

library.add(
  faBars,
  faYoutube,
  faTwitch,
  faTwitter,
  faInstagram,
  faVuejs,
  faGithub,
  faLinkedin,
  faTerminal
)


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('fa', FontAwesomeIcon)
})