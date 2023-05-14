// https://stackoverflow.com/questions/70099682/integrating-bootsrap-5-in-nuxt-3-and-vite
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('bootstrap', bootstrap)
})