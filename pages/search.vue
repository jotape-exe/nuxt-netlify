<template>
  <div>
    <h1>Search Event</h1>
    Estado: <input type="text" v-model="filtro" /> {{ filtro }}
    <button @click="buscar">Buscar ufs</button>

    <br /><br />
    Estados Localizados
    <br /><br />
    <ul>
      <li v-for="i in ufs">
        {{ i }}
      </li>
    </ul>

    <br /><br />
    CEP: <input type="text" v-model="filtro" /> {{ filtro }}
    <button @click="buscarCep">Buscar Cep</button>

    <br />
    CEP Localizado
    <br />
    {{ cep }}    
  </div>
</template>

<script setup>

const cepClient = useNuxtApp().$cepClient

const {upper, lower} = useTexts();
const {getCep} = useViaCepClient();

onMounted( () => {

})

const filtro = ref('01001000');
const ufs = ref();
const cep = ref();

//axios compasables apis
const buscar = async () => {
   
}
const buscarCep = async () => {
    const {status, body } = await cepClient.get(`/${filtro.value}/json`);
    console.log(status, body)
}

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