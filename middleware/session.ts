import { useLogin } from "~/composables/states"

export default defineNuxtRouteMiddleware((to, from) => {
      const login = useLogin()

      if(login.login.value.usuario.length < 3 || login.login.value.usuario.length < 3 ){
            navigateTo('auth/login')
      }

})