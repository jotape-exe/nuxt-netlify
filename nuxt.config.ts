// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
    public:{
      viaCepApi:process.env.VIACEP_API
    }
  }
})
