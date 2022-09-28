import * as bootstrap from 'bootstrap/dist/js/bootstrap.esm'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('bootstrap', bootstrap)
})
