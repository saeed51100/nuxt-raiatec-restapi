// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: "utf16",
            title: "raiatec.com",
            viewport: "width=device-width, initial-scale=1",
        }
    },
// https://stackoverflow.com/questions/70099682/integrating-bootsrap-5-in-nuxt-3-and-vite
    css: ['~/assets/styles/main.scss'],

    runtimeConfig: {
        public: {
            wpUri: process.env.WP_URI,
        }
    }
})
