// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
    TOKEN:'abcd@123#$',
    public:{
      VIACEP_API:'',
      SYSTEM_API:'',
    }
  }
})
