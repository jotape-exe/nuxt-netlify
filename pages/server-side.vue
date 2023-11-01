<template>
    <div>
        Server Side - Consumindo Constantes
        <br><br>

        <select v-model="uf">
            <option disabled value="">Selecione um estado</option>
            <option v-for="i in ufs" :key="i?.sigla" :value="i">
                {{ i?.nome }}
            </option>
        </select>

        <br><br>

        estado selecionado é : {{ uf }}

    </div>
</template>

<script setup>
const uf = ref()
const ufs = ref();

async function fetch() {
    console.log('buscando estados')
    const res = await useFetch('/api/constants/ufs');
    ufs.value = res.data;
}

fetch();

onMounted( async ()  => {
    console.log('montou')   
})

</script>

<style lang="scss" scoped></style>