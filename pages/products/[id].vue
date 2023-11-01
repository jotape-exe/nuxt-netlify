<template>
    <div>
        <h1>Eu sou o conteúdo que será apresentado quando selecionarmos um produto</h1>
      <h2>{{ `simulando consumir uma api externa -> https://fakestoreapi.com/products/` + id }}</h2>
       <br>
       
        ID: {{ id }}
        <br><br>
        Titulo: {{ product.title }}
        <br><br>
        Descrição: {{ product.description }}

        <br>
        Imagem
        <br>
        <!-- ESTE COMPONENTE É CUSTOMIZADO, veja a pasta components-->
        <ProductImg :product="product"/>

    </div>
</template>

<script setup>

    const { id } = useRoute().params;
    const {data : product} = await useFetch(`https://fakestoreapi.com/products/${id}`, {key:id})
  
</script>
