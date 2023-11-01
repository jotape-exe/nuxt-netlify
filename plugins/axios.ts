import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  
  const cepClient = axios.create({
    baseURL: process.env.VIACEP_API,
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