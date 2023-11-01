// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
    TOKEN:'abcd@123#$',
    public:{
      VIACEP_API:'',
      SYSTEM_API:'',
    }
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
  modules: ['nuxt-quasar-ui'],
  quasar: {
    plugins: [
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
      'Dark',
    ],
    extras: {
      font: 'roboto-font',
    },
    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  }
})


/*

components: {
    global: true,
    dirs: ['~/components']
  },

  https://vueschool.io/articles/vuejs-tutorials/understanding-the-directory-structure-in-nuxt-3/
  */