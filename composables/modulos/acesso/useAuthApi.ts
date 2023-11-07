import type { Login } from "~/interfaces/ILogin"
import { useAuth } from "~/store/session"


export const useAuthApi = () => {
    const http = useNuxtApp().$http
    const auth = useAuth()
    
    const realizarLogin = async (login:Login) => {
      const req = await http.post('/public/login', login)

      if (req.success){
        auth.setToken(req.token)
        auth.setUsuario(req.usuario)
      }
      return req
    }

    return {
      realizarLogin
    }
  }
  