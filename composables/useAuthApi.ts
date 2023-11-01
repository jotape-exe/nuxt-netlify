export const useAuthApi = () => {
    const httpCep = useNuxtApp().$httpCep
    const getCep = async (cep:string) => {
      const res = await httpCep.get(`/${cep}/json`)
      return res
    }
    return {
        getCep
    }
  }
  