import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  
  const cepClient = axios.create({
    baseURL: 'https://viacep.com.br/ws',
    headers: {
      'Content-Type': 'application/json',
    }
  });
return {
    provide: {
      cepClient: cepClient,
    },
  };
});