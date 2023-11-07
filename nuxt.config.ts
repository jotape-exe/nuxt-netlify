// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig:{
    TOKEN:'abcd@123#$',
    public:{
      VIACEP_API:'',
      SYSTEM_API:'',
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "nuxt-icons",
    '@pinia/nuxt',
    'radix-vue/nuxt',
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@morev/vue-transitions/nuxt",
  ],
      tailwindcss: { exposeConfig: true },
    headlessui: { prefix: "H" },
    app: {
      head: {
        title: "Digytal Code",
        
        link: [
          // Favicon
          { rel: "icon", type: "image/x-icon", href: "/icon.svg" },
          //Inter font
          { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
          { rel: "preconnect", href: "https://rsms.me/" },
        ],
      },
    },
  imports: {
    dirs: [
      // Scan top-level modules
      // 'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      // 'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  },
  ssr:false
})


/*

components: {
    global: true,
    dirs: ['~/components']
  },

  https://vueschool.io/articles/vuejs-tutorials/understanding-the-directory-structure-in-nuxt-3/
  */