<template>
  <div>
    <h1>Search Event</h1>
    Nome: <input type="text" v-model="filtro" /> {{ filtro }}
    <button @click="buscar">Buscar</button>

    <br /><br />
    Estados Localizados
    <br /><br />
    <ul>
      <li v-for="i in ufs">
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<script setup>

const {upper, lower} = useUfService();
const axios = useNuxtApp().$axios

onMounted( () => {

})

const filtro = ref();
const ufs = ref();

//axios -> use
const buscar = async () => {
    let data=null;
    await axios.get('/01001000/json').then( (response) => {
        data = response.data;
    })
    console.log('apos consultar o cep')
    console.log(upper(data.logradouro))
}

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