export const useAuthApi = () => {
    const http = useNuxtApp().$http
    
    const realizarLogin = async (login:any) => {
      return await http.post('/public/login', login)
    }

    return {
      realizarLogin
    }
  }
  