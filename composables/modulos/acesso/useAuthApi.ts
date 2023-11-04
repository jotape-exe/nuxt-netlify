import type { Login } from "~/interfaces/ILogin"

export const useAuthApi = () => {
    const http = useNuxtApp().$http
    
    const realizarLogin = async (login:Login) => {
      return await http.post('/public/login', login)
    }

    return {
      realizarLogin
    }
  }
  