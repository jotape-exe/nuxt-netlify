export const useViaCepClient = () => {

    const cepClient = useNuxtApp().$cepClient

    const getCep = async (cep:string) => {
      const res = await cepClient.get(`/${cep}/json`)
  
      return res
    }
  
    return {
        getCep
    }
  }
  