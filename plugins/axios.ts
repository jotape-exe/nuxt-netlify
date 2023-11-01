import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "https://viacep.com.br/ws";

  const api = axios.create({
    baseURL: defaultUrl,
    headers: {
      'Content-Type': 'application/json',
    },
    transformRequest: [
      (data) => {
        return JSON.stringify(data);
      },
    ],
    transformResponse: [
      (data) => {
        return JSON.parse(data);
      },
    ],
  });
return {
    provide: {
      axios: api,
    },
  };
});