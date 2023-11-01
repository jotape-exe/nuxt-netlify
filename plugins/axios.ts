import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  
  const cepClient = axios.create({
    baseURL: 'https://viacep.com.br/ws',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  cepClient.interceptors.response.use(
    (res) => {
      const { data } = res;
      return { success: true, status: res.status, body: data };
    },
    (err) => {
      return { success: false, status: 409, body: 'erro ao consultar o cep' };
    }
  );
return {
    provide: {
      cepClient: cepClient,
    },
  };
});