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
const filtro = ref();
const ufs = ref();
const buscar = async () => {
    //const { data:stats } = await useAsyncData( 'stats', () => $fetch( config.API_BASE_URL+'/stats') );
    const { data, pending, error, refresh } = await useAsyncData("ufs", () =>
        $fetch("/api/constants/ufs"),
        {
      default: () => [],
      transform: (data) => ufs}
    );

    //ufs.value = data.value;
};
</script>

<style lang="scss" scoped></style>