import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  const httpCep = axios.create({
    baseURL: config.public.VIACEP_API,
    headers: {
      'Content-Type': 'application/json',
    }
  });

  httpCep.interceptors.response.use(
    (res) => {
      const { data } = res;
      return { success: true, status: res.status, body: data };
    },
    (err) => {
      return { success: false, status: 409, body: 'erro ao consultar o cep' };
    }
  );

  const http = axios.create({
    baseURL: config.public.SYSTEM_API,
    headers: {
      'Content-Type': 'application/json',
    }
  });

  http.interceptors.response.use(
    (res) => {
      const { data } = res;
      return { success: true, status: data.status, body: data.body };
    },
    (err) => {
      if (err.response.status == "409") {
        console.log("business exception");
        const { data } = err.response;
        return { success: false, status: data.status, body: data.body };
      } else {
        return err;
      }
    }
  );

return {
    provide: {
      httpCep,
      http
    },
  };
});