<template>
  <div>
    <h1
      class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
    >
      Buscar CEP
    </h1>
    <div style="margin-top: 20px;" class="flex w-full max-w-sm items-center gap-1.5">
      CEP: <Input type="text" v-model="filtro" />
      <Button style="width: 150px" @click="buscarCep">Buscar Cep</Button>
    </div>

    <br />
    CEP Localizado
    <br />
    <UiCard v-if="cep">
    <UiCardHeader>
      <UiCardTitle>{{ cep.logradouro }}</UiCardTitle>
      <UiCardDescription>{{ cep.complemento }}</UiCardDescription>
    </UiCardHeader>
    <UiCardContent>
      {{ cep.localidade }} - {{ cep.uf }}
    </UiCardContent>
  </UiCard>
  </div>
</template>

<script setup>
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

//const cepClient = useNuxtApp().$cepClient

const { upper, lower } = useTexts();
const { getCep } = useViaCepApi();

onMounted(() => {});

const filtro = ref("01001000");
const ufs = ref();
const cep = ref();

//axios compasables apis
const buscar = async () => {};
const buscarCep = async () => {
  cep.value = null;
  //const {status, body } = await cepClient.get(`/${filtro.value}/json`);
  const { success, body } = await getCep(filtro.value);

  if (success) cep.value = body;
  else alert(body);
};

//cep.value = getCep(filtro.value);

//cep.value = cepClient.get(`/${filtro.value}/json`);

/* promise
   await cepClient.get(`/${filtro.value}/json`).then( (response) => {
        cep.value = response.data;
    })

    */

//axios direto

/*
const buscar = async () => {
    let data=null;
    await axios.get('/01001000/json').then( (response) => {
        data = response.data;
    })
    console.log('apos consultar o cep')
    console.log(upper(data.logradouro))
}
*/
/* FETCH
const buscar = async () => {
  //const { data:stats } = await useAsyncData( 'stats', () => $fetch( config.API_BASE_URL+'/stats') );
  const { data, pending, error, refresh } = await useAsyncData("ufs", () =>
    $fetch("/api/constants/ufs")
  );
  ufs.value = data.value;
};

*/
</script>

<style lang="scss" scoped></style>
